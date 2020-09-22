import React, { FC } from 'react';
import { LoginForm } from '../containers/loginForm';
import { PageTemplate } from '../containers/pageTemplate';

const IndexPage: FC = () => (
  <PageTemplate title="ログイン" href="/" showLogin={false} showLinks={false}>
    <LoginForm />
  </PageTemplate>
);

export default IndexPage;
