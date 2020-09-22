import React, { FC } from 'react';
import { PageTemplate } from '../containers/pageTemplate';

const NotFoundPage: FC = () => (
  <PageTemplate title="NOT FOUND" showLogin={false} showLinks={false}>
    <h1>NOT FOUND</h1>
    <p>指定のURLは存在せんで。間違えてへん？</p>
  </PageTemplate>
);

export default NotFoundPage;
