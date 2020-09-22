import { IconButton, Snackbar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Alert from '@material-ui/lab/Alert';
import React, { FC, useContext } from 'react';
import { UIContext, uiType } from '../modules/ui/index';

export const Message: FC = () => {
  const store = useContext(UIContext);

  const closeMessage = () => {
    store.dispatch({
      type: uiType.FEEDBACK_MESSAGE_CLOSED,
    });
  };

  const closeButton = (
    <IconButton size="small" color="inherit" onClick={closeMessage}>
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <Snackbar open={store.state.message.isShow} autoHideDuration={2000} action={closeButton} onClose={closeMessage}>
      <Alert variant="filled" severity={store.state.message.severity} onClose={closeMessage}>
        {store.state.message.text}
      </Alert>
    </Snackbar>
  );
};
