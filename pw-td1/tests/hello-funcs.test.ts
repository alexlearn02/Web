import { helloYou, repeatHelloYou, helloHuman } from "../src/hello-funcs.ts";
//import { describe, expect, test } from "bun:test";

describe("test hello functions", () =>
    test('helloYou should return "Hello, john!"', () =>
    expect(helloYou("john")).toBe("Hello, john!"))
   );