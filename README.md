# shopSmart

A modern, fast, and high-performance grocery delivery platform modeled after Blinkit.

## 🏗 Architecture

This project is built using a decoupled client-server architecture:

- **Frontend (Client):** Built with React + Vite, styled with Tailwind CSS, utilizing `lucide-react` for iconography. Automated tests running on `vitest` and Playwright for E2E flows.
- **Backend (Server):** Node.js and Express running alongside TypeScript. Tested with `jest` and `supertest`.

## 🚀 Setup & Workflow

Follow these steps to rapidly boot up the local dev environment.

1. **Clone the repository**
2. **Setup Environment Definitions**
   Configure your local `.env` variables (e.g. `PORT=5000` in the `/server` directory).
3. **Boot Application**
   Run the idempotent startup script from the root folder:
   ```bash
   ./automation.sh
   ```
   _This automatically frees port 5000/5173 and cleanly spins up both node microservices._

## ✅ Software Engineering & Testing Specs

- **Unit Testing**: Enforced at the component level `client/src/components/dashboard/__tests__`.
- **E2E Testing**: Real browser automation using `@playwright/test` mapped to `client/tests/e2e/home.spec.js`.
- **Integration Testing**: Server routes modeled securely via `supertest`.

## 📦 Deployment Decisions

- All branches checked against Github Actions CI checking lint and syntax validity.
- The `deploy.yml` workflow natively supports AWS EC2 integration targeting specific AWS environments via GitHub Secrets injection (`EC2_HOST`, `EC2_USERNAME`, `EC2_SSH_KEY`).

## 📚 Commit Standards

We strictly follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
Examples:

- `feat: migrate product array to external DummyJSON API integration`
- `test: implement playwright web framework`
- `fix: resolve crashing hook in navigation bar`
  _Do not push bulk vague commits (like `feat: modify yml`)._
