import { Game } from "../game";
import { Player } from "../player";
import EventType from "../types/eventTypes";
import { DoomEvent } from "./DoomEvent";

export class ClientConnect extends DoomEvent {
  player: number;

  isTypeOf(eventType: string): boolean {
    return eventType === EventType.CLIENT_CONNECT;
  }

  parse(line: string): void {
    this.player = parseInt(line);
  }

  processGame(game: Game): void {
    const player = new Player(this.player);
    game.addPlayer(player);
  }
}
