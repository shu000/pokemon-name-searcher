import React, { FC } from 'react';
import { PageTemplate } from '../containers/pageTemplate';

export const SamplePage: FC = () => (
  <PageTemplate title="トップ">
    <h1>ログイン成功時にはこの画面に飛ぶことになるじゃろうな</h1>
  </PageTemplate>
);
