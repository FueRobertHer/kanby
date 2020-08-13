import React, { useState } from 'react';
import Board from './Board';

import './App.css';

const item1 = ["Every egg carton at the grocery store needs at least two dozen eggs.", "Life is like a box of chocolate"];
const defaultState = [
  {title: "Winnie", items: item1, color: "#8E6E95"},
  {title: "Bob", items: ["3", "4"], color: "#39A59C"},
  {title: "Thomas", items: ["5", "6"], color: "#344759"},
  {title: "George", items: ["7", "8"], color: "#E8741E"}
]

function App() {
  const [state, setState] = useState(JSON.parse(window.localStorage.getItem("kanby")) || defaultState)

  const update = (func) => {
    const newState = [...state];
    func(newState);
    setState(newState);
    window.localStorage.setItem("kanby", JSON.stringify(newState));
  }

  return (
    <div className="App">
      {state.map((board, idx) => 
        <Board 
          idx={idx}
          title={board.title} 
          items={board.items} 
          color={board.color}
          update={update}
        />
      )}
    </div>
  );
}

export default App;
