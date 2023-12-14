import { } from "./actions";
import { GET_DATA } from "./actions";
const initialState={
    dataInitial: [],

}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_DATA:
            return{
                ...state,
                dataInitial:action.payload
            }
        default:
            return state;
    }
}