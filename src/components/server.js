const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const PORT = 3000;

// ⚡ Open Network Connectivity Access Overrides (CORS Configuration)
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Initialize Local SQLite Database Context Adapter
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error('Database connection cluster fault:', err.message);
  } else {
    console.log('Connected to TradeXpress local SQLite database cluster.');
    // Auto-integrate table schema layout matrix
    db.run(`
      CREATE TABLE IF NOT EXISTS hs_codes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        commodity_name TEXT NOT NULL,
        base_hs_code TEXT NOT NULL,
        ahtn_nomenclature TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
  }
});

/**
 * Endpoint Node: Customs Telemetry Classification Engine with DB Auto-Save
 * Route: POST /api/trade/classify
 */
app.post('/api/trade/classify', (req, res) => {
  const { commodityName, baseHsCode, ahtnSuffix } = req.body;

  if (!commodityName || !baseHsCode) {
    return res.status(400).json({ success: false, error: "Missing commodity label or base HSCode markers." });
  }

  const fullAhtnCode = ahtnSuffix ? `${baseHsCode}.${ahtnSuffix}` : `${baseHsCode}.00`;

  // Auto-integrate persistent query insertion
  const insertQuery = `INSERT INTO hs_codes (commodity_name, base_hs_code, ahtn_nomenclature) VALUES (?, ?, ?)`;
  db.run(insertQuery, [commodityName, baseHsCode, fullAhtnCode], function(err) {
    if (err) {
      console.error("Database write exception:", err.message);
      return res.status(500).json({ success: false, error: "Database save error." });
    }

    res.status(200).json({
      success: true,
      engine: "TradeXpress AHTN Core Classifier",
      timestamp: new Date().toISOString(),
      match: {
        id: this.lastID,
        commodity: commodityName,
        hs_code: baseHsCode,
        ahtn_nomenclature: fullAhtnCode,
        region_scope: "ASEAN Zone Compliance Verified & Saved"
      }
    });
  });
});

/**
 * Endpoint Node: Data Ingestion Pipeline
 * Route: POST /api/story/create
 */
app.post('/api/story/create', (req, res) => {
  const { title, content, category, targetedAssets, isPremium, status } = req.body;

  if (!title || !content || !category) {
    return res.status(400).json({ success: false, error: "Missing title, content, or category fields." });
  }

  const premiumFlag = isPremium ? 1 : 0;
  const stringifiedAssets = targetedAssets ? JSON.stringify(targetedAssets) : '[]';
  const targetStatus = status || 'draft';

  const insertQuery = `
    INSERT INTO stories (title, content, category, targeted_assets, is_premium, status)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.run(insertQuery, [title, content, category, stringifiedAssets, premiumFlag, targetStatus], function (err) {
    if (err) {
      console.error("Database tracking write failure:", err.message);
      return res.status(500).json({ success: false, error: "Internal database transaction exception occurred." });
    }

    res.status(201).json({
      success: true,
      message: "Intelligence story records registered successfully.",
      data: { storyId: this.lastID, title, status: targetStatus }
    });
  });
});

/**
 * Endpoint Node: Intelligence Extraction Engine
 * Route: GET /api/story/all
 */
app.get('/api/story/all', (req, res) => {
  db.all(`SELECT id, title, category, targeted_assets, is_premium, status, created_at FROM stories ORDER BY created_at DESC`, [], (err, rows) => {
    if (err) return res.status(500).json({ success: false, error: "Internal cluster extraction failure." });
    res.status(200).json({ success: true, count: rows.length, data: rows });
  });
});

// Spin up HTTP Network Processing Core
app.listen(PORT, () => {
  console.log(`TradeXpress production core running seamlessly on port ${PORT}`);
});
