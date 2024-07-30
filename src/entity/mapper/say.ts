import EventType from "../types/eventTypes";
import { DoomEvent } from "./DoomEvent";

export class Say extends DoomEvent {
  player: string;
  message: string;

  isTypeOf(eventType: string): boolean {
    return eventType === EventType.SAY;
  }

  parse(line: string): void {
    const items = line.split(": ");
    this.player = items.shift();
    this.message = items.join(" ");
  }
}
