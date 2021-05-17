import axios from "axios";
import { mainEventsURL, searchEventURL } from "../../api"; // url to fetch

export const loadEvents = () => async (dispatch) => {
  dispatch({
    type: "LOADING_EVENTS",
  });

  // Axios fetch
  const mainEventsData = await axios.get(mainEventsURL);

  dispatch({
    type: "FETCH_EVENTS",
    payload: {
      mainEvents: mainEventsData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchEvents = await axios.get(searchEventURL(game_name));

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchEvents.data.results,
    },
  });
};
