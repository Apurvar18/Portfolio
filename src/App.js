// src/App.js
import React from 'react';
import './App.css';
import Home from './pages/Home'; // Import the Home component

function App() {
  return (
    <div className="App">
      <Home /> {/* Render the Home component here */}
      {/* Footer */}
      <footer>
        <p>&copy; 2025 Apurva Rajput. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
