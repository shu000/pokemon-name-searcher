import { List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import EventNoteIcon from '@material-ui/icons/EventNote';
import HomeIcon from '@material-ui/icons/Home';
import { navigate } from 'gatsby';
import React, { FC } from 'react';

const useStyles = makeStyles((theme) => ({
  listItem: {
    paddingRight: theme.spacing(4),
  },
}));

/** リンク一覧コンポーネント */
export const LinkList: FC = () => {
  const classes = useStyles();

  const links = [
    {
      title: 'トップ',
      onClick: () => {
        navigate('/app');
      },
      Icon: HomeIcon,
    },
    {
      title: '予約',
      onClick: () => {
        navigate('/app/reservation');
      },
      Icon: EventNoteIcon,
    },
  ];

  return (
    <List>
      {links.map((link) => (
        <ListItem key={`link-${link.title}`} className={classes.listItem} button onClick={link.onClick}>
          <ListItemIcon>
            <link.Icon />
          </ListItemIcon>
          <ListItemText primary={link.title} />
        </ListItem>
      ))}
    </List>
  );
};
