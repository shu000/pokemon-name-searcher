/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
/* eslint-disable */
import React from 'react';
import { AuthContextProvider } from './src/modules/auth/index';
import { UIContextProvider } from './src/modules/ui/index';
export const wrapRootElement = ({ element }) => (
  <AuthContextProvider>
    <UIContextProvider>
      { element }
    </UIContextProvider>
  </AuthContextProvider>
);


