import { Game } from "../game";
import EventType from "../types/eventTypes";
import { DoomEvent } from "./DoomEvent";

export class InitGame extends DoomEvent {
  isStartGame(): boolean {
    return true;
  }

  isTypeOf(eventType: string): boolean {
    return eventType === EventType.INIT_GAME;
  }

  parse(line: string): void {
    this.extractConfigs(line);
  }

  processGame(game: Game): void {
    game.startTime = this.time;
  }
}
