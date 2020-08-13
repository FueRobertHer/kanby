import React, { useContext } from 'react';
import {GlobalStateContext} from './GlobalStateContextProvider';
import Card from './Card';

import './Board.css';

const Board = (props) => {
  const {state, update} = useContext(GlobalStateContext);
  const titleStyle = {
    backgroundColor: state[props.boardIdx].color
  };
  console.log(state[props.boardIdx])

  const addCard = () => {
    const newCard = window.prompt("Enter something into a new card");
    if (!newCard || newCard.length === 0) return;
    update((state) => {
      state[props.boardIdx].cards.push(newCard);
    })
  }
  return (
    <div className="board">
      <h2 className="board-title" style={titleStyle}>{state[props.boardIdx].title}</h2>
      {state[props.boardIdx].cards.map((card, idx) => (
        <Card 
          key={"board" + props.boardIdx + "card" + idx} 
          boardIdx={props.boardIdx} 
          cardIdx={idx} 
        />
      ))}
      <div className="add-card" onClick={addCard}>+ Add a card</div>
    </div>
  )
}

export default Board;