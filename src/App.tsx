import React from 'react';
import './App.css';
import Circle from './components/Circle';
import PinkBox from './components/PinkBox';
import SmallCircle from './components/SmallCircle';

function App() {


  return (
    <main>
      <div className="container">
        <PinkBox />
        <Circle />
        <SmallCircle />
      </div>
    </main>
  );
}

export default App;
