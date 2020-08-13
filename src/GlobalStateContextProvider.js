import React, { createContext, useState } from 'react';

const initial = [
  {title: "Winnie", cards: ["", ""], color: "#8E6E95"},
  {title: "Bob", cards: ["", ""], color: "#39A59C"},
  {title: "Marie", cards: ["", ""], color: "#344759"},
  {title: "George", cards: ["", ""], color: "#E8741E"}
]

export const GlobalStateContext = createContext();

const GlobalStateContextProvider = (props) => {
  const [state, setState] = useState(JSON.parse(window.localStorage.getItem("kanban")) || initial);
  
  const update = (func) => {
    const newState = [...state];
    func(newState);
    window.localStorage.setItem("kanban", JSON.stringify(newState));
    setState(newState);
  }
  
  
  return (
    <GlobalStateContext.Provider value={{state, update}} >
      {props.children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalStateContextProvider;