import {
  ADD_ITEM,
  DELETEITEM,
  GET_ITEM,
  //   PROD_GET,
  QUERY_ITEM,
  UPDATE_ITEM,
} from "./Movie.action.type";

const initialState = {
  data: [],

  error: false,
  Loading: true,
  auth: localStorage.getItem("token") || "abhi",
};

export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ITEM: {
      return { ...state, data: payload };
    }

    case QUERY_ITEM: {
      return { ...state };
    }
    case UPDATE_ITEM: {
      return { ...state, data: payload };
    }
    case DELETEITEM: {
      let filter = state.data.filter((elem) => elem.id !== payload);

      return { ...state, data: filter };
    }
    case "LOGIN": {
      console.log(payload);
      return { ...state, auth: payload };
    }
    case "Logout": {
      return { ...state, auth: null };
    }
    case GET_ITEM: {
      return { ...state, data: payload };
    }

    case "SEARCH": {
      return { ...state, data: payload };
    }
    case "SORT": {
      return { ...state, data: payload };
    }
    default: {
      return state;
    }
  }
};
