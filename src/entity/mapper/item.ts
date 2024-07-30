import { Game } from "../game";
import EventType from "../types/eventTypes";
import { DoomEvent } from "./DoomEvent";

export class Item extends DoomEvent {
  player: number;
  item: string;

  isTypeOf(eventType: string): boolean {
    return eventType === EventType.ITEM;
  }

  parse(line: string): void {
    const items = line.split(" ");
    this.player = parseInt(items[0]);
    this.item = items[1];
  }

  processGame(game: Game): void {
    const player = game.getPlayerById(this.player);
    player.addItem(this.item);
  }
}
