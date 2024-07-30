import { reportService } from "../../../src/api/report/reportService";
import { readerLogFile } from "../../../src/common/readerLogFile";
import { Game } from "../../../src/entity/game";

describe("ReportService", () => {
  describe("findAllGames", () => {
    it("should return all games from readerLogFile", () => {
      const mockGames = [new Game(1), new Game(2)];
      readerLogFile.setGames(mockGames);

      const result = reportService.findAllGames();

      expect(result).toEqual(mockGames);
    });
  });
});
