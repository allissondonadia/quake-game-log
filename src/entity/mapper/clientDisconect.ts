import { Game } from "../game";
import EventType from "../types/eventTypes";
import { DoomEvent } from "./DoomEvent";

export class ClientDisconnect extends DoomEvent {
  player: number;

  isTypeOf(eventType: string): boolean {
    return eventType === EventType.CLIENT_DISCONNECT;
  }

  parse(line: string): void {
    this.player = parseInt(line);
  }

  processGame(game: Game): void {
    const player = game.getPlayerById(this.player);
    game.removePlayer(player);
  }
}
