import type { Request, RequestHandler, Response } from "express";
import { reportService } from "./reportService";
import { DeathResponseHandler } from "./response/deathResponse";
import { GameResponseHandler } from "./response/gameResponse";

class ReportController {
  public getGames: RequestHandler = async (_req: Request, res: Response) => {
    const games = reportService.findAllGames();
    return res.json(games.map(GameResponseHandler));
  };

  public getDeaths: RequestHandler = async (req: Request, res: Response) => {
    const games = reportService.findAllGames();
    return res.json(games.map(DeathResponseHandler));
  };
}

export const reportController = new ReportController();
