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

  public getPlayerRank: RequestHandler = async (
    req: Request,
    res: Response
  ) => {
    const players = reportService
      .findAllPlayers()
      .sort((a, b) => b.score - a.score);

    const response = players.reduce((map, player) => {
      map[player.name] = player.score;
      return map;
    }, {});

    return res.json(response);
  };
}

export const reportController = new ReportController();
