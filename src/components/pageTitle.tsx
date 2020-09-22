import { makeStyles, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { StyledLink } from './styledLink';

const useStyles = makeStyles((theme) => ({
  divider: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
}));

interface Props {
  href: string;
  siteTitle: string;
  pageTitle?: string;
}

export const PageTitle: FC<Props> = ({ href, siteTitle, pageTitle }) => {
  const classes = useStyles();

  return pageTitle ? (
    <>
      <StyledLink to={href}>
        <Typography variant="h6">{`${siteTitle}`}</Typography>
      </StyledLink>
      <Typography className={classes.divider} variant="body1">
        |
      </Typography>
      <Typography variant="body1">{`${pageTitle}`}</Typography>
    </>
  ) : (
    <>
      <StyledLink to={href}>
        <Typography variant="h6">{`${siteTitle}`}</Typography>
      </StyledLink>
    </>
  );
};
