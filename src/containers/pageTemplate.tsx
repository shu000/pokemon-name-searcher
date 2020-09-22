import { AppBar, Box, Drawer, IconButton, makeStyles, ThemeProvider, Toolbar } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import { graphql, useStaticQuery } from 'gatsby';
import React, { FC, useState } from 'react';
import { LinkList } from '../components/linkList';
import { PageTitle } from '../components/pageTitle';
import SEO from '../components/seo';
import { generalTheme } from '../components/theme/generalTheme';
import { Message } from './message';
import { UserIcon } from './userIcon';
import '../styles/reset.css';

const useStyles = makeStyles((theme) => ({
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  main: {
    paddingTop: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
  },
}));

interface Props {
  title: string;
  href?: string;
  showLogin?: boolean;
  showLinks?: boolean;
}

/**
 * ページテンプレート
 * メタタグとヘッダーを付けてくれるコンポーネントです
 */
export const PageTemplate: FC<Props> = ({ children, title, href = '/app', showLogin = true, showLinks = true }) => {
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

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const openMenu = () => {
    setIsOpenMenu(true);
  };

  const closeMenu = () => {
    setIsOpenMenu(false);
  };

  return (
    <ThemeProvider theme={generalTheme}>
      <SEO title={title} />
      <AppBar position="static">
        <Toolbar>
          <PageTitle href={href} siteTitle={site.siteMetadata.title} pageTitle={title} />
          <Box flexGrow={1} />
          {showLogin && <UserIcon />}
          {showLinks && (
            <IconButton color="inherit" onClick={openMenu}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Drawer variant="temporary" anchor="right" open={isOpenMenu} onClose={closeMenu}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={closeMenu}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <LinkList />
      </Drawer>
      {children && (
        <Box className={classes.main} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          {children}
        </Box>
      )}
      <Message />
    </ThemeProvider>
  );
};
