import { Player } from "../../src/entity/player";

describe("Player", () => {
  let player: Player;

  beforeEach(() => {
    player = new Player(1);
  });

  it("should set the name correctly", () => {
    const name = "John Doe";
    player.setName(name);
    expect(player.name).toBe(name);
  });

  it("should set the team correctly", () => {
    const team = 1;
    player.setTeam(team);
    expect(player.team).toBe(team);
  });

  it("should add an item correctly", () => {
    const item = "Rocket Launcher";
    player.addItem(item);
    expect(player.items).toContain(item);
  });

  it("should remove an item correctly", () => {
    const item = "Rocket Launcher";
    player.addItem(item);
    player.removeItem(item);
    expect(player.items).not.toContain(item);
  });

  it("should increment kills and score when player has a kill", () => {
    player.hasKilled();
    expect(player.kills).toBe(1);
    expect(player.score).toBe(1);
  });

  it("should increment deaths and decrement score when player dies", () => {
    const playerKill = 2;
    player.hasDie(playerKill);
    expect(player.deaths).toBe(1);
    expect(player.score).toBe(0);
  });

  it("should decrement score when player dies by world", () => {
    const playerKill = 1022; // WORLD_PLAYER_ID
    player.hasDie(playerKill);
    expect(player.score).toBe(-1);
  });
});
