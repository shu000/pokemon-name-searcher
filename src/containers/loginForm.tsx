import { Button, FormGroup, makeStyles, TextField } from '@material-ui/core';
import React, { FC, useState, useContext } from 'react';
import { AuthContext, authOperations } from '../modules/auth/index';
import { UIContext } from '../modules/ui/index';

const useStyles = makeStyles((theme) => ({
  input: {
    marginBottom: theme.spacing(4),
  },
}));

export const LoginForm: FC = () => {
  const classes = useStyles();

  const uiStore = useContext(UIContext);
  const authStore = useContext(AuthContext);

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onLoginClick = () => {
    authOperations.login(uiStore.dispatch, authStore.dispatch, id, password);
  };

  return (
    <FormGroup>
      <TextField
        type="text"
        className={classes.input}
        required
        placeholder="ID"
        disabled={uiStore.state.loading}
        value={id}
        onChange={onIdChange}
      />
      <TextField
        type="password"
        className={classes.input}
        required
        placeholder="パスワード"
        disabled={uiStore.state.loading}
        value={password}
        onChange={onPasswordChange}
      />
      <Button variant="contained" color="primary" disabled={uiStore.state.loading} onClick={onLoginClick}>
        ログイン
      </Button>
    </FormGroup>
  );
};
