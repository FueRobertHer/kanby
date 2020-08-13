import React, { createContext, useContext, useReducer } from 'react';
import reducer from './reducer'

const initial = [
  {title: "Winnie", color: "#8e6e95", cards: ["one", "two"]},
  {title: "Bob", color: "#39a59c", cards: ["one", "two"]},
  {title: "Clair", color: "#344759", cards: ["one", "two"]},
  {title: "Billie", color: "#e8741e", cards: ["one", "two"]}
];

export const StateContext = createContext();

export const useStateContext = () => {
  const context = useContext(StateContext);
  return context;
}

const StateContextProvider = (props) => {
  const savedState = JSON.parse(window.localStorage.getItem("kanban")) || initial;
  const [state, dispatch] = useReducer(reducer, savedState);

  return (
    <StateContext.Provider value={{state, dispatch}}>
      {props.children}
    </StateContext.Provider>
  )
}

export default StateContextProvider;