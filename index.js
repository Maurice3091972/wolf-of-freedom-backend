const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Helper function to read JSON files
function readJSONFile(filename) {
  try {
    const filePath = path.join(__dirname, filename);
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading ${filename}:`, error.message);
    return null;
  }
}

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Wolf of Freedom Backend API',
    endpoints: {
      senate: '/api/senate',
      crypto: '/api/crypto',
      whales: '/api/whales',
      traders: '/api/traders',
      all: '/api/all'
    }
  });
});

// Senate trades endpoint
app.get('/api/senate', (req, res) => {
  const data = readJSONFile('senate.json');
  if (data) {
    res.json(data);
  } else {
    res.status(500).json({ error: 'Failed to load senate data' });
  }
});

// Crypto data endpoint
app.get('/api/crypto', (req, res) => {
  const data = readJSONFile('crypto.json');
  if (data) {
    res.json(data);
  } else {
    res.status(500).json({ error: 'Failed to load crypto data' });
  }
});

// Whales/waltracker data endpoint
app.get('/api/whales', (req, res) => {
  const data = readJSONFile('whales.json');
  if (data) {
    res.json(data);
  } else {
    res.status(500).json({ error: 'Failed to load whales data' });
  }
});

// Top traders endpoint
app.get('/api/traders', (req, res) => {
  const data = readJSONFile('traders.json');
  if (data) {
    res.json(data);
  } else {
    res.status(500).json({ error: 'Failed to load traders data' });
  }
});

// All data endpoint - combines all data sources
app.get('/api/all', (req, res) => {
  const senateData = readJSONFile('senate.json');
  const cryptoData = readJSONFile('crypto.json');
  const whalesData = readJSONFile('whales.json');
  const tradersData = readJSONFile('traders.json');

  res.json({
    senate: senateData,
    crypto: cryptoData,
    whales: whalesData,
    traders: tradersData
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Wolf of Freedom Backend running on port ${PORT}`);
  console.log(`Access API at http://localhost:${PORT}`);
});
