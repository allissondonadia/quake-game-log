import { Game } from "../../../src/entity/game";
import { InitGame } from "../../../src/entity/mapper";
import EventType from "../../../src/entity/types/eventTypes";

describe("InitGame", () => {
  let game: Game;
  let initGame: InitGame;

  beforeEach(() => {
    game = new Game(1);
    initGame = new InitGame(2);
  });

  it("should return true for isStartGame", () => {
    expect(initGame.isStartGame()).toBe(true);
  });

  it("should return true for isTypeOf when eventType is INIT_GAME", () => {
    expect(initGame.isTypeOf(EventType.INIT_GAME)).toBe(true);
  });

  it("should extract configs from the line", () => {
    const line = "some configs";
    initGame.parse(line);
  });

  it("should set the game start time", () => {
    const expectedStartTime = "01:02";
    initGame.time = expectedStartTime;
    initGame.processGame(game);
    expect(game.startTime).toBe(expectedStartTime);
  });
});
