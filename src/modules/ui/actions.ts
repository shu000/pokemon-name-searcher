import * as types from './types';

/**
 * 非同期通信 開始時アクション
 */
const fetchProgress = () => ({
  type: types.FETCH_PROGRESS,
});

/**
 * 非同期通信 成功時アクション
 */
const fetchSucceed = () => ({
  type: types.FETCH_SUCCEED,
});

/**
 * 非同期通信 失敗時アクション
 */
const fetchFailed = (message: string) => ({
  type: types.FETCH_FAILED,
  payload: {
    message,
  },
});

/**
 * 通信成功/失敗メッセージが閉じられたときのアクション
 */
const feedbackMessageClosed = () => ({
  type: types.FEEDBACK_MESSAGE_CLOSED,
});

export const actions = { fetchProgress, fetchSucceed, fetchFailed, feedbackMessageClosed };
export type TypeOfActions = ReturnType<
  typeof fetchProgress | typeof fetchSucceed | typeof fetchFailed | typeof feedbackMessageClosed
>;
