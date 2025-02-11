const WORLD_PLAYER_ID = 1022;

export class Player {
  id: number;
  name: string;
  kills: number;
  deaths: number;
  score: number;
  team: number;
  items: string[];

  constructor(id: number) {
    this.id = id;
    this.kills = 0;
    this.deaths = 0;
    this.score = 0;
    this.items = [];
  }

  setName(name: string): void {
    this.name = name;
  }

  setTeam(team: number): void {
    this.team = team;
  }

  addItem(item: string): void {
    this.items.push(item);
  }

  removeItem(item: string): void {
    this.items = this.items.filter((i) => i !== item);
  }

  hasKilled(): void {
    this.kills++;
    this.score++;
  }

  hasDie(playerKill: number): void {
    this.deaths++;

    if (playerKill === WORLD_PLAYER_ID) {
      this.score--;
    }
  }
}
