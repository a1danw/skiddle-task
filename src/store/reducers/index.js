import { combineReducers } from "redux";
import eventsReducer from "./eventsReducer";
import detailReducer from "./eventDetailReducer";

const rootReducer = combineReducers({
  events: eventsReducer,
  detail: detailReducer,
});

export default rootReducer;
