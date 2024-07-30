import { Game } from "../../../src/entity/game";
import { Item } from "../../../src/entity/mapper";
import { Player } from "../../../src/entity/player";
import EventType from "../../../src/entity/types/eventTypes";

describe("Item", () => {
  let game: Game;
  let item: Item;

  beforeEach(() => {
    game = new Game(1);
    item = new Item(0);
  });

  it("should return true when the event type is ITEM", () => {
    const isTypeOf = item.isTypeOf(EventType.ITEM);
    expect(isTypeOf).toBe(true);
  });

  it("should parse the line and set the player and item properties", () => {
    const line = "1 ITEM_QUAD";
    item.parse(line);
    expect(item.player).toBe(1);
    expect(item.item).toBe("ITEM_QUAD");
  });

  it("should throw an error if the line is invalid", () => {
    const line = "INVALID_LINE";
    expect(() => item.parse(line)).toThrowError("Invalid item");
  });

  it("should throw an error if the player number is invalid", () => {
    const line = "INVALID_PLAYER_NUMBER ITEM_QUAD";
    expect(() => item.parse(line)).toThrowError("Invalid player number");
  });

  it("should return true when the event type is ITEM", () => {
    const isTypeOf = item.isTypeOf(EventType.ITEM);
    expect(isTypeOf).toBe(true);
  });

  it("should parse the line and set the player and item properties", () => {
    const line = "1 ITEM_QUAD";
    item.parse(line);
    expect(item.player).toBe(1);
    expect(item.item).toBe("ITEM_QUAD");
  });

  it("should throw an error if the line is invalid", () => {
    const line = "INVALID_LINE";
    expect(() => item.parse(line)).toThrowError("Invalid item");
  });

  it("should throw an error if the player number is invalid", () => {
    const line = "INVALID_PLAYER_NUMBER ITEM_QUAD";
    expect(() => item.parse(line)).toThrowError("Invalid player number");
  });

  it("should throw an error if the player number is invalid when processing the game", () => {
    const line = "1 ITEM_QUAD";
    item.parse(line);
    expect(() => item.processGame(game)).toThrowError("Invalid player number");
  });

  it("should add the item to the player when processing the game", () => {
    const player = new Player(1);
    game.addPlayer(player);

    const line = "1 ITEM_QUAD";
    item.parse(line);
    item.processGame(game);

    expect(player?.items).toContain("ITEM_QUAD");
  });
});
