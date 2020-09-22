import { User } from 'models';
import { Reducer } from 'react';
import { TypeOfActions } from './actions';
import * as types from './types';

export interface State {
  user: User | undefined;
}

export const initialState: State = {
  user: undefined,
};

export const reducer: Reducer<State, TypeOfActions> = (state, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCEED:
      return {
        ...state,
        user: action.payload.user,
      };
    case types.LOGOUT_SUCCEED:
      return {
        ...state,
        user: undefined,
      };
    default:
      // eslint-disable-next-line
      const _: never = action;
      return state;
  }
};
