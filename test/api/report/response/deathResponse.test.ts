import {
  DeathResponse,
  DeathResponseHandler,
} from "../../../../src/api/report/response/deathResponse";
import { Game } from "../../../../src/entity/game";
import { MeansOfDeath } from "../../../../src/entity/types/meansOfDeath";

describe("DeathResponseHandler", () => {
  it("should return the correct DeathResponse object", () => {
    const expectedResponse: DeathResponse = {
      game: 1,
      kills_by_means: {
        MOD_SHOTGUN: 3,
        MOD_ROCKET: 2,
        MOD_FALLING: 1,
      },
    };

    const game = new Game(1);
    game.addKillMod(MeansOfDeath.MOD_SHOTGUN);
    game.addKillMod(MeansOfDeath.MOD_SHOTGUN);
    game.addKillMod(MeansOfDeath.MOD_SHOTGUN);

    game.addKillMod(MeansOfDeath.MOD_FALLING);

    game.addKillMod(MeansOfDeath.MOD_ROCKET);
    game.addKillMod(MeansOfDeath.MOD_ROCKET);

    const result: DeathResponse = DeathResponseHandler(game);
    console.log("result", result);
    console.log("expectedResponse", expectedResponse);

    expect(result).toEqual(expectedResponse);
  });
});
