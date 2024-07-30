import EventType from "../types/eventTypes";
import { DoomEvent } from "./DoomEvent";

export class Teams extends DoomEvent {
  red: number;
  blue: number;

  isTypeOf(eventType: string): boolean {
    return (
      eventType.indexOf(EventType.TEAM_RED) === 0 ||
      eventType.indexOf(EventType.TEAM_BLUE) === 0
    );
  }

  parse(line: string): void {
    const items = line.split(" ");
    while (items.length) {
      const team = items.shift();
      if (team.indexOf(EventType.TEAM_RED) === 0) {
        this.red = parseInt(team.split(":")[1]);
      } else if (team.indexOf(EventType.TEAM_BLUE) === 0) {
        this.blue = parseInt(team.split(":")[1]);
      }
    }
  }
}
