import { AppBar, makeStyles, ThemeProvider, Toolbar } from '@material-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import React, { FC } from 'react';
import { PageTitle } from '../components/pageTitle';
import SEO from '../components/seo';
import { generalTheme } from '../components/theme/generalTheme';
import '../styles/reset.css';

const useStyles = makeStyles((theme) => ({
  main: {
    paddingTop: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
  },
}));

interface Props {
  title: string;
  href?: string;
}

/**
 * ページテンプレート
 * メタタグとヘッダーを付けてくれるコンポーネントです
 */
export const PageTemplate: FC<Props> = ({ children, title, href = '/' }) => {
  const classes = useStyles();

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <ThemeProvider theme={generalTheme}>
      <SEO title={title} />
      <AppBar position="static">
        <Toolbar>
          <PageTitle href={href} siteTitle={site.siteMetadata.title} />
        </Toolbar>
      </AppBar>
      <div className={classes.main}>{children}</div>
    </ThemeProvider>
  );
};
