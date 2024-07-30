import { Game } from "../../src/entity/game";
import { Player } from "../../src/entity/player";
import { MeansOfDeath } from "../../src/entity/types/meansOfDeath";

describe("Game", () => {
  let game: Game;
  let player1: Player;
  let player2: Player;

  beforeEach(() => {
    game = new Game(1);
    player1 = new Player(1);
    player2 = new Player(2);
  });

  it("should add a player to the game", () => {
    game.addPlayer(player1);
    expect(game.players.length).toBe(1);
    expect(game.players[0]).toBe(player1);
  });

  it("should remove a player from the game", () => {
    game.addPlayer(player1);
    game.addPlayer(player2);
    expect(game.players.length).toBe(2);

    game.removePlayer(player1);
    expect(game.players.length).toBe(1);
    expect(game.players[0]).toBe(player2);
  });

  it("should get a player by id", () => {
    game.addPlayer(player1);
    const foundPlayer = game.getPlayerById(1);
    expect(foundPlayer).toBe(player1);
  });

  it("should get a player by name", () => {
    player1.setName("Player 1");
    game.addPlayer(player1);
    const foundPlayer = game.getPlayerByName("Player 1");
    expect(foundPlayer).toBe(player1);
  });

  it("should add a kill mod", () => {
    game.addKillMod(MeansOfDeath.MOD_SHOTGUN);
    game.addKillMod(MeansOfDeath.MOD_ROCKET);
    game.addKillMod(MeansOfDeath.MOD_SHOTGUN);
    expect(game.mods.get(MeansOfDeath.MOD_SHOTGUN)).toBe(2);
    expect(game.mods.get(MeansOfDeath.MOD_ROCKET)).toBe(1);
  });
});
