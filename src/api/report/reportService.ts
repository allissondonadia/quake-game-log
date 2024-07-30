import { readerLogFile } from "../../common/readerLogFile";
import { Game } from "../../entity/game";

export class ReportService {
  constructor() {}

  findAllGames(): Game[] {
    return readerLogFile.games;
  }

  findById(id: number): String {
    return "Implement me!";
  }
}

export const reportService = new ReportService();
