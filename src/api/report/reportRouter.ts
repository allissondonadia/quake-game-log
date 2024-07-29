import express, { type Router } from "express";
import { reportController } from "./reportController";

export const reportRouter: Router = express.Router();

reportRouter.get("/games", reportController.getUsers);
reportRouter.get("/deaths", reportController.getUsers);
