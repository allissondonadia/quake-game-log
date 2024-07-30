import { readerLogFile } from "../../common/readerLogFile";
import { Game } from "../../entity/game";

export class ReportService {
  constructor() {}

  findAllGames(): Game[] {
    return readerLogFile.games;
  }
}

export const reportService = new ReportService();
