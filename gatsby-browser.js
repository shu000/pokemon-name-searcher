/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
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
