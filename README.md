# Coffee Rating Application

A small full-stack application where a user can vote for a coffee. Votes are stored persistently in SQLite and each vote is incremented atomically by the backend.

## Project structure

```
coffee-rating-app/
├── data/                 # SQLite database is created here at runtime
├── public/
│   ├── index.html        # UI markup
│   ├── styles.css        # Responsive styling
│   └── app.js            # Fetches coffees and sends vote requests
├── server.js             # Express API + SQLite setup
├── package.json
└── README.md
```

## Run

Install Node.js 22.5 or newer, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## API

- `GET /api/coffees` — returns coffee items sorted by votes.
- `POST /api/coffees/:id/vote` — increments a coffee's vote count and returns the updated item.
