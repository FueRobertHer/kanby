const reducer = (state, action) => {
  const {type, payload} = action;
  let newState;

  switch (type) {
    case "move":
      newState = {
        ...state,
        [payload.boardIdx]: {
          ...state[payload.boardIdx],
          cards: state[payload.boardIdx].cards.filter((_,idx) => idx !== payload.cardIdx)
        },
        [payload.boardIdx + payload.dir]: {
          ...state[payload.boardIdx + payload.dir],
          cards: [...state[payload.boardIdx + payload.dir].cards, state[payload.boardIdx].cards[payload.cardIdx]]
        }
      }
      window.localStorage.setItem("kanban", JSON.stringify(newState));
      return newState;

    case "addCard":
      newState = {
        ...state,
        [payload.boardIdx]: {
          ...state[payload.boardIdx],
          cards: [...state[payload.boardIdx].cards, payload.body]
        },
      }
      window.localStorage.setItem("kanban", JSON.stringify(newState));
      return newState;

    case "deleteCard":
      newState = {
        ...state,
        [payload.boardIdx]: {
          ...state[payload.boardIdx],
          cards: state[payload.boardIdx].cards.filter((_,idx) => idx !== payload.cardIdx)
        },
      }
      window.localStorage.setItem("kanban", JSON.stringify(newState));
      return newState;

    default:
      return state;
  }
}

export default reducer;