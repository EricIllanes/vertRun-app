import { GET_DATA, FILTERED_DATA, GET_MONTH_SELECTED } from "./actions";
const initialState = {
  dataInitial: [],
  filtredAthletes: [],
  activitiesSpecificMonth: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        dataInitial: action.payload,
        filtredAthletes: action.payload,
      };

    case FILTERED_DATA: {
      const filter = state.filtredAthletes;
      const athletesFiltered = filter.filter((athletes) => {
        return athletes.name === action.payload;
      });
      return {
        ...state,
        dataInitial: athletesFiltered,
        activitiesSpecificMonth: athletesFiltered,
      };
    }

    case GET_MONTH_SELECTED: {
      const forFilter = state.activitiesSpecificMonth;
      const activitiesFiltered = forFilter.map((user) => {
        const monthSelected = user.activities.filter((act) => {
          return act.date.slice(5, 7) == action.payload;
        });
        return monthSelected;
      });

      return {
        ...state,
        activitiesSpecificMonth: activitiesFiltered,
      };
    }

    default:
      return state;
  }
}
