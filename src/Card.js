import React from 'react';
import {useStateContext} from './StateContextProvider'
import './Card.css'

const Card = (props) => {
  const {state, dispatch} = useStateContext();

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

  const arrowLeft = () => {
    if (props.boardIdx > 0) {
      return (
        <p className="arrow left" onClick={() => move(-1)}> {"<"} </p>
      )
    }
  }

  const arrowRight = () => {
    if (props.boardIdx < 3) {
      return (
        <p className="arrow right" onClick={() => move(1)}> {">"} </p>
      )
    }
  }

  return (
    <div className="card">
      {arrowLeft()}
      <div className="card-body">
        {state[props.boardIdx].cards[props.cardIdx]}
      </div>
      {arrowRight()}
    </div>
  )
}

export default Card;