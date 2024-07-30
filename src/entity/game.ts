import { Player } from "./player";
import { MeansOfDeath } from "./types/meansOfDeath";

export class Game {
  id: number;
  map: string;
  startTime: string;
  endTime: string;
  total_kills: number;
  frags: number;
  mods: Map<MeansOfDeath, number>;
  players: Player[];

  constructor(id: number) {
    this.id = id;
    this.players = [];
    this.mods = new Map();
    this.total_kills = 0;
  }

  addPlayer(player: Player): void {
    this.players.push(player);
  }

  removePlayer(player: Player): void {
    this.players = this.players.filter((p) => p.id !== player.id);
  }

  getPlayerById(id: number): Player {
    return this.players.find((player) => player.id === id);
  }

  getPlayerByName(name: string): Player {
    return this.players.find((player) => player.name === name);
  }

  addKillMod(mod: MeansOfDeath): void {
    if (this.mods.has(mod)) {
      this.mods.set(mod, this.mods.get(mod) + 1);
    } else {
      this.mods.set(mod, 1);
    }
  }
}
