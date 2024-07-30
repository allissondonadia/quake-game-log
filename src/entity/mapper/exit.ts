import EventType from "../types/eventTypes";
import { DoomEvent } from "./DoomEvent";

export class Exit extends DoomEvent {
  reason: string;

  isTypeOf(eventType: string): boolean {
    return eventType === EventType.EXIT;
  }
  parse(line: string): void {
    this.reason = line;
  }
}
