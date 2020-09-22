import React, { FC } from 'react';

interface Props {
  path: string;
  component: FC;
}

/**
 * '@reach/router'利用に必要な、pathをプロパティに持つコンポーネント。
 * ページコンポーネントをラップするために作った。
 */
export const Route: FC<Props> = ({ component }) => React.createElement(component);
