import { Divider, IconButton, Menu, MenuItem, Typography } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import React, { FC, useState } from 'react';
import { logout } from '../modules/auth/operations';

export const UserIcon: FC = () => {
  const [anchorEl, setAnchorEl] = useState<(EventTarget & Element) | null>(null);

  const openMenu = (e: React.MouseEvent) => {
    setAnchorEl(e.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const logoutUser = async () => {
    await logout();
  };

  return (
    <>
      <IconButton color="inherit" onClick={openMenu}>
        <AccountCircleIcon />
      </IconButton>
      <Menu open={!!anchorEl} anchorEl={anchorEl} onClose={closeMenu}>
        <MenuItem>
          <Typography variant="body1">ユーザ設定</Typography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={logoutUser}>
          <Typography variant="caption">ログアウト</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};
