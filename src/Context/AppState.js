import React, { useReducer } from "react";
import AppContext from "./app-context";
import reducer from "./reducer";

const AppState = (props) => {
  const initialState = {
    searchName: "",
    searchObject: {},
    searchObjectQuote: {},
    sortedXValues: [],
    sortedYValues: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  //Method to set the search Name
  const SET_SEARCH_NAME = (searchName) => {
    dispatch({
      type: "SET_SEARCH_NAME",
      payload: searchName,
    });
  };

  //Method to set the search object
  const SET_SEARCH_OBJECT = (searchObject) => {
    dispatch({
      type: "SET_SEARCH_OBJECT",
      payload: searchObject,
    });
  };

  //Method to set the search Name
  const SET_SEARCH_OBJECT_QUOTE = (searchObjectQuote) => {
    dispatch({
      type: "SET_SEARCH_OBJECT_QUOTE",
      payload: searchObjectQuote,
    });
  };

  //Method to set the search Name
  const SET_SORTED_X_VALUE = (sortedX) => {
    dispatch({
      type: "SET_SORTED_X_VALUE",
      payload: sortedX,
    });
  };

  //Method to set the search Name
  const SET_SORTED_Y_VALUE = (sortedY) => {
    dispatch({
      type: "SET_SORTED_Y_VALUE",
      payload: sortedY,
    });
  };

  return (
    <AppContext.Provider
      value={{
        searchName: state.searchName,
        searchObject: state.searchObject,
        searchObjectQuote: state.searchObjectQuote,
        sortedXValues: state.sortedXValues,
        sortedYValues: state.sortedYValues,
        SET_SEARCH_NAME,
        SET_SEARCH_OBJECT,
        SET_SEARCH_OBJECT_QUOTE,
        SET_SORTED_X_VALUE,
        SET_SORTED_Y_VALUE,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;

