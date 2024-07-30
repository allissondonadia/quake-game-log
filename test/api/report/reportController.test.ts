const request = require("supertest");
const app = require("../../../src/server");
import { reportService } from "../../../src/api/report/reportService";
import { Player } from "../../../src/entity/player";

describe("ReportController", () => {
  describe("getPlayerRank", () => {
    function createMockPlayer(id: number, name: string, score: number): Player {
      const player = new Player(id);
      player.name = name;
      player.score = score;
      return player;
    }

    it("should return player rankings in descending order of score", async () => {
      const mockPlayers = [
        createMockPlayer(1, "Player 1", 100),
        createMockPlayer(2, "Player 2", 200),
        createMockPlayer(3, "Player 3", 150),
      ];
      jest.spyOn(reportService, "findAllPlayers").mockReturnValue(mockPlayers);

      const response = await request(app).get("/reports/players");

      expect(response.status).toBe(200);
      expect(response.type).toBe("application/json");
      expect(response.body).toEqual({
        "Player 2": 200,
        "Player 3": 150,
        "Player 1": 100,
      });
    });
  });
});
