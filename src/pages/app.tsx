import { Router } from '@reach/router';
import React, { FC, useContext, useEffect } from 'react';
import { AuthContext } from '../modules/auth';
import { checkSession } from '../modules/auth/operations';
import { ReservationPage } from '../routes/reservation';
import { Route } from '../routes/route';
import { SamplePage } from '../routes/sample';
import NotFoundPage from './404';

const IndexPage: FC = () => {
  const store = useContext(AuthContext);

  useEffect(() => {
    checkSession(store.dispatch);
  }, []);

  if (store.state.user)
    return (
      <Router basepath="/app">
        <Route path="/" component={SamplePage} />
        <Route path="/reservation" component={ReservationPage} />
        <Route path="/*" component={NotFoundPage} />
      </Router>
    );

  return null;
};

export default IndexPage;
