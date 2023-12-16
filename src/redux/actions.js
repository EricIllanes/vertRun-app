import { dataUsers } from "../data";
export const GET_DATA = "GET_DATA";
export const FILTERED_DATA = "FILTERED_DATA";
export const  GET_MONTH_SELECTED = " GET_MONTH_SELECTED";

export const getData = () => async (dispatch) => {
    dispatch({
      type: GET_DATA,
      payload: dataUsers,
    });

};

export const filteredData = (payload) => (dispatch) => {
  dispatch({
    type: FILTERED_DATA,
    payload: payload,
  });
};

export const getMonthSelected = (payload) => (dispatch) => {
  dispatch({
    type:  GET_MONTH_SELECTED,
    payload: payload,
  });
};
