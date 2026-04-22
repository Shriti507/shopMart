import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { configDefaults } from "vitest/config";

// https://vite.dev/config/
// Proxy must match the Express PORT. Default 3000 (Express common default).
// macOS: port 5000 is often AirPlay Receiver — it can return 403 to /api POSTs if the proxy points there while the API runs elsewhere.
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const apiTarget =
    env.VITE_PROXY_TARGET || "http://127.0.0.1:3000";

  return {
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": {
        target: apiTarget,
        changeOrigin: true,
      },
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    exclude: [...configDefaults.exclude, "tests/e2e/**"],
  },
};
});
