import { countWords } from "../src/lib/word_counter";

const text_1 = "Testing my words counter";
const text_2 = "Testing my app";

describe("Unit test", () => {
  test("Test words counter", () => {
    expect(countWords(text_1)).toBe(4);
  });

  test("Test words counter as char count", () => {
    expect(text_1.length).toBe(24);
  });

  test("Test my app", () => {
    expect(countWords(text_2)).toBe(3);
  });

  test("Test words counter as char count for text 2", () => {
    expect(text_2.length).toBe(14);
  });
});
