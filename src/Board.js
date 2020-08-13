import React from 'react';
import Card from './Card';
import {useStateContext} from './StateContextProvider';
import './Board.css';
const Board = (props) => {
  const {state, dispatch} = useStateContext();

  const titleStyle = {
    backgroundColor: state[props.boardIdx].color
  };

  const addCard = ()=> {
    const body = window.prompt("Enter new card info");
    if (body && body.length > 0) {
      dispatch({
        type: "addCard",
        payload: {
          boardIdx: props.boardIdx,
          body
        }
      })
    }
  }

  return (
    <div className="board">
      <div className="board-title" style={titleStyle}>
        {state[props.boardIdx].title}
      </div>
        {state[props.boardIdx].cards.map((_,idx) => (
          <Card boardIdx={props.boardIdx} cardIdx={idx}/>
        ))}
      <div className="add-card" onClick={addCard}>+ Add a card</div>
    </div>
  )
}

export default Board;