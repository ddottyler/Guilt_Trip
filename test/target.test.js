const Target = require("../src/Target");

describe("Target class", () => {
  let testTarget;
  beforeEach(() => {
    testTarget = new Target();
  });
  test("Target should by 5000 by default", () => {
    expect(testTarget.showTarget()).toBe(5000);
  });
  test("5000 steps should pass default target", () => {
    expect(testTarget.isReached(5000)).toEqual(true);
  });
  test("4999 steps should pass default target", () => {
    expect(testTarget.isReached(4999)).toEqual(false);
  });
});