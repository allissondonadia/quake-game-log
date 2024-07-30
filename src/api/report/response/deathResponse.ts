import { Game } from "../../../entity/game";
import { MeansOfDeath } from "../../../entity/types/meansOfDeath";

export interface DeathResponse {
  game: number;
  kills_by_means: Map<string, number>;
}

export function DeathResponseHandler(game: Game): DeathResponse {
  const deaths: Map<string, number> = new Map();
  for (let entry of game.mods.entries()) {
    deaths[MeansOfDeath[entry[0]]] = entry[1];
  }

  return {
    game: game.id,
    kills_by_means: deaths,
  };
}
