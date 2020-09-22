import { navigate } from '@reach/router';
import { api } from '../../utils/api';
import { TypeOfActions as TypeOfUIActions } from '../ui/actions';
import * as uiType from '../ui/types';
import { TypeOfActions } from './actions';
import * as type from './types';

const dispatchFailed = (dispatch: React.Dispatch<TypeOfUIActions>) => {
  dispatch({
    type: uiType.FETCH_FAILED,
    payload: {
      message: 'ログインに失敗しました',
    },
  });
};

/**
 * /api/login を叩く
 *
 * 成功時：dispatch(type.LOGIN_SUCCEED)して、/appに飛ばす
 *
 * 失敗時：dispatch(type.FETCH_FAILED)
 */
export const login = async (
  uiDispatch: React.Dispatch<TypeOfUIActions>,
  dispatch: React.Dispatch<TypeOfActions>,
  id: string,
  password: string
) => {
  try {
    uiDispatch({
      type: uiType.FETCH_PROGRESS,
    });

    const data = await api('POST', '/api/auth/login', { id, password });

    if (!data || !data.result) {
      dispatchFailed(uiDispatch);
      return;
    }

    uiDispatch({
      type: uiType.FETCH_SUCCEED,
    });

    dispatch({
      type: type.LOGIN_SUCCEED,
      payload: {
        user: data.result,
      },
    });

    navigate('/app/');
  } catch (error) {
    dispatchFailed(uiDispatch);
  }
};

/**
 * /api/logoutを叩く
 *
 * 成否に関わらず / に飛ばす
 */
export const logout = async () => {
  try {
    await api('POST', '/api/auth/logout', undefined);
    navigate('/');
  } catch (e) {
    // TODO: エラーメッセージだすか？
    navigate('/');
  }
};

/**
 * /api/users/me を叩く
 *
 * 成功時：dispatch(type.LOGIN_SUCCEED)
 *
 * 失敗時：/ に飛ばす
 */
export const checkSession = async (dispatch: React.Dispatch<TypeOfActions>) => {
  try {
    const data = await api('GET', '/api/auth/me', undefined);

    if (!data || !data.result) {
      navigate('/');
      return;
    }

    dispatch({
      type: type.LOGIN_SUCCEED,
      payload: {
        user: data.result,
      },
    });
  } catch (error) {
    navigate('/');
  }
};
