import { Game } from "../../../src/entity/game";
import { DoomEvent } from "../../../src/entity/mapper/DoomEvent";

describe("DoomEvent", () => {
  let doomEvent: DoomEvent;
  let game: Game;

  beforeEach(() => {
    doomEvent = new DoomEvent("10:00");
    game = new Game(0);
  });

  it("should initialize with the provided time", () => {
    expect(doomEvent.time).toBe("10:00");
  });

  it("should initialize with an empty configs map", () => {
    expect(doomEvent.configs.size).toBe(0);
  });

  it("should return false for isStartGame method", () => {
    expect(doomEvent.isStartGame()).toBe(false);
  });

  it("should return false for isEndGame method", () => {
    expect(doomEvent.isEndGame()).toBe(false);
  });

  it("should return false for isTypeOf method", () => {
    expect(doomEvent.isTypeOf("eventType")).toBe(false);
  });

  it("should extract configs from the provided line", () => {
    const line = "config1\\value1\\config2\\value2";
    doomEvent.extractConfigs(line);
    expect(doomEvent.configs.size).toBe(2);
    expect(doomEvent.configs.get("config1")).toBe("value1");
    expect(doomEvent.configs.get("config2")).toBe("value2");
  });
});
