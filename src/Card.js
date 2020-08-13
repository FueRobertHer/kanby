import React from 'react';
import './Card.css'

function Card(props) {

  const move = (dir) => {
    props.update((state) => {
      const [card] = state[props.boardIdx].items.splice(props.cardIdx, 1);
      state[props.boardIdx + dir].items.push(card); 
    })
  }

  const leftArrow = () => {
    if (props.boardIdx > 0) {
      return (
        <p className="arrow" onClick={() => move(-1)}> {"<"} </p>
      )
    }
  }

    const rightArrow = () => {
    if (props.boardIdx < 3) {
      return (
        <p className="arrow" onClick={() => move(1)}> {">"} </p>
      )
    }
  }

  return (
    <>
      <div className="card">
        {leftArrow()}
        <div className="card-text">{props.item}</div>
        {rightArrow()}
      </div>
    </>
  )
}

export default Card;