import { readerLogFile } from "../../common/readerLogFile";
import { Game } from "../../entity/game";
import { Player } from "../../entity/player";

export class ReportService {
  constructor() {}

  findAllGames(): Game[] {
    return readerLogFile.games;
  }

  findAllPlayers(): Player[] {
    const mapPlayers = {};
    for (const game of readerLogFile.games) {
      for (const player of game.players) {
        mapPlayers[player.name] = (mapPlayers[player.name] | 0) + player.score;
      }
    }

    return Object.entries(mapPlayers).map((value, index) => {
      const player = new Player(index);
      player.name = value[0];
      player.score = value[1] as number;
      return player;
    });
  }
}

export const reportService = new ReportService();
