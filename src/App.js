import React from 'react';
import './App.css';

import Chores from './components/Chores'
import { chores } from "./api";

function App() {
  return (
    <div className="App">
      <Chores 
        chores = {chores}
      />
    </div>
  );
}

export default App;
