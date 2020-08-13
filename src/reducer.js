const reducer = (state, action) => {
  const {type, payload} = action;
  const newState = JSON.parse(JSON.stringify(state));

  switch (type) {
    case "move":
      const [movingCard] = newState[payload.boardIdx].cards.splice(payload.cardIdx, 1);
      newState[payload.boardIdx + payload.dir].cards.push(movingCard);
      window.localStorage.setItem("kanban", JSON.stringify(newState));
      return newState;

    case "addCard":
      newState[payload.boardIdx].cards.push(payload.body);
      window.localStorage.setItem("kanban", JSON.stringify(newState));
      return newState;

    default:
      return state;
  }
}

export default reducer;