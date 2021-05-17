//each reducer we create has a state

const initState = {
  mainEvents: [],
  searched: [],
  isLoading: true,
};

const eventsReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_EVENTS":
      return {
        ...state,
        mainEvents: action.payload.mainEvents,
        isLoading: false,
      };
    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };
    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: [],
      };
    case "LOADING_EVENTS":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state };
  }
};

export default eventsReducer;
