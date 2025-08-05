const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

app.get('/api/intern', (req, res) => {
  res.json({
    name: "A Josphin",
    referralCode: "ajosphin2025",
    totalDonations: 5200
  });
});

app.get('/api/leaderboard', (req, res) => {
  res.json([
    { name: "A Josphin", totalDonations: 5200 },
    { name: "Ankit R", totalDonations: 4500 },
    { name: "Sneha S", totalDonations: 3900 }
  ]);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
