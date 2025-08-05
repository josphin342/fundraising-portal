import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [intern, setIntern] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/intern').then(res => setIntern(res.data));
    axios.get('http://localhost:5000/api/leaderboard').then(res => setLeaderboard(res.data));
  }, []);

  return (
    <div className="container">
      <h1>Fundraising Intern Dashboard</h1>
      {intern && (
        <>
          <p><strong>Name:</strong> {intern.name}</p>
          <p><strong>Referral Code:</strong> {intern.referralCode}</p>
          <p><strong>Total Donations:</strong> ₹{intern.totalDonations}</p>
        </>
      )}
      <h2>Rewards</h2>
      <ul>
        <li>🎖️ Bronze - ₹1000</li>
        <li>🏅 Silver - ₹3000</li>
        <li>🥇 Gold - ₹5000</li>
      </ul>

      <h2>Leaderboard</h2>
      <ol>
        {leaderboard.map((entry, index) => (
          <li key={index}>{entry.name} - ₹{entry.totalDonations}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
