import React from 'react';
import Card from './Card';

import './Board.css';
function Board(props) {
  const titleStyle = {
    backgroundColor: props.color,
  }

  const addCard = () => {
    const newCard = window.prompt("Enter the content of your new card");
    if (newCard && newCard.length > 0) {
      props.update((state) => {
        state[props.idx].items.push(newCard);
      })
    }
  }

  return (
    <>
      <div className="board">
        <div className="title" style={titleStyle}>{props.title}</div>
        {props.items.map((item, idx) => (
          <Card 
            items={props.items}
            item={item}
            boardIdx={props.idx}
            cardIdx={idx}
            update={props.update}
          />
        ))}
        <div className="add-card" onClick={addCard}>+ Add a card</div>
      </div>
    </>
  )
}

export default Board;