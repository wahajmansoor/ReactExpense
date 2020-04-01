import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initail State
const initialState = {
  transactions: []
};

//Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function deleteTransaction(id) {
    dispatch({
      type: "Delete_transaction",
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "Add_transaction",
      payload: transaction
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
