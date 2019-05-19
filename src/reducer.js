export default (state, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + 1,
      };
      case 'countincrement':
      return {
        ...state,
        anothercount: state.anothercount + 1,
      };
    default:
      return state;
  }
}