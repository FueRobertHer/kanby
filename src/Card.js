import React from 'react';
import './Card.css'

function Card(props) {

  const moveLeftRight = (dir) => {
    props.update((state) => {
      const [card] = state[props.boardIdx].items.splice(props.cardIdx, 1);
      state[props.boardIdx + dir].items.push(card); 
    })
  }

  const leftArrow = () => {
    if (props.boardIdx > 0) {
      return (
        <p className="arrow left" onClick={() => moveLeftRight(-1)}> {"‹"} </p>
      )
    }
  }

  const rightArrow = () => {
    if (props.boardIdx < 3) {
      return (
        <p className="arrow right" onClick={() => moveLeftRight(1)}> {"›"} </p>
      )
    }
  }

  const moveUpDown = (dir) => {
    props.update((state) => {
      let temp = state[props.boardIdx].items[props.cardIdx];
      state[props.boardIdx].items[props.cardIdx] = state[props.boardIdx].items[props.cardIdx + dir];
      state[props.boardIdx].items[props.cardIdx + dir] = temp;
    })
  }

  const upArrow = () => {
    if (props.cardIdx > 0) {
      return (
        <p className="arrow up" onClick={() => moveUpDown(-1)}> {"⌃"} </p>
      )
    }
  }

  const downArrow = () => {
    if (props.cardIdx < props.items.length - 1) {
      return (
        <p className="arrow down" onClick={() => moveUpDown(1)}> {"⌄"} </p>
      )
    }
  }

  return (
    <>
      <div className="card">
        {leftArrow()}
        <div className="card-text">
          {upArrow()}
          {props.item}
          {downArrow()}
        </div>
        {rightArrow()}
      </div>
    </>
  )
}

export default Card;