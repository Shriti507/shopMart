import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import Header from "../Header";

describe("Header Component", () => {
  it("renders the branding logo successfully", () => {
    render(
      <BrowserRouter>
        <Header cartCount={5} />
      </BrowserRouter>,
    );

    // Check for the shopSmart branding text
    const logoElement = screen.getByText(/shop/i);
    expect(logoElement).toBeTruthy();
  });

  it("renders the cart badge with correct count", () => {
    render(
      <BrowserRouter>
        <Header cartCount={42} />
      </BrowserRouter>,
    );

    const badge = screen.getByText("42");
    expect(badge).toBeTruthy();
  });
});
