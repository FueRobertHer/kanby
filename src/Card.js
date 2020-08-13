import React, { useContext } from 'react';
import { GlobalStateContext } from './GlobalStateContextProvider';

import './Card.css';

const Card = (props) => {
  const {state, dispatch} = useContext(GlobalStateContext);

  const move = (dir) => {
    dispatch({
      type: "move",
      payload: {
        boardIdx: props.boardIdx,
        cardIdx: props.cardIdx,
        dir
      }
    })
  }

  const leftArrow = () => {
    if (props.boardIdx === 0) return;
    return (
      <p className="arrow left" onClick={() => move(-1)}> {"<"} </p>
    )
  }

  const rightArrow = () => {
    if (props.boardIdx === 4) return;
    return (
      <p className="arrow right" onClick={() => move(1)}> {">"} </p>
    )
  }

  const deleteCard = (e) => {
    e.preventDefault();
    const yes = window.confirm("Delete this card?");
    if (!yes) return;
    dispatch({
      type: "deleteCard",
      payload: {
        boardIdx: props.boardIdx,
        cardIdx: props.cardIdx
      }
    })
  }

  return (
    <div className="card" onContextMenu={deleteCard}>
      {leftArrow()}
      <div className="card-body">
        {state[props.boardIdx].cards[props.cardIdx]}
      </div>
      {rightArrow()}
    </div>
  )
}

export default Card;