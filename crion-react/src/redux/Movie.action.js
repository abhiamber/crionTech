import { ADD_ITEM, GET_ITEM, UPDATE_ITEM } from "./Movie.action.type";
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

export const handleUdateFunction =
  ({ editableData, id }) =>
  (dispatch) => {
    if (editableData.title && editableData.Director && editableData.Genre) {
      let data = JSON.parse(localStorage.getItem("MoviesData")) || [];

      let filter = data.map((elem) => {
        if (elem.id === id) {
          return {
            ...elem,
            title: editableData.title,
            Director: editableData.Director,
            Genre: editableData.Genre,
          };
        } else {
          return elem;
        }
      });

      localStorage.setItem("MoviesData", JSON.stringify(filter));
    } else if (editableData.title && editableData.Director) {
      let data = JSON.parse(localStorage.getItem("MoviesData")) || [];

      let filter = data.map((elem) => {
        if (elem.id === id) {
          return {
            ...elem,
            title: editableData.title,
            Director: editableData.Director,
          };
        } else {
          return elem;
        }
      });

      localStorage.setItem("MoviesData", JSON.stringify(filter));
    } else if (editableData.Director && editableData.Genre) {
      let data = JSON.parse(localStorage.getItem("MoviesData")) || [];

      let filter = data.map((elem) => {
        if (elem.id === id) {
          return {
            ...elem,
            title: editableData.Genre,
            Director: editableData.Director,
          };
        } else {
          return elem;
        }
      });

      localStorage.setItem("MoviesData", JSON.stringify(filter));
    } else if (editableData.Genre && editableData.title) {
      let data = JSON.parse(localStorage.getItem("MoviesData")) || [];

      let filter = data.map((elem) => {
        if (elem.id === id) {
          return {
            ...elem,
            Genre: editableData.Genre,
            title: editableData.title,
          };
        } else {
          return elem;
        }
      });

      localStorage.setItem("MoviesData", JSON.stringify(filter));
    } else if (editableData.title) {
      let data = JSON.parse(localStorage.getItem("MoviesData")) || [];

      let filter = data.map((elem) => {
        if (elem.id === id) {
          return {
            ...elem,
            title: editableData.title,
          };
        } else {
          return elem;
        }
      });

      localStorage.setItem("MoviesData", JSON.stringify(filter));
    } else if (editableData.Director) {
      let data = JSON.parse(localStorage.getItem("MoviesData")) || [];

      let filter = data.map((elem) => {
        if (elem.id === id) {
          return {
            ...elem,
            Director: editableData.Director,
          };
        } else {
          return elem;
        }
      });

      localStorage.setItem("MoviesData", JSON.stringify(filter));
    } else if (editableData.Genre) {
      let data = JSON.parse(localStorage.getItem("MoviesData")) || [];

      let filter = data.map((elem) => {
        if (elem.id === id) {
          return {
            ...elem,
            Genre: editableData.Genre,
          };
        } else {
          return elem;
        }
      });

      localStorage.setItem("MoviesData", JSON.stringify(filter));
    }
    let datas = JSON.parse(localStorage.getItem("MoviesData")) || [];

    dispatch({ type: UPDATE_ITEM, payload: datas });
  };

export const sortFunc =
  ({ types, val, data }) =>
  (dispatch) => {
    if (types === 1) {
      if (val === "ASC") {
        // console.log(types, val, data);
        let filterData = data.sort((a, b) =>
          a.title > b.title ? 1 : b.title > a.title ? -1 : 0
        );
        // let filterData = data.sort((a, b) => a.title - b.title);
        // console.log("filter", filterData);

        dispatch({ type: "SORT", payload: filterData });
      } else {
        // let filterData = data.sort((a, b) => b.title - a.title);
        let filterData = data.sort((b, a) =>
          a.title > b.title ? 1 : b.title > a.title ? -1 : 0
        );

        dispatch({ type: "SORT", payload: filterData });
      }
    } else if (types === 2) {
      console.log(types, val, data);

      if (val === "ASC") {
        // let filterData = data.sort((a, b) => a.Director - b.Director);
        let filterData = data.sort((a, b) =>
          a.Director > b.Director ? 1 : b.Director > a.Director ? -1 : 0
        );
        dispatch({ type: "SORT", payload: filterData });
      } else {
        // let filterData = data.sort((a, b) => b.Director - a.Director);
        let filterData = data.sort((b, a) =>
          a.Director > b.Director ? 1 : b.Director > a.Director ? -1 : 0
        );
        dispatch({ type: "SORT", payload: filterData });
      }
    } else if (types === 3) {
      // console.log(types, val, data);

      if (val === "ASC") {
        // let filterData = data.sort((a, b) => a.Genre - b.Genre);
        let filterData = data.sort((a, b) =>
          a.Genre > b.Genre ? 1 : b.Genre > a.Genre ? -1 : 0
        );
        dispatch({ type: "SORT", payload: filterData });
      } else {
        // let filterData = data.sort((b, a) => b.Genre - a.Genre);
        let filterData = data.sort((b, a) =>
          a.Genre > b.Genre ? 1 : b.Genre > a.Genre ? -1 : 0
        );
        dispatch({ type: "SORT", payload: filterData });
      }
    } else if (types === 4) {
      // console.log(types, val, data);

      if (val === "ASC") {
        // let filterData = data.sort((a, b) => a.Year - b.Year);
        // console.log(data)
        let filterData = data.sort((a, b) =>
          a.Year > b.Year ? 1 : b.Year > a.Year ? -1 : 0
        );
        // console.log(filterData);

        dispatch({ type: "SORT", payload: filterData });
      } else {
        // let filterData = data.sort((a, b) => b.Year - a.Year);
        let filterData = data.sort((b, a) =>
          a.Year > b.Year ? 1 : b.Year > a.Year ? -1 : 0
        );
        // console.log(filterData[0].Year);

        dispatch({ type: "SORT", payload: filterData });
      }
    }
  };
