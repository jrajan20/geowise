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

### Homepage

<img width="1295" height="652" alt="Screenshot From 2026-07-07 07-03-30" src="https://github.com/user-attachments/assets/19f3bfaa-e933-4a12-98b8-1da335add352" />

### Login

<img width="1295" height="652" alt="image" src="https://github.com/user-attachments/assets/c3b47521-4221-4aa4-a513-b74603e58a22" />

### City List

<img width="1295" height="652" alt="Screenshot From 2026-07-07 07-06-39" src="https://github.com/user-attachments/assets/369cb8ce-772a-45da-9c85-33dc1cd7ff30" />


### Country Grid

<img width="1295" height="652" alt="Screenshot From 2026-07-07 07-06-53" src="https://github.com/user-attachments/assets/748abe17-4467-4513-88dd-d134e2ba164d" />

### City Detail

<img width="1295" height="652" alt="Screenshot From 2026-07-07 07-07-05" src="https://github.com/user-attachments/assets/c2475136-142b-4612-b021-4c9b27e4ad10" />


### Add City Form

<img width="1295" height="652" alt="Screenshot From 2026-07-07 07-08-11" src="https://github.com/user-attachments/assets/22e2761a-dc97-4fa6-b557-33284ae39200" />

<img width="1295" height="652" alt="Screenshot From 2026-07-07 07-08-22" src="https://github.com/user-attachments/assets/269dcd4d-cfed-43bb-8eb4-99624ca6863f" />



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
