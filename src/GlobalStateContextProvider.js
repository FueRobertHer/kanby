import React, { createContext, useReducer, useContext } from 'react';
import reducer from './reducer';

const initial = [
  {title: "Winnie", cards: ["", ""], color: "#8E6E95"},
  {title: "Bob", cards: ["", ""], color: "#39A59C"},
  {title: "Marie", cards: ["", ""], color: "#344759"},
  {title: "George", cards: ["", ""], color: "#E8741E"}
]

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