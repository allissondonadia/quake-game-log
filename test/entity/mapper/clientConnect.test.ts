import { Game } from "../../../src/entity/game";
import { ClientConnect } from "../../../src/entity/mapper/clientConnect";
import { Player } from "../../../src/entity/player";
import EventType from "../../../src/entity/types/eventTypes";

describe("ClientConnect", () => {
  let game: Game;
  let clientConnect;

  beforeEach(() => {
    game = new Game(1);
    clientConnect = new ClientConnect(2);
  });

  it("should return true for isTypeOf when eventType is CLIENT_CONNECT", () => {
    expect(clientConnect.isTypeOf(EventType.CLIENT_CONNECT)).toBe(true);
  });

  it("should parse the line and set the player property", () => {
    clientConnect.parse("5");
    expect(clientConnect.player).toBe(5);
  });

  it("should throw an error if the player number is invalid", () => {
    expect(() => clientConnect.parse("invalid")).toThrowError(
      "Invalid player number"
    );
  });

  it("should add a new player to the game if the player does not exist", () => {
    const existingPlayer = new Player(4);
    game.addPlayer(existingPlayer);

    clientConnect.player = 5;
    clientConnect.processGame(game);

    const player = game.getPlayerById(5);
    expect(player?.id).toBe(5);
    expect(game.players.length).toBe(2);
  });

  it("should not add a new player to the game if the player already exists", () => {
    const existingPlayer = new Player(5);
    game.addPlayer(existingPlayer);

    clientConnect.player = 5;
    clientConnect.processGame(game);

    const player = game.getPlayerById(5);
    expect(player).toBe(existingPlayer);
    expect(game.players.length).toBe(1);
  });
});
