# proyect-with-my-own-library

A simple to-do list web app built with **Cyanide** — a custom-built JavaScript UI library. This project serves as a showcase and real-world test of Cyanide's core features: JSX rendering, state management, and component mounting.

## Features

- Add tasks to a list
- Remove tasks individually
- State managed via a custom FLUX store (provided by Cyanide)
- Component-based architecture with reusable `Input` , `Button` and `Card` components

## Tech Stack

- **Cyanide** — custom UI library (avalible in npm as @miqueaszarate/cyanide)
- **JSX** — via `@babel/plugin-transform-react-jsx` configured to use `cyanide` as the pragma
- **Parcel** — zero-config bundler for development and builds
- **CSS** — plain stylesheet (`app.css`)


## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)

### Installation

```bash
git clone https://github.com/cannedcoke/proyect-with-my-own-library.git
cd proyect-with-my-own-library
npm install
```

### Running the App

```bash
npm start
```

This starts a local development server via Parcel. Open your browser and go to the URL shown in the terminal (usually `http://localhost:1234`).

## How It Works

The app uses Cyanide's `createStore` to manage a list of tasks with two actions: `ADD` and `REMOVE`. The `mount` function renders the root `App` component into the `#app` DOM element. JSX is transpiled using Cyanide as the factory function (instead of `React.createElement`), configured in `babel.config.json`.

## License

ISC
