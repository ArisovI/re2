export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "addToCart":
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      }
      console.log(state);
      return state;
    case "deleteToCart":
      let deleteFilterState = [...state].filter(
        (item) => item.id !== action.payload
      );

      return deleteFilterState;
      return state;
    default:
      return state;
  }
};
