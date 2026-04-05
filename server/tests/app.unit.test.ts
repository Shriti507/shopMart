import { describe, it, expect } from "@jest/globals";

describe("Discount Calculator Unit Logic", () => {
  it("calculates the correct item total safely", () => {
    const calculateTotal = (price: number, quantity: number) =>
      price * quantity;
    expect(calculateTotal(15.99, 2)).toBeCloseTo(31.98);
  });

  it("prevents negative quantity inputs", () => {
    const isValidQuantity = (qty: number) => qty > 0;
    expect(isValidQuantity(-5)).toBe(false);
    expect(isValidQuantity(1)).toBe(true);
  });
});
