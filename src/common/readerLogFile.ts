import { Game } from "../entity/game";
import { parser } from "./parser";
var fs = require("fs"),
  es = require("event-stream");

class ReaderLogFile {
  private _games: Game[] = [];
  private currentGame: Game;

  constructor() {}

  private processLine(line: string): void {
    if (line.trim().length === 0) return;

    const event = parser.parse(line);
    if (event) {
      if (event.isStartGame()) {
        this.currentGame = new Game(this._games.length + 1);
        this._games.push(this.currentGame);
      }
      event.processGame(this.currentGame);
    }
  }

  public get games(): Game[] {
    return this._games;
  }

  import(file: string): Promise<Game[]> {
    try {
      this._games = [];
      var _this = this;
      return new Promise((resolve, reject) => {
        var s = fs
          .createReadStream(file)
          .pipe(es.split())
          .pipe(
            es
              .mapSync(function (line: string) {
                s.pause();
                _this.processLine(line);
                s.resume();
              })
              .on("error", function (err) {
                console.log("Error while reading file.", err);
                reject(err);
              })
              .on("end", function () {
                console.log("Read entire file.");
                resolve(_this.games);
              })
          );
      });
    } catch (err) {
      console.log(err);
    }
  }
}

export const readerLogFile = new ReaderLogFile();
