const express = require('express');
const app = express();
const port = 3002;

// Simple route
app.get('/', (req, res) => {
  res.send('Hello, Worldssss!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});