import express from 'express';
import { DatabaseSync } from 'node:sqlite';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const dataDir = path.join(__dirname, 'data');

fs.mkdirSync(dataDir, { recursive: true });

let db;
try {
  db = new DatabaseSync(path.join(dataDir, 'coffee.db'));
} catch (err) {
  console.warn('SQLite initialization warning, fallback memory used:', err.message);
}

// Table setup & Safe column migrations
if (db) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS coffees (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      origin TEXT NOT NULL,
      notes TEXT NOT NULL,
      image TEXT NOT NULL,
      roast_level TEXT NOT NULL DEFAULT 'Medium',
      process TEXT NOT NULL DEFAULT 'Washed',
      elevation TEXT NOT NULL DEFAULT '1600m - 2000m',
      brew_method TEXT NOT NULL DEFAULT 'Pour Over',
      category TEXT NOT NULL DEFAULT 'single_origin',
      rating_avg REAL NOT NULL DEFAULT 4.8,
      rating_count INTEGER NOT NULL DEFAULT 1,
      votes INTEGER NOT NULL DEFAULT 0 CHECK (votes >= 0),
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS reviews (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      coffee_id INTEGER NOT NULL,
      author TEXT NOT NULL,
      rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
      notes TEXT NOT NULL,
      body_score INTEGER DEFAULT 4,
      acidity_score INTEGER DEFAULT 4,
      sweetness_score INTEGER DEFAULT 4,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (coffee_id) REFERENCES coffees(id) ON DELETE CASCADE
    );
  `);

  // Ensure columns exist if table was previously created with fewer columns
  const existingCols = db.prepare(`PRAGMA table_info(coffees)`).all().map(c => c.name);
  const addCol = (name, def) => {
    if (!existingCols.includes(name)) {
      try {
        db.exec(`ALTER TABLE coffees ADD COLUMN ${name} ${def}`);
      } catch {
        // column may already exist
      }
    }
  };
  addCol('roast_level', "TEXT NOT NULL DEFAULT 'Medium'");
  addCol('process', "TEXT NOT NULL DEFAULT 'Washed'");
  addCol('elevation', "TEXT NOT NULL DEFAULT '1600m - 2000m'");
  addCol('brew_method', "TEXT NOT NULL DEFAULT 'Pour Over'");
  addCol('category', "TEXT NOT NULL DEFAULT 'single_origin'");
  addCol('rating_avg', "REAL NOT NULL DEFAULT 4.8");
  addCol('rating_count', "INTEGER NOT NULL DEFAULT 1");
  addCol('created_at', "TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP");

  const coffeeCount = db.prepare('SELECT COUNT(*) AS count FROM coffees').get().count;
  if (coffeeCount === 0) {
    const insertCoffee = db.prepare(`
      INSERT INTO coffees (name, origin, notes, image, roast_level, process, elevation, brew_method, category, rating_avg, rating_count, votes)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const seedCoffees = [
      ['Panama Geisha Hacienda', 'Panama (Boquete)', 'Jasmine Blossom, Peach, Bergamot, Meyer Lemon', '🌸', 'Light', 'Natural', '1800m', 'V60 Pour Over', 'single_origin', 5.0, 18, 42],
      ['Ethiopian Yirgacheffe G1', 'Ethiopia (Yirgacheffe)', 'Floral Jasmine, Citrus Lemon, Earl Grey Tea, Honey', '☕', 'Light', 'Washed', '2100m', 'Pour Over', 'single_origin', 4.9, 15, 34],
      ['Costa Rica Tarrazú Honey', 'Costa Rica (Tarrazú)', 'Wild Honey, Crisp Apricot, Golden Raisin, Cane Sugar', '🍯', 'Medium-Light', 'Honey', '1750m', 'AeroPress', 'single_origin', 4.9, 12, 31],
      ['Colombian Huila Supremo', 'Colombia (Huila)', 'Rich Caramel, Red Apple, Milk Chocolate, Vanilla', '🫘', 'Medium', 'Washed', '1650m', 'French Press', 'single_origin', 4.8, 14, 28],
      ['Kenya Nyeri AA Hillside', 'Kenya (Nyeri)', 'Blackcurrant, Grapefruit Zest, Brown Sugar, Juicy Body', '🍒', 'Medium-Light', 'Washed', '1900m', 'Chemex', 'single_origin', 4.8, 10, 26],
      ['Guatemala Antigua Finca', 'Guatemala (Antigua)', 'Dark Cocoa Nibs, Warm Cinnamon, Citrus Peel, Velvety', '☕', 'Medium', 'Washed', '1550m', 'Espresso', 'single_origin', 4.7, 9, 23],
      ['Velvet Roast Espresso Blend', 'Brazil & Colombia', 'Dark Chocolate Truffle, Toasted Hazelnut, Crema Rich', '🍫', 'Dark', 'Pulped Natural', '1300m', 'Espresso', 'espresso', 4.8, 16, 22],
      ['Sumatra Mandheling Gr.1', 'Indonesia (Sumatra)', 'Earthy Cedar, Dark Chocolate, Spiced Molasses, Heavy', '🌿', 'Dark', 'Wet Hulled', '1400m', 'French Press', 'single_origin', 4.6, 8, 19],
      ['Rwanda Bourbon Nyamagabe', 'Rwanda (Nyamagabe)', 'Red Currant, Black Ceylon Tea, Mandarin Orange', '🍊', 'Medium', 'Washed', '1950m', 'Pour Over', 'single_origin', 4.8, 7, 18],
      ['Swiss Water Decaf Organic', 'Peru (Cajamarca)', 'Silky Milk Chocolate, Sweet Toasted Almond, Honey Finish', '🌙', 'Medium', 'Swiss Water Decaf', '1600m', 'Drip / Filter', 'decaf', 4.6, 6, 15]
    ];

    for (const coffee of seedCoffees) {
      insertCoffee.run(...coffee);
    }

    // Seed initial reviews
    const insertReview = db.prepare(`
      INSERT INTO reviews (coffee_id, author, rating, notes, body_score, acidity_score, sweetness_score)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);

    insertReview.run(1, 'Marcus Vance (Q-Grader)', 5, 'Exceptional cup clarity. The jasmine florals burst immediately on drawdown, followed by sweet peach and sparkling lemon acidity.', 3, 5, 5);
    insertReview.run(1, 'Elena Rostova', 5, 'Worth every penny. Brewed on Kalita Wave at 93°C, tea-like elegance with vibrant fruit notes.', 3, 4, 5);
    insertReview.run(2, 'Sarah Jenkins', 5, 'My daily morning ritual bean. Clean floral aroma and refreshing citrus finish.', 3, 5, 4);
    insertReview.run(3, 'David Kim (Barista)', 5, 'Superb sweetness from the honey process. Silky mouthfeel on AeroPress.', 4, 3, 5);
    insertReview.run(4, 'Carlos Mendez', 5, 'Classic Colombian profile done to perfection. Balanced, comforting chocolate notes.', 4, 3, 4);
    insertReview.run(7, 'Liam Gallagher', 5, 'Pulls the thickest tiger-striped espresso shots. Incredible in flat whites!', 5, 2, 4);
  }
}

// In-memory fallback dataset if SQLite is unavailable
let memoryCoffees = [
  { id: 1, name: 'Panama Geisha Hacienda', origin: 'Panama (Boquete)', notes: 'Jasmine Blossom, Peach, Bergamot, Meyer Lemon', image: '🌸', roast_level: 'Light', process: 'Natural', elevation: '1800m', brew_method: 'V60 Pour Over', category: 'single_origin', rating_avg: 5.0, rating_count: 18, votes: 42 },
  { id: 2, name: 'Ethiopian Yirgacheffe G1', origin: 'Ethiopia (Yirgacheffe)', notes: 'Floral Jasmine, Citrus Lemon, Earl Grey Tea, Honey', image: '☕', roast_level: 'Light', process: 'Washed', elevation: '2100m', brew_method: 'Pour Over', category: 'single_origin', rating_avg: 4.9, rating_count: 15, votes: 34 },
  { id: 3, name: 'Costa Rica Tarrazú Honey', origin: 'Costa Rica (Tarrazú)', notes: 'Wild Honey, Crisp Apricot, Golden Raisin, Cane Sugar', image: '🍯', roast_level: 'Medium-Light', process: 'Honey', elevation: '1750m', brew_method: 'AeroPress', category: 'single_origin', rating_avg: 4.9, rating_count: 12, votes: 31 },
  { id: 4, name: 'Colombian Huila Supremo', origin: 'Colombia (Huila)', notes: 'Rich Caramel, Red Apple, Milk Chocolate, Vanilla', image: '🫘', roast_level: 'Medium', process: 'Washed', elevation: '1650m', brew_method: 'French Press', category: 'single_origin', rating_avg: 4.8, rating_count: 14, votes: 28 },
  { id: 5, name: 'Kenya Nyeri AA Hillside', origin: 'Kenya (Nyeri)', notes: 'Blackcurrant, Grapefruit Zest, Brown Sugar, Juicy Body', image: '🍒', roast_level: 'Medium-Light', process: 'Washed', elevation: '1900m', brew_method: 'Chemex', category: 'single_origin', rating_avg: 4.8, rating_count: 10, votes: 26 },
  { id: 6, name: 'Guatemala Antigua Finca', origin: 'Guatemala (Antigua)', notes: 'Dark Cocoa Nibs, Warm Cinnamon, Citrus Peel, Velvety', image: '☕', roast_level: 'Medium', process: 'Washed', elevation: '1550m', brew_method: 'Espresso', category: 'single_origin', rating_avg: 4.7, rating_count: 9, votes: 23 },
  { id: 7, name: 'Velvet Roast Espresso Blend', origin: 'Brazil & Colombia', notes: 'Dark Chocolate Truffle, Toasted Hazelnut, Crema Rich', image: '🍫', roast_level: 'Dark', process: 'Pulped Natural', elevation: '1300m', brew_method: 'Espresso', category: 'espresso', rating_avg: 4.8, rating_count: 16, votes: 22 },
  { id: 8, name: 'Sumatra Mandheling Gr.1', origin: 'Indonesia (Sumatra)', notes: 'Earthy Cedar, Dark Chocolate, Spiced Molasses, Heavy', image: '🌿', roast_level: 'Dark', process: 'Wet Hulled', elevation: '1400m', brew_method: 'French Press', category: 'single_origin', rating_avg: 4.6, rating_count: 8, votes: 19 },
  { id: 9, name: 'Rwanda Bourbon Nyamagabe', origin: 'Rwanda (Nyamagabe)', notes: 'Red Currant, Black Ceylon Tea, Mandarin Orange', image: '🍊', roast_level: 'Medium', process: 'Washed', elevation: '1950m', brew_method: 'Pour Over', category: 'single_origin', rating_avg: 4.8, rating_count: 7, votes: 18 },
  { id: 10, name: 'Swiss Water Decaf Organic', origin: 'Peru (Cajamarca)', notes: 'Silky Milk Chocolate, Sweet Toasted Almond, Honey Finish', image: '🌙', roast_level: 'Medium', process: 'Swiss Water Decaf', elevation: '1600m', brew_method: 'Drip / Filter', category: 'decaf', rating_avg: 4.6, rating_count: 6, votes: 15 }
];

let memoryReviews = [
  { id: 1, coffee_id: 1, author: 'Marcus Vance (Q-Grader)', rating: 5, notes: 'Exceptional cup clarity. The jasmine florals burst immediately on drawdown, followed by sweet peach and sparkling lemon acidity.', body_score: 3, acidity_score: 5, sweetness_score: 5, created_at: new Date().toISOString() },
  { id: 2, coffee_id: 1, author: 'Elena Rostova', rating: 5, notes: 'Worth every penny. Brewed on Kalita Wave at 93°C, tea-like elegance with vibrant fruit notes.', body_score: 3, acidity_score: 4, sweetness_score: 5, created_at: new Date().toISOString() },
  { id: 3, coffee_id: 2, author: 'Sarah Jenkins', rating: 5, notes: 'My daily morning ritual bean. Clean floral aroma and refreshing citrus finish.', body_score: 3, acidity_score: 5, sweetness_score: 4, created_at: new Date().toISOString() }
];

app.use(express.json());

// Enable CORS for flexibility
app.use((_req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Serve public directory and root
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname));

// GET /api/coffees (with optional search, category, sort)
app.get('/api/coffees', (req, res) => {
  const { search, category, sort } = req.query;

  if (db) {
    try {
      let query = 'SELECT * FROM coffees';
      const params = [];
      const whereClauses = [];

      if (category && category !== 'all') {
        whereClauses.push('category = ?');
        params.push(category);
      }

      if (search && search.trim()) {
        whereClauses.push('(name LIKE ? OR origin LIKE ? OR notes LIKE ?)');
        const term = `%${search.trim()}%`;
        params.push(term, term, term);
      }

      if (whereClauses.length > 0) {
        query += ' WHERE ' + whereClauses.join(' AND ');
      }

      if (sort === 'rating') {
        query += ' ORDER BY rating_avg DESC, votes DESC';
      } else if (sort === 'newest') {
        query += ' ORDER BY id DESC';
      } else if (sort === 'name') {
        query += ' ORDER BY name ASC';
      } else {
        // default top votes
        query += ' ORDER BY votes DESC, rating_avg DESC, id ASC';
      }

      const coffees = db.prepare(query).all(...params);
      return res.json(coffees);
    } catch (e) {
      console.warn('DB query error, fallback to basic list:', e.message);
    }
  }

  // Fallback memory filtering
  let results = [...memoryCoffees];
  if (category && category !== 'all') {
    results = results.filter(c => c.category === category);
  }
  if (search && search.trim()) {
    const q = search.toLowerCase();
    results = results.filter(c => c.name.toLowerCase().includes(q) || c.origin.toLowerCase().includes(q) || c.notes.toLowerCase().includes(q));
  }
  if (sort === 'rating') {
    results.sort((a, b) => b.rating_avg - a.rating_avg || b.votes - a.votes);
  } else if (sort === 'name') {
    results.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === 'newest') {
    results.sort((a, b) => b.id - a.id);
  } else {
    results.sort((a, b) => b.votes - a.votes || b.rating_avg - a.rating_avg);
  }
  res.json(results);
});

// GET /api/stats
app.get('/api/stats', (_req, res) => {
  if (db) {
    try {
      const totalRoasts = db.prepare('SELECT COUNT(*) AS count FROM coffees').get().count;
      const totalVotes = db.prepare('SELECT SUM(votes) AS sum FROM coffees').get().sum || 0;
      const topCoffee = db.prepare('SELECT name, votes FROM coffees ORDER BY votes DESC LIMIT 1').get();
      const avgRating = db.prepare('SELECT AVG(rating_avg) AS avg FROM coffees').get().avg || 4.8;

      return res.json({
        totalRoasts,
        totalVotes,
        topRoast: topCoffee ? topCoffee.name : 'Panama Geisha',
        topVotes: topCoffee ? topCoffee.votes : 0,
        avgRating: Number(avgRating.toFixed(1))
      });
    } catch (e) {
      console.warn('DB stats error:', e.message);
    }
  }

  const totalRoasts = memoryCoffees.length;
  const totalVotes = memoryCoffees.reduce((acc, c) => acc + (c.votes || 0), 0);
  const top = [...memoryCoffees].sort((a, b) => b.votes - a.votes)[0];
  const avg = memoryCoffees.reduce((acc, c) => acc + (c.rating_avg || 4.8), 0) / (totalRoasts || 1);

  res.json({
    totalRoasts,
    totalVotes,
    topRoast: top ? top.name : 'Panama Geisha',
    topVotes: top ? top.votes : 0,
    avgRating: Number(avg.toFixed(1))
  });
});

// GET /api/coffees/:id
app.get('/api/coffees/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({ error: 'A valid coffee id is required.' });
  }

  if (db) {
    try {
      const coffee = db.prepare('SELECT * FROM coffees WHERE id = ?').get(id);
      if (!coffee) return res.status(404).json({ error: 'Coffee not found.' });
      const reviews = db.prepare('SELECT * FROM reviews WHERE coffee_id = ? ORDER BY id DESC').all(id);
      return res.json({ ...coffee, reviews });
    } catch (e) {
      console.warn('DB get error:', e.message);
    }
  }

  const coffee = memoryCoffees.find(c => c.id === id);
  if (!coffee) return res.status(404).json({ error: 'Coffee not found.' });
  const reviews = memoryReviews.filter(r => r.coffee_id === id);
  res.json({ ...coffee, reviews });
});

// POST /api/coffees/:id/vote - Atomic vote increment
app.post('/api/coffees/:id/vote', (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({ error: 'A valid coffee id is required.' });
  }

  if (db) {
    try {
      const coffee = db.prepare(
        'UPDATE coffees SET votes = votes + 1 WHERE id = ? RETURNING *'
      ).get(id);
      if (!coffee) return res.status(404).json({ error: 'Coffee not found.' });
      return res.json(coffee);
    } catch (e) {
      console.warn('DB vote error:', e.message);
    }
  }

  const coffee = memoryCoffees.find(c => c.id === id);
  if (!coffee) return res.status(404).json({ error: 'Coffee not found.' });
  coffee.votes += 1;
  res.json(coffee);
});

// POST /api/coffees/:id/rate - Star rating
app.post('/api/coffees/:id/rate', (req, res) => {
  const id = Number(req.params.id);
  const rating = Number(req.body.rating);

  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({ error: 'A valid coffee id is required.' });
  }
  if (!Number.isFinite(rating) || rating < 1 || rating > 5) {
    return res.status(400).json({ error: 'Rating must be between 1 and 5.' });
  }

  if (db) {
    try {
      const coffee = db.prepare('SELECT * FROM coffees WHERE id = ?').get(id);
      if (!coffee) return res.status(404).json({ error: 'Coffee not found.' });

      const newCount = (coffee.rating_count || 1) + 1;
      const currentAvg = coffee.rating_avg || 4.8;
      const newAvg = Number((((currentAvg * (newCount - 1)) + rating) / newCount).toFixed(1));

      const updated = db.prepare(
        'UPDATE coffees SET rating_avg = ?, rating_count = ? WHERE id = ? RETURNING *'
      ).get(newAvg, newCount, id);
      return res.json(updated);
    } catch (e) {
      console.warn('DB rate error:', e.message);
    }
  }

  const coffee = memoryCoffees.find(c => c.id === id);
  if (!coffee) return res.status(404).json({ error: 'Coffee not found.' });
  const newCount = (coffee.rating_count || 1) + 1;
  coffee.rating_avg = Number((((coffee.rating_avg * (newCount - 1)) + rating) / newCount).toFixed(1));
  coffee.rating_count = newCount;
  res.json(coffee);
});

// GET /api/coffees/:id/reviews
app.get('/api/coffees/:id/reviews', (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({ error: 'A valid coffee id is required.' });
  }

  if (db) {
    try {
      const reviews = db.prepare('SELECT * FROM reviews WHERE coffee_id = ? ORDER BY id DESC').all(id);
      return res.json(reviews);
    } catch (e) {
      console.warn('DB reviews error:', e.message);
    }
  }

  const reviews = memoryReviews.filter(r => r.coffee_id === id);
  res.json(reviews);
});

// POST /api/coffees/:id/reviews - Add review
app.post('/api/coffees/:id/reviews', (req, res) => {
  const id = Number(req.params.id);
  const { author, rating, notes, body_score, acidity_score, sweetness_score } = req.body;

  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({ error: 'A valid coffee id is required.' });
  }
  if (!author || !notes || !rating) {
    return res.status(400).json({ error: 'Author, rating (1-5), and tasting notes are required.' });
  }

  const numericRating = Math.min(5, Math.max(1, Number(rating)));

  if (db) {
    try {
      const insert = db.prepare(`
        INSERT INTO reviews (coffee_id, author, rating, notes, body_score, acidity_score, sweetness_score)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `);
      insert.run(id, author.trim(), numericRating, notes.trim(), Number(body_score) || 4, Number(acidity_score) || 4, Number(sweetness_score) || 4);

      // Recalculate average
      const coffee = db.prepare('SELECT * FROM coffees WHERE id = ?').get(id);
      if (coffee) {
        const newCount = (coffee.rating_count || 1) + 1;
        const newAvg = Number((((coffee.rating_avg * (newCount - 1)) + numericRating) / newCount).toFixed(1));
        db.prepare('UPDATE coffees SET rating_avg = ?, rating_count = ? WHERE id = ?').run(newAvg, newCount, id);
      }

      const reviews = db.prepare('SELECT * FROM reviews WHERE coffee_id = ? ORDER BY id DESC').all(id);
      return res.status(201).json(reviews);
    } catch (e) {
      console.warn('DB add review error:', e.message);
    }
  }

  const newReview = {
    id: memoryReviews.length + 1,
    coffee_id: id,
    author: author.trim(),
    rating: numericRating,
    notes: notes.trim(),
    body_score: Number(body_score) || 4,
    acidity_score: Number(acidity_score) || 4,
    sweetness_score: Number(sweetness_score) || 4,
    created_at: new Date().toISOString()
  };
  memoryReviews.unshift(newReview);
  res.status(201).json(memoryReviews.filter(r => r.coffee_id === id));
});

// POST /api/coffees - Add new coffee roast
app.post('/api/coffees', (req, res) => {
  const { name, origin, notes, image, roast_level, process, elevation, brew_method, category } = req.body;

  if (!name || !origin || !notes) {
    return res.status(400).json({ error: 'Name, Origin, and Notes are required.' });
  }

  const coffeeIcon = image || '☕';
  const roast = roast_level || 'Medium';
  const proc = process || 'Washed';
  const elev = elevation || '1600m';
  const brew = brew_method || 'Pour Over';
  const cat = category || 'single_origin';

  if (db) {
    try {
      const insert = db.prepare(`
        INSERT INTO coffees (name, origin, notes, image, roast_level, process, elevation, brew_method, category, rating_avg, rating_count, votes)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 5.0, 1, 1) RETURNING *
      `);
      const newCoffee = insert.get(name.trim(), origin.trim(), notes.trim(), coffeeIcon, roast, proc, elev, brew, cat);
      return res.status(201).json(newCoffee);
    } catch (e) {
      console.warn('DB create coffee error:', e.message);
    }
  }

  const newCoffee = {
    id: memoryCoffees.length + 1,
    name: name.trim(),
    origin: origin.trim(),
    notes: notes.trim(),
    image: coffeeIcon,
    roast_level: roast,
    process: proc,
    elevation: elev,
    brew_method: brew,
    category: cat,
    rating_avg: 5.0,
    rating_count: 1,
    votes: 1,
    created_at: new Date().toISOString()
  };
  memoryCoffees.unshift(newCoffee);
  res.status(201).json(newCoffee);
});

// DELETE /api/coffees/:id - Remove coffee
app.delete('/api/coffees/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({ error: 'A valid coffee id is required.' });
  }

  if (db) {
    try {
      db.prepare('DELETE FROM reviews WHERE coffee_id = ?').run(id);
      const result = db.prepare('DELETE FROM coffees WHERE id = ?').run(id);
      if (result.changes === 0) return res.status(404).json({ error: 'Coffee not found.' });
      return res.json({ success: true, message: 'Coffee removed successfully.' });
    } catch (e) {
      console.warn('DB delete error:', e.message);
    }
  }

  const idx = memoryCoffees.findIndex(c => c.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Coffee not found.' });
  memoryCoffees.splice(idx, 1);
  res.json({ success: true, message: 'Coffee removed successfully.' });
});

// Error handling middleware
app.use((error, _req, res, _next) => {
  console.error(error);
  res.status(500).json({ error: 'Unexpected server error.' });
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`☕ Bean Board Artisanal Coffee Application is running at http://localhost:${port}`);
});

// Keep process active in non-interactive environments
setInterval(() => {}, 1000 * 60 * 60);
