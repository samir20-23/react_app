import React, { useState } from 'react';
import './App.css';

function App() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className={`App ${clicked ? 'clicked' : ''}`}>
      <h1 className="header">SAMIR</h1>
      <h2 className="top-text">Welcome to My React Test Project</h2>
      <button className="center-button" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default App;
