import { Game } from "../game";
import { IDoomEvent } from "./IDoomEvent";

export class DoomEvent implements IDoomEvent {
  time: string;
  configs: Map<string, string>;

  constructor(time) {
    this.time = time;
    this.configs = new Map();
  }

  isStartGame(): boolean {
    return false;
  }

  isEndGame(): boolean {
    return false;
  }

  isTypeOf(eventType: string): boolean {
    return false;
  }

  parse(line: string): void {}

  processGame(game: Game): void {}

  extractConfigs(line: string): void {
    let conf = line.split("\\");
    for (let i = 0; i < conf.length - 1; i += 2) {
      this.configs.set(conf[i], conf[i + 1]);
    }
  }
}
