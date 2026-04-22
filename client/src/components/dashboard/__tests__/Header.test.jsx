import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import Header from "../Header";
import { AuthProvider } from "../../../context/AuthContext";

const wrap = (ui) => (
  <BrowserRouter>
    <AuthProvider>{ui}</AuthProvider>
  </BrowserRouter>
);

describe("Header Component", () => {
  it("renders the branding logo successfully", () => {
    render(wrap(<Header cartCount={5} />));

    // Check for the shopSmart branding text
    const logoElement = screen.getByText(/shop/i);
    expect(logoElement).toBeTruthy();
  });

  it("renders the cart badge with correct count", () => {
    render(wrap(<Header cartCount={42} />));

    const badge = screen.getByText("42");
    expect(badge).toBeTruthy();
  });
});
