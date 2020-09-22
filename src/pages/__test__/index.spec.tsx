import { useStaticQuery } from 'gatsby';
import React from 'react';
import renderer from 'react-test-renderer';
import Index from '../app';

jest.mock('gatsby');
jest.mock('gatsby-image');

beforeEach(() => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  useStaticQuery.mockImplementation(() => ({
    site: {
      siteMetadata: {
        title: `Site Title`,
      },
    },
    placeholderImage: {
      childImageSharp: {
        fluid: undefined,
      },
    },
  }));
});

describe('Index', () => {
  it('snapshot', () => {
    const tree = renderer.create(<Index />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
