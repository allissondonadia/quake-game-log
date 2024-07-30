import { reportService } from "../../../src/api/report/reportService";
import { readerLogFile } from "../../../src/common/readerLogFile";
import { Game } from "../../../src/entity/game";
import { Player } from "../../../src/entity/player";

describe("ReportService", () => {
  describe("findAllGames", () => {
    it("should return all games from readerLogFile", () => {
      const mockGames = [new Game(1), new Game(2)];
      readerLogFile.setGames(mockGames);

      const result = reportService.findAllGames();

      expect(result).toEqual(mockGames);
    });
  });

  describe("findAllPlayers", () => {
    function createMockPlayer(id: number, name: string, score: number): Player {
      const player = new Player(id);
      player.name = name;
      player.score = score;
      return player;
    }

    it("should return all players with their total scores", () => {
      const game1 = new Game(1);
      game1.addPlayer(createMockPlayer(1, "Player 1", 10));
      game1.addPlayer(createMockPlayer(2, "Player 2", 20));

      const game2 = new Game(1);
      game2.addPlayer(createMockPlayer(3, "Player 1", 5));
      game2.addPlayer(createMockPlayer(1, "Player 3", 15));

      const mockGames = [game1, game2];
      readerLogFile.setGames(mockGames);
      const result = reportService.findAllPlayers();
      const expectedPlayers = [
        createMockPlayer(0, "Player 1", 15),
        createMockPlayer(1, "Player 2", 20),
        createMockPlayer(2, "Player 3", 15),
      ];
      expect(result).toEqual(expectedPlayers);
    });
  });
});
