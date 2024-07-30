import { Game } from "../game";
import EventType from "../types/eventTypes";
import { DoomEvent } from "./DoomEvent";

export class ShutdownGame extends DoomEvent {
  isEndGame(): boolean {
    return true;
  }

  isTypeOf(eventType: string): boolean {
    return eventType === EventType.SHUTDOWN_GAME;
  }

  processGame(game: Game): void {
    game.endTime = this.time;
  }
}
