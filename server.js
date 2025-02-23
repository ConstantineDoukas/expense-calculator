const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Import the path module
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Serve static files from the same directory as server.js
app.use(express.static(path.join(__dirname, '.'))); //  <-- This is the crucial line

// Handle GET requests to the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // Send the HTML file
});

app.post('/calculate', (req, res) => {
  const inputText = req.body.input;
  const parsedData = parseInput(inputText);
  const total = calculateTotal(parsedData);
  const formattedTotal = formatCurrency(total);
  res.json({ result: `Total expenses: ${formattedTotal}` }); 
});

function formatCurrency(amount) {
  return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

function parseInput(text) {
  const lines = text.split('\n');
  const data = {};
  let currentItem = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Check if the line contains a number
    if (/\d/.test(line)) {
      const amountStr = line.replace(/[^0-9.]/g, '');
      const amount = parseFloat(amountStr);
      if (!isNaN(amount)) {
        if (!currentItem) {
          currentItem = 'Amount'; // Use a default item name
          data[currentItem] = 0;
        }
        data[currentItem] += amount; // Add to the existing amount
      }
    } else if (line) {
      currentItem = line;
      // If the item already exists, don't reset its value
      if (!data[currentItem]) {
        data[currentItem] = 0;
      }
    }
  }

  return data;
}

function calculateTotal(data) {
  let total = 0;
  for (const item in data) {
    total += data[item]; // Access the value (amount) using data[item]
  }
  return total;
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});