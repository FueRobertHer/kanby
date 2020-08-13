import React, { useContext } from 'react'
import GlobalStateContextProvider, { GlobalStateContext } from './GlobalStateContextProvider';
import Board from './Board';

import './App.css';

function App() {
  const boards = [0,1,2,3];

  return (
    <GlobalStateContextProvider>
      <div className="App">
        {boards.map(idx => (
          <Board key={"board" + idx} boardIdx={idx} />
        ))}
      </div>
    </GlobalStateContextProvider>
  );
}

export default App;
