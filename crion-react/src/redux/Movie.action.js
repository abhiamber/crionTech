import { ADD_ITEM, GET_ITEM } from "./Movie.action.type";
import { API } from "../API";

export const addMovieDataFunc = (data) => async (dispatch) => {
  //   console.log(data, "bhjbjhj");
  //   let res = await fetch(`${API}/blogs`, {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   try {
  //     let datas = await res.json();
  //     console.log(datas);
  //     dispatch({ type: ADD_ITEM, payload: datas[0] });
  //   } catch (e) {
  //     console.log(e);
  //   }
  let allMovieData = JSON.parse(localStorage.getItem("MoviesData")) || [];
  allMovieData.push(data);
  localStorage.setItem("MoviesData", JSON.stringify(allMovieData));
  dispatch({ type: ADD_ITEM, payload: allMovieData });
};

export const getMovieDataFunc = () => async (dispatch) => {
  //   console.log("data", "bhjbjhj");
  //   let res = await fetch(`${API}/blogs`);
  //   try {
  //     let datas = await res.json();
  //     console.log(datas);
  //     dispatch({ type: GET_ITEM, payload: datas });
  //   } catch (e) {
  //     console.log(e);
  //   }
  let allMovieData = JSON.parse(localStorage.getItem("MoviesData")) || [];
  // allMovieData.push(data);
  localStorage.setItem("MoviesData", JSON.stringify(allMovieData));
  dispatch({ type: GET_ITEM, payload: allMovieData });
};



