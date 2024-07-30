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
    const playerNumber = parseInt(line);

    if (isNaN(playerNumber)) throw new Error("Invalid player number");
    this.player = playerNumber;
  }

  processGame(game: Game): void {
    const player = game.getPlayerById(this.player);
    if (player) return;

    const newPlayer = new Player(this.player);
    game.addPlayer(newPlayer);
  }
}
