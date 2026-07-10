# CanineScheduler

An [Nx](https://nx.dev) monorepo built with React and Module Federation. The app is split into a `shell` (host) and three remote micro-frontends: `profiles`, `scheduling`, and `notifications`.

## Prerequisites

- [Node.js](https://nodejs.org/) 20+
- npm (comes with Node.js)

## Getting started

1. Install dependencies:

   ```sh
   npm install
   ```

2. Start the full app (shell + all remotes) in one command:

   ```sh
   npm run dev
   ```

   This boots `profiles`, `scheduling`, and `notifications` first, then starts `shell` a few seconds later so the remotes are ready to be consumed. Once it's running, open the URL printed in the terminal for `shell` in your browser.

## Ports

| App             | URL                     |
| --------------- | ------------------------ |
| `shell`         | http://localhost:4200    |
| `profiles`      | http://localhost:4201    |
| `scheduling`    | http://localhost:4202    |
| `notifications` | http://localhost:4203    |

## Available commands

All commands are run with `npm run <script>` from the repository root.

| Command            | What it does                                                                                 |
| ------------------ | --------------------------------------------------------------------------------------------- |
| `npm run dev`       | Starts `profiles`, `scheduling`, `notifications`, and `shell` together (recommended way to run the app locally). |
| `npm run dev:full`  | Same as `dev`, but starts all four apps in parallel via Nx instead of staggering the shell.    |
| `npm run shell`     | Starts only the `shell` app on its own. Useful if the remotes are already running elsewhere.   |
| `npm run build`     | Builds all projects for production.                                                            |
| `npm run lint`      | Lints all projects.                                                                             |
| `npm run test`      | Runs the test suite for all projects.                                                          |

### Running a single app

You can also target one app directly with Nx, for example:

```sh
npx nx serve profiles
npx nx build scheduling
npx nx test notifications
```

To see all available targets for a given project:

```sh
npx nx show project shell
```

## Project structure

```
apps/
  shell/          # Host application, consumes the remotes below
  profiles/       # Micro-frontend: pet/owner profiles
  scheduling/     # Micro-frontend: appointment scheduling
  notifications/  # Micro-frontend: notifications
```

## Learn more

- [Nx documentation](https://nx.dev)
- Run `npx nx graph` to visually explore the workspace's projects and their dependencies.
