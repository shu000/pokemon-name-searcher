import React, { FC, useReducer, Dispatch, createContext, ReactNode } from 'react';

import { TypeOfActions } from './actions';
import { State, initialState, reducer } from './reducer';

type UserContextState = {
  state: State;
  dispatch: Dispatch<TypeOfActions>;
};

const initialContextState: UserContextState = {
  state: initialState,
  // eslint-disable-next-line
  dispatch: () => {},
};

export const Context = createContext<UserContextState>(initialContextState);

export const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const initialValue = { state, dispatch };

  return <Context.Provider value={initialValue}>{children}</Context.Provider>;
};
