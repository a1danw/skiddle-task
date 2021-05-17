import axios from "axios";
import { eventDetailsURL } from "../../api";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });

  const detailData = await axios.get(eventDetailsURL(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      event: detailData.data.results,
    },
  });
};
