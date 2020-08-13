import React, { useContext } from 'react';
import { GlobalStateContext } from './GlobalStateContextProvider';

import './Card.css';

const Card = (props) => {
  const {state, update} = useContext(GlobalStateContext);

  const move = (dir) => {
    update((state) => {
      const [card] = state[props.boardIdx].cards.splice(props.cardIdx, 1);
      state[props.boardIdx + dir].cards.push(card);
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
    update(state => {
      state[props.boardIdx].cards.splice(props.cardIdx, 1);
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