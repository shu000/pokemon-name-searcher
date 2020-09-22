import { makeStyles } from '@material-ui/core';
import { Link } from 'gatsby';
import React, { FC } from 'react';
import { ClassName } from './props/classname';

const useStyles = makeStyles(() => ({
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
}));

type Props = ClassName & {
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  replace?: boolean;
  to: string;
};

/** 共通スタイルを付与したgatsby.Linkコンポーネント */
export const StyledLink: FC<Props> = ({ children, className, onClick, replace = false, to }) => {
  const classes = useStyles();
  return (
    <Link
      className={className ? `${classes.link} ${className}` : classes.link}
      onClick={onClick}
      replace={replace}
      to={to}
    >
      {children}
    </Link>
  );
};
