import EventType from "../types/eventTypes";
import { DoomEvent } from "./DoomEvent";

export class ClientBegin extends DoomEvent {
  player: number;

  isTypeOf(eventType: string): boolean {
    return eventType === EventType.CLIENT_BEGIN;
  }

  parse(line: string): void {
    this.player = parseInt(line);
  }
}
