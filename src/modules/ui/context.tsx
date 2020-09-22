import React, { FC, useReducer, Dispatch, createContext, ReactNode } from 'react';

import { TypeOfActions } from './actions';
import { State, initialState, reducer } from './reducer';

type UIContextState = {
  state: State;
  dispatch: Dispatch<TypeOfActions>;
};

const initialContextState: UIContextState = {
  state: initialState,
  // eslint-disable-next-line
  dispatch: () => {},
};

export const Context = createContext<UIContextState>(initialContextState);

export const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const initialValue = { state, dispatch };

  return <Context.Provider value={initialValue}>{children}</Context.Provider>;
};
