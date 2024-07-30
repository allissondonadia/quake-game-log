import { Game } from "../../../src/entity/game";
import { ClientUserinfoChanged } from "../../../src/entity/mapper/clientUserInfoChanged";
import { Player } from "../../../src/entity/player";
import EventType from "../../../src/entity/types/eventTypes";

describe("ClientUserinfoChanged", () => {
  let game: Game;
  let clientUserinfoChanged: ClientUserinfoChanged;

  beforeEach(() => {
    game = new Game(1);
    clientUserinfoChanged = new ClientUserinfoChanged(2);
  });

  it("should return true when the event type is CLIENT_USER_INFO_CHANGED", () => {
    const isTypeOf = clientUserinfoChanged.isTypeOf(
      EventType.CLIENT_USER_INFO_CHANGED
    );
    expect(isTypeOf).toBe(true);
  });

  it("should update the player's name and team if the player exists in the game", () => {
    const existingPlayer = new Player(2);
    game.addPlayer(existingPlayer);
    clientUserinfoChanged.player = 2;
    clientUserinfoChanged.configs.set("n", "John");
    clientUserinfoChanged.configs.set("t", "1");

    clientUserinfoChanged.processGame(game);

    const player = game.getPlayerById(2);
    expect(player?.name).toBe("John");
    expect(player?.team).toBe(1);
  });

  it("should not update the player's name and team if the player does not exist in the game", () => {
    clientUserinfoChanged.player = 2;
    clientUserinfoChanged.configs.set("n", "John");
    clientUserinfoChanged.configs.set("t", "1");

    clientUserinfoChanged.processGame(game);

    const player = game.getPlayerById(2);
    expect(player).toBeUndefined();
  });

  it("should correctly parse the line and set the player and configs", () => {
    const line = "2 n\\John Again\\t\\1";
    clientUserinfoChanged.parse(line);
    expect(clientUserinfoChanged.player).toBe(2);
    expect(clientUserinfoChanged.configs.get("n")).toBe("John Again");
    expect(clientUserinfoChanged.configs.get("t")).toBe("1");
  });

  it("should throw an error if the player number is invalid", () => {
    const line = "invalid n\\John Again\\t\\1";
    expect(() => clientUserinfoChanged.parse(line)).toThrowError(
      "Invalid player number"
    );
  });

  it("should correctly parse the line with multiple configs", () => {
    const clientUserinfoChanged = new ClientUserinfoChanged(3);
    const line = "3 n\\Jane\\t\\2\\f\\0";
    clientUserinfoChanged.parse(line);
    expect(clientUserinfoChanged.player).toBe(3);
    expect(clientUserinfoChanged.configs.get("n")).toBe("Jane");
    expect(clientUserinfoChanged.configs.get("t")).toBe("2");
    expect(clientUserinfoChanged.configs.get("f")).toBe("0");
  });

  it("should correctly parse the line with empty configs", () => {
    const clientUserinfoChanged = new ClientUserinfoChanged(4);
    const line = "4";
    clientUserinfoChanged.parse(line);
    expect(clientUserinfoChanged.player).toBe(4);
    expect(clientUserinfoChanged.configs.size).toBe(0);
  });
});
