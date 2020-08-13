const reducer = (state, action) => {
  const {
    type,
    payload
  } = action;
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

export default reducer;