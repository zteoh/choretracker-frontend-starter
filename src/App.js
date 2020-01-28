import React from 'react';
import './App.css';

import Chores from './components/Chores'
import { initalChores } from "./api";

function App() {
  return (
    <div className="App">
      <Chores 
      initialChores = {initalChores}
      />
    </div>
  );
}

export default App;
