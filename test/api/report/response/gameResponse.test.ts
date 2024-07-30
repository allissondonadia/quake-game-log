import { GameResponseHandler } from "../../../../src/api/report/response/gameResponse";
import { Game } from "../../../../src/entity/game";
import { Player } from "../../../../src/entity/player";

describe("GameResponseHandler", () => {
  let game: Game;
  let player1: Player;
  let player2: Player;
  let player3: Player;

  beforeEach(() => {
    game = new Game(1);

    player1 = new Player(1);
    player1.name = "Player 1";

    player2 = new Player(2);
    player2.name = "Player 2";

    player3 = new Player(3);
    player3.name = "Player 3";
  });

  it("should return the correct game response", () => {
    game.addPlayer(player1);
    game.addPlayer(player3);
    game.addPlayer(player2);

    player1.score = 4;
    player2.score = 1;
    player3.score = 5;
    game.total_kills = 10;

    const expectedResponse = {
      game: 1,
      total_kills: 10,
      players: ["Player 1", "Player 2", "Player 3"],
      kills: {
        "Player 3": 5,
        "Player 1": 4,
        "Player 2": 1,
      },
    };

    const response = GameResponseHandler(game);
    expect(response).toEqual(expectedResponse);
  });

  it("should return an empty players array if the game has no players", () => {
    const expectedResponse = {
      game: 1,
      total_kills: 0,
      players: [],
      kills: {},
    };

    const response = GameResponseHandler(game);

    expect(response).toEqual(expectedResponse);
  });
});
