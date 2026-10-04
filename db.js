const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'database.sqlite');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening SQLite database', err.message);
  } else {
    console.log('Connected to the SQLite database.');
    // Initialize tables on startup
    initializeTables();
  }
});

function initializeTables() {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS compliance_rules (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      rule_name TEXT NOT NULL,
      active INTEGER DEFAULT 1,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `;
  db.run(createTableQuery, (err) => {
    if (err) {
      console.error('Error creating compliance_rules table', err.message);
    } else {
      console.log('compliance_rules table verified/created successfully.');
    }
  });
}

const dbQuery = {
  all: (sql, params = []) => {
    return new Promise((resolve, reject) => {
      db.all(sql, params, (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  },
  get: (sql, params = []) => {
    return new Promise((resolve, reject) => {
      db.get(sql, params, (err, row) => {
        if (err) reject(err);
        else resolve(row);
      });
    });
  },
  run: (sql, params = []) => {
    return new Promise((resolve, reject) => {
      db.run(sql, params, function(err) {
        if (err) reject(err);
        else resolve({ id: this.lastID, changes: this.changes });
      });
    });
  },
  instance: db 
};

module.exports = dbQuery;
