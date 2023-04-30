import React from 'react';
import { confirmable } from 'react-confirm';
import PropTypes from 'prop-types';
import theme from '../../theme';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography} from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';

const ConfirmDialog = ({
    okLabel,
    cancelLabel = 'Cancel',
    title,
    confirmation,
    show,
    proceed,
    dismiss,
    cancel,
    content,
}) => {
    return (
        <ThemeProvider theme={theme}>
            <Dialog fullWidth maxWidth="xs" onClose={dismiss} open={show}>
                <DialogTitle onClose={dismiss}>{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{confirmation}</DialogContentText>
                    <Typography>{content && <DialogContentText>{content}</DialogContentText>}</Typography>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={cancel}>
                        {cancelLabel}
                    </Button>
                    <Button color="primary" onClick={proceed} variant={'contained'}>
                        {okLabel}
                    </Button>
                </DialogActions>
            </Dialog>
        </ThemeProvider>
    );
};

ConfirmDialog.propTypes = {
    okLabel: PropTypes.any.isRequired,
    cancelLabel: PropTypes.any,
    title: PropTypes.any.isRequired,
    confirmation: PropTypes.any.isRequired,
    show: PropTypes.bool.isRequired,
    proceed: PropTypes.func.isRequired,
    dismiss: PropTypes.func.isRequired,
    cancel: PropTypes.func.isRequired,
    content: PropTypes.any,
};

export default confirmable(ConfirmDialog);
