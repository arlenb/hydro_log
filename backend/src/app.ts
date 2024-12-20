import express, {json, urlencoded} from "express";
import { RegisterRoutes } from "../build/routes";

export const app = express();

var morgan = require('morgan')
app.use(morgan('dev', ':method :url :status :res[content-length] - :response-time ms'));

app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

RegisterRoutes(app);
