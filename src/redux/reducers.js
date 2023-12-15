import { } from "./actions";
import { GET_DATA, FILTERED_DATA} from "./actions";
const initialState={
    dataInitial: [],
    filtredAthletes:[],

}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_DATA:
            return{
                ...state,
                dataInitial:action.payload,
                filtredAthletes: action.payload
            }
        case FILTERED_DATA:
            const filter = state.filtredAthletes
            const athletesFiltered = action.payload=== "all" ? filter : filter.filter((athlethes)=>{
                return athlethes.name === action.payload
            })
            return{
                 ...state,
                dataInitial: athletesFiltered
            }
            
        default:
            return state;
    }
}