import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { movieReducer } from "./redux/Movie.Reducer";
const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const rootReudcer = combineReducers({
//   prod: movieReducer,
// });

export const store = legacy_createStore(
  movieReducer,
  createComposer(applyMiddleware(thunk))
);
