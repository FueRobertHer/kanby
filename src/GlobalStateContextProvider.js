import React, { createContext, useReducer, useContext } from 'react';
import reducer from './reducer';

const initial = {
  0: {title: "Winnie", cards: ["The Pooh Bear"], color: "#8E6E95"},
  1: {title: "Bob", cards: ["Own a buger shop"], color: "#39A59C"},
  2: {title: "Marie", cards: ["Clean your house"], color: "#344759"},
  3: {title: "George", cards: ["Be a monkey"], color: "#E8741E"}
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