import { Game } from "../game";
import EventType from "../types/eventTypes";
import { DoomEvent } from "./DoomEvent";

export class Kill extends DoomEvent {
  whoKill: number;
  whoIsDead: number;
  modKill: number;
  description: string;

  isTypeOf(eventType: string): boolean {
    return eventType === EventType.KILL;
  }

  parse(line: string): void {
    const infos = line.split(": ");
    const players = infos[0].split(" ");

    this.whoKill = parseInt(players[0]);
    this.whoIsDead = parseInt(players[1]);
    this.modKill = parseInt(players[2]);

    this.description = infos[1];
  }

  processGame(game: Game): void {
    game.total_kills++;

    const playerKill = game.getPlayerById(this.whoKill);
    game.addKillMod(this.modKill);

    if (playerKill) playerKill.hasKilled();

    const playerDead = game.getPlayerById(this.whoIsDead);
    if (!playerDead) throw new Error("Invalid player number");
    playerDead.hasDie(this.whoKill);
  }
}
