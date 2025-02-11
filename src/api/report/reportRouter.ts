import express, { type Router } from "express";
import { reportController } from "./reportController";

export const reportRouter: Router = express.Router();

reportRouter.get("/games", reportController.getGames);
reportRouter.get("/players", reportController.getPlayerRank);
reportRouter.get("/deaths", reportController.getDeaths);
