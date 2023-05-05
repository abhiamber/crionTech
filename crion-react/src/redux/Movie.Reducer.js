import { ADD_ERROR, PROD_GET, QUERY_ITEM } from "./Movie.action.type";
const initialState = {
  data: [],
  error: false,
  Loading: true,
};

export const movieReducer = (state = initialState, { type, payload }) => {
  //   console.log(payload);

  switch (type) {
    

    default: {
      return state;
    }
  }
};
