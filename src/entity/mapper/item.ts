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
    if (items.length < 2) throw new Error("Invalid item");

    const playerNumber = parseInt(items[0]);
    if (isNaN(playerNumber)) throw new Error("Invalid player number");

    this.player = playerNumber;
    this.item = items[1];
  }

  processGame(game: Game): void {
    const player = game.getPlayerById(this.player);
    if (!player) throw new Error("Invalid player number");
    player.addItem(this.item);
  }
}
