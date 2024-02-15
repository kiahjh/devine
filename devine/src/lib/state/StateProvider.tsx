import React, { createContext, useReducer } from "react";
import type { Action, State } from "./store";
import reducer, { INITIAL_STATE } from "./store";

export const GlobalStateContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({ state: INITIAL_STATE, dispatch: () => console.log(`Provider not found`) }); // eslint-disable-line no-console

const GlobalStateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const contextValue = { state, dispatch };
  return (
    <GlobalStateContext.Provider value={contextValue}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateProvider;
