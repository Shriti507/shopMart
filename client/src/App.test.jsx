import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";

test("renders app", () => {
  render(
    <MemoryRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </MemoryRouter>,
  );

  expect(screen.getAllByText(/shopSmart/i).length).toBeGreaterThan(0);
});
