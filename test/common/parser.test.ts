import { parser } from "../../src/common/parser";
import { Kill } from "../../src/entity/mapper";
import { MeansOfDeath } from "../../src/entity/types/meansOfDeath";

describe("Parser", () => {
  it("should parse a line and return a valid IDoomEvent object", () => {
    const line = "0:25 Kill: 2 4 6: Oootsimo killed Zeh by MOD_ROCKET";
    const kill: Kill = new Kill("0:25");
    kill.whoKill = 2;
    kill.whoIsDead = 4;
    kill.modKill = MeansOfDeath.MOD_ROCKET;
    kill.description = "Oootsimo killed Zeh by MOD_ROCKET";

    const result = parser.parse(line);
    console.log(result);

    expect(result).toEqual(kill);
  });

  it("should return undefined when parsing an invalid line", () => {
    const line = "Invalid line";

    const result = parser.parse(line);

    expect(result).toBeUndefined();
  });

  it("should not throw error when line is wrong", () => {
    const line = "0:18 ClientConnect: a";

    const result = parser.parse(line);
    expect(result).toBeUndefined();
  });
});
