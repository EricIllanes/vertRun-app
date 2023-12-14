import { dataUsers } from "../data";
export const GET_DATA = "GET_DATA";

export const getData= () => async (dispatch) => {
  dispatch({
    type: GET_DATA,
    payload: dataUsers,
  });
};
