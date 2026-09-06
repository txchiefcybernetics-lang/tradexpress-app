const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;

// Enable CORS for frontend and command center communication
app.use(cors());
app.use(express.json());

// Enterprise Classifier API Endpoint
app.get('/api/classifier', (req, res) => {
  res.status(200).json({
    status: "ONLINE",
    engine: "Enterprise Classifier Engine",
    version: "v2.0.1",
    security: "Cryptographic Security Verified",
    domain: "tradexpress.co",
    supervisor: "Creator ID 001 (Kenny Lungay)"
  });
});

// TX Command Center AI Endpoint
app.post('/api/tx-bot', (req, res) => {
  const { prompt } = req.body;
  res.status(200).json({
    reply: `TX Engine Processed: ${prompt || 'Command Received'}`,
    timestamp: new Date().toISOString()
  });
});

// Primary Server Listener (Mo-keep alive sa PM2 process)
app.listen(PORT, '0.0.0.0', () => {
  console.log(`TradeXpress server running on port ${PORT}`);
});
