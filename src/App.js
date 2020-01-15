import React from 'react';
import './App.css';
import './styles/tailwind.css'

import { Background } from './common/background/background'
import Stage from './stage/Stage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Background />
        <Stage />
      </header>
    </div>
  );
}

export default App;
