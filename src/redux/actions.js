import { dataUsers } from "../data";
export const GET_DATA = "GET_DATA";
export const FILTERED_DATA = "FILTERED_DATA";

export const getData = () => async (dispatch) => {

setTimeout(() => {
  dispatch({
    type: GET_DATA,
    payload: dataUsers,
  });
}, 2000);

};

export const filteredData = (payload) => (dispatch)=> {
  console.log({payload})
dispatch({
  type: FILTERED_DATA,
  payload: payload
})
}