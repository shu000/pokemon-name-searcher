import { User } from 'models';
import * as types from './types';

/**
 * ログイン成功時アクション
 */
const loginSucceed = (user: User) => ({
  type: types.LOGIN_SUCCEED,
  payload: {
    user,
  },
});

/**
 * ログアウト成功時アクション
 */
const logoutSucceed = () => ({
  type: types.LOGOUT_SUCCEED,
});

export const actions = { loginSucceed, logoutSucceed };
export type TypeOfActions = ReturnType<typeof loginSucceed | typeof logoutSucceed>;
