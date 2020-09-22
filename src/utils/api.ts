const defaultOptions = {
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include',
} as const;

/**
 * 雑にラップしたfetchAPI
 * Content-Typeはapplication/json前提
 *
 * @returns response.json()
 * @throws fetchがfetchに失敗したException
 * @throws response.json()がパースに失敗したException
 */
export const api = (method: 'POST' | 'GET' | 'PUT' | 'DELETE', url: string, body: any): Promise<any> => {
  return fetch(url, {
    ...defaultOptions,
    method,
    body: JSON.stringify(body),
  }).then((response) => {
    console.log(response);
    return response.json();
  });
};
