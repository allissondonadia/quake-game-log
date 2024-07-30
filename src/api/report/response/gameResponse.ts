import { Game } from "../../../entity/game";

export interface GameResponse {
  game: number;
  total_kills: number;
  players: string[];
  kills: { [key: string]: number };
}

export function GameResponseHandler(game: Game): GameResponse {
  const players = game.players.map(({ name }) => name).sort();

  const kills = game.players
    .sort((a, b) => b.score - a.score)
    .reduce((acc, player) => {
      acc[player.name] = player.score;
      return acc;
    }, {});

  return {
    game: game.id,
    total_kills: game.total_kills,
    players,
    kills,
  };
}
