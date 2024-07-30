import { Game } from "../game";

export interface IDoomEvent {
  isStartGame(): boolean;
  isEndGame(): boolean;
  isTypeOf(eventType: string): boolean;

  parse(line: string): void;
  processGame(game: Game): void;
}
