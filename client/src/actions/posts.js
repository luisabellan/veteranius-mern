import * as api from '../api';

//action creators
//using redux thunk to successfully dispatch an action using our data (posts)
export const getPosts = () => async (dispatch) => {

    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: "FETCH_ALL", payload: data });
    } catch(error) {
        console.timeLog(error.message)
    }
    
}