import { Reducer } from 'react';
import { TypeOfActions } from './actions';
import * as types from './types';

export interface State {
  loading: boolean;
  message: {
    isShow: boolean;
    severity: 'success' | 'error' | 'info';
    text: string;
  };
}

export const initialState: State = {
  loading: false,
  message: {
    isShow: false,
    severity: 'success',
    text: '',
  },
};

export const reducer: Reducer<State, TypeOfActions> = (state, action) => {
  switch (action.type) {
    case types.FETCH_PROGRESS:
      return {
        ...state,
        loading: true,
        message: {
          ...state.message,
          isShow: false,
        },
      };
    case types.FETCH_SUCCEED:
      return {
        ...state,
        loading: false,
        message: {
          isShow: false,
          severity: 'success',
          text: '',
        },
      };
    case types.FETCH_FAILED:
      return {
        ...state,
        loading: false,
        message: {
          isShow: true,
          severity: 'error',
          text: action.payload.message,
        },
      };
    case types.FEEDBACK_MESSAGE_CLOSED:
      return {
        ...state,
        message: {
          ...state.message,
          isShow: false,
        },
      };
    default:
      // eslint-disable-next-line
      const _: never = action;
      return state;
  }
};
