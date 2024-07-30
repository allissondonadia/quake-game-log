import { IDoomEvent } from "../entity/mapper/IDoomEvent";
import * as Entities from "../entity/mapper/index";

class Parser {
  constructor() {}

  parse(line: string): IDoomEvent {
    const items = line.trim().split(" ");

    const time = items.shift();
    const eventType = items.shift();
    const event = this.getEvent(time, eventType);
    if (event) {
      event.parse(items.join(" "));
      return event;
    }
  }

  getEvent(time: string, eventType: string): IDoomEvent {
    for (let Entity in Entities) {
      const doomEvent = new Entities[Entity](time);
      if (doomEvent.isTypeOf(eventType)) {
        return doomEvent;
      }
    }
  }
}

export const parser = new Parser();
