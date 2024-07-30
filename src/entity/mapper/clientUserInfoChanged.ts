import { Game } from "../game";
import EventType from "../types/eventTypes";
import { DoomEvent } from "./DoomEvent";

export class ClientUserinfoChanged extends DoomEvent {
  player: number;

  isTypeOf(eventType: string): boolean {
    return eventType === EventType.CLIENT_USER_INFO_CHANGED;
  }

  parse(line: string): void {
    const infos = line.split(" ");
    const playerNumber = parseInt(infos.shift());
    if (isNaN(playerNumber)) throw new Error("Invalid player number");

    this.player = playerNumber;
    this.extractConfigs(infos.join(" "));
  }

  processGame(game: Game): void {
    const player = game.getPlayerById(this.player);
    if (player) {
      player.setName(this.configs.get("n"));
      player.setTeam(parseInt(this.configs.get("t")));
    }
  }
}
