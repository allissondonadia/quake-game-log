import { readerLogFile } from "../../src/common/readerLogFile";
import { Game } from "../../src/entity/game";

describe("ReaderLogFile", () => {
  let games: Game[];

  beforeEach(() => {
    games = [];
    readerLogFile.setGames(games);
  });

  it("should not add a game if the line is empty", () => {
    const line = "";
    readerLogFile.processLine(line);
    expect(games.length).toBe(0);
  });

  it("should add a new game if the line indicates the start of a game", () => {
    const line = "12:13 InitGame: \\sv_floodProtect\\1\\sv_maxPing\\0";
    readerLogFile.processLine(line);
    expect(games.length).toBe(1);
  });

  it("should not throw error when line is wrong", () => {
    const line = "14:46 Kill: 5 2 6: Assasinu Credi killed Zeh by MOD_ROCKET";
    readerLogFile.processLine(line);
  });
});
