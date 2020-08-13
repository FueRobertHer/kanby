import React, { createContext, useReducer, useContext } from 'react';

const initial = [
  {title: "Winnie", cards: ["", ""], color: "#8E6E95"},
  {title: "Bob", cards: ["", ""], color: "#39A59C"},
  {title: "Marie", cards: ["", ""], color: "#344759"},
  {title: "George", cards: ["", ""], color: "#E8741E"}
]

const reducer = (state, action) => {
  const {type, payload} = action;
  const newState = JSON.parse(JSON.stringify(state));

  switch (type) {
    case "move":
      const [card] = newState[payload.boardIdx].cards.splice(payload.cardIdx, 1);
      newState[payload.boardIdx + payload.dir].cards.push(card);
      window.localStorage.setItem("kanban", JSON.stringify(newState));
      return newState;

    case "addCard":
      newState[payload.boardIdx].cards.push(payload.body);
      window.localStorage.setItem("kanban", JSON.stringify(newState));
      return newState;

    case "deleteCard":
      newState[payload.boardIdx].cards.splice(payload.cardIdx, 1);
      window.localStorage.setItem("kanban", JSON.stringify(newState));
      return newState;

    default:
      return state;
  }

}

export const GlobalStateContext = createContext();

export const useGlobalStateContext = () => {
  const context = useContext(GlobalStateContext);
  return context;
}

const GlobalStateContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, JSON.parse(window.localStorage.getItem("kanban")) || initial);
  
  return (
    <GlobalStateContext.Provider value={{state, dispatch}} >
      {props.children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalStateContextProvider;