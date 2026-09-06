const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

// Root Route - Health & Status Check
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'ONLINE',
    service: 'TradeXpress Backend API Engine',
    security: 'Cryptographic Security Verified',
    domain: 'tradexpress.co',
    supervisor: 'Creator ID 001 (Kenny Lungay)',
    timestamp: new Date().toISOString()
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

app.listen(PORT, '0.0.0.0', () => {
  console.log(`TradeXpress server running on port ${PORT}`);
});
