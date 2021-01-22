import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv  from "dotenv";

dotenv.config();

const server = express();
server.use(bodyParser.json({ limit: "30mb", exceeded: true }));
server.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
server.use(cors());

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => server.listen(PORT, () => console.log(`Mongo Connection successful. Server running on port: ${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);

