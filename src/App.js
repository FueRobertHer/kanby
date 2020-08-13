import React from 'react';
import Board from './Board';
import StateContextProvider from './StateContextProvider';

import './App.css';

function App() {
  const boards = [0,1,2,3];
  return (
    <StateContextProvider>
      <div className="App">
        {boards.map(idx => (
          <Board boardIdx={idx} />
        ))}
      </div>
    </StateContextProvider>
  );
}

export default App;
