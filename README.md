# WorldWise

> You travel the world. WorldWise keeps track of your adventures.

WorldWise is a full-stack-style React application that lets you log every city you've visited on an interactive world map. Click any location on the map to record your trip, add notes, and browse your travel history organized by city or country.

---

## Features

- **Interactive Map** — Powered by Leaflet and React Leaflet; click anywhere on the map to open the "Add City" form, which reverse-geocodes the coordinates and pre-fills the city name and flag.
- **City & Country lists** — Browse your visited cities (with dates) or a grid of visited countries with flags.
- **City detail view** — See the visit date, personal notes, and a Wikipedia link for each saved city.
- **Geolocation** — "Use Your Position" button pans the map to your current location.
- **Fake authentication** — Protected `/app` route behind a login screen (email + password).
- **Persistent data** — Cities are stored in a local `json-server` REST API (`data/cities.json`).
- **Code-split routing** — Pages are lazily loaded with `React.lazy` + `Suspense` for fast initial load.
- **CSS Modules** — Every component is scoped with its own `.module.css` file.

---

## Screenshots

| Homepage                                       | Login                                    |
| ---------------------------------------------- | ---------------------------------------- |
| ![Homepage](./public/screenshots/homepage.png) | ![Login](./public/screenshots/login.png) |

| City list                                  | Country grid                                     |
| ------------------------------------------ | ------------------------------------------------ |
| ![Cities](./public/screenshots/cities.png) | ![Countries](./public/screenshots/countries.png) |

| City detail                                          | Add city form                                  |
| ---------------------------------------------------- | ---------------------------------------------- |
| ![City detail](./public/screenshots/city-detail.png) | ![Add city](./public/screenshots/add-city.png) |

---

## Tech Stack

| Layer            | Technology                                                                           |
| ---------------- | ------------------------------------------------------------------------------------ |
| UI library       | [React 19](https://react.dev/)                                                       |
| Build tool       | [Vite 4](https://vitejs.dev/)                                                        |
| Routing          | [React Router v6](https://reactrouter.com/)                                          |
| Map              | [Leaflet](https://leafletjs.com/) + [React Leaflet 5](https://react-leaflet.js.org/) |
| Date picker      | [react-datepicker](https://reactdatepicker.com/)                                     |
| Mock API         | [json-server](https://github.com/typicode/json-server)                               |
| State management | React Context + `useReducer`                                                         |
| Styling          | CSS Modules                                                                          |
| Linting          | ESLint (react-app config)                                                            |

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
git clone <repo-url>
cd geowise
npm install
```

### Running the app

You need **two terminals** — one for the mock API and one for the dev server.

```bash
# Terminal 1 — start the JSON REST API on port 9000
npm run server

# Terminal 2 — start the Vite dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Login credentials (fake auth)

| Field    | Value              |
| -------- | ------------------ |
| Email    | `jack@example.com` |
| Password | `qwerty`           |

---

## Project Structure

```
src/
├── components/      # Reusable UI components (Map, Sidebar, CityList, …)
├── contexts/        # CitiesContext (useReducer) + FakeAuthContext
├── hooks/           # useGeolocation, useUrlPosition
├── pages/           # Route-level page components
└── App.jsx          # Router setup with lazy-loaded routes
data/
└── cities.json      # Seed data consumed by json-server
```

---

## Available Scripts

| Command           | Description                             |
| ----------------- | --------------------------------------- |
| `npm run dev`     | Start Vite development server           |
| `npm run build`   | Production build                        |
| `npm run preview` | Preview production build locally        |
| `npm run server`  | Start json-server mock API on port 9000 |
| `npm run lint`    | Run ESLint                              |
