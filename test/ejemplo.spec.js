import { assert, describe, it, test } from "vitest";

describe("ejemplo", () => {
  it("retorna 4 cuando se suma 2 + 2", () => {
    const sumaEsperada = 4;

    const sumaReal = 2 + 2;

    assert.equal(sumaReal, sumaEsperada);
  });
});
