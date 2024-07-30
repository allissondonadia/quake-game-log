import EventType from "../types/eventTypes";
import { DoomEvent } from "./DoomEvent";

export class Score extends DoomEvent {
  player: number;
  score: number;
  ping: number;

  isTypeOf(eventType: string): boolean {
    return eventType === EventType.SCORE;
  }

  parse(line: string): void {
    const items = line.split(" ");
    this.score = parseInt(items[0]);
    this.ping = parseInt(items[3]);
    this.player = parseInt(items[6]);
  }
}
