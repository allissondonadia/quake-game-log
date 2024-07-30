import { Game } from "../../../src/entity/game";
import { Kill } from "../../../src/entity/mapper";
import { Player } from "../../../src/entity/player";
import EventType from "../../../src/entity/types/eventTypes";
import { MeansOfDeath } from "../../../src/entity/types/meansOfDeath";

describe("Kill", () => {
  let game: Game;
  let kill: Kill;
  let player1: Player;
  let player2: Player;

  beforeEach(() => {
    game = new Game(1);
    kill = new Kill(0);

    player1 = new Player(1);
    player2 = new Player(2);
    game.addPlayer(player1);
    game.addPlayer(player2);
  });

  it("should return true when the event type is KILL", () => {
    const isTypeOf = kill.isTypeOf(EventType.KILL);
    expect(isTypeOf).toBe(true);
  });

  it("should parse the line and set the kill properties", () => {
    const line = "1 2 4: Oootsimo killed Zeh by MOD_ROCKET";
    kill.parse(line);
    expect(kill.whoKill).toBe(1);
    expect(kill.whoIsDead).toBe(2);
    expect(kill.modKill).toBe(4);
  });

  it("should increment the total kills in the game", () => {
    const line = "1 2 4: Oootsimo killed Zeh by MOD_ROCKET";
    kill.parse(line);
    kill.processGame(game);
    expect(game.total_kills).toBe(1);
  });

  it("should increment the kill count for the player who made the kill", () => {
    const line = "1 2 4: Oootsimo killed Zeh by MOD_ROCKET";
    kill.parse(line);
    kill.processGame(game);

    expect(player1.kills).toBe(1);
    expect(player1.score).toBe(1);
  });

  it("should increment the death count for the player who died", () => {
    const line = "1 2 4: Oootsimo killed Zeh by MOD_ROCKET";
    kill.parse(line);
    kill.processGame(game);

    expect(player2.deaths).toBe(1);
    expect(player2.score).toBe(0);
  });

  it("should decrement the score count for the player who was killed by World", () => {
    const line = "1022 2 4: Oootsimo killed Zeh by MOD_ROCKET";
    kill.parse(line);
    kill.processGame(game);

    expect(player2.deaths).toBe(1);
    expect(player2.score).toBe(-1);
  });

  it("should add the kill mod to the game's kill mods", () => {
    const line = "1 2 4: Oootsimo killed Zeh by MOD_GRENADE";
    kill.parse(line);
    kill.processGame(game);
    expect(game.mods.get(MeansOfDeath.MOD_GRENADE)).toEqual(1);
  });

  it("should throw an error if the player number is invalid", () => {
    const line = "1 3 4: Oootsimo killed Zeh by MOD_ROCKET";
    kill.parse(line);
    expect(() => kill.processGame(game)).toThrowError("Invalid player number");
  });
});
