import React from 'react';
import RightDrawer from './RightDrawer';
import {styled} from "@mui/material/styles";

const RightDrawerContext = React.createContext({});


export const drawerWidth = 380;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        [theme.breakpoints.down('md')]: {
            padding: 0
        },
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: 0,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginRight: `${drawerWidth}px`,
        }),
    }),
);

export const RightDrawerProvider = ({ children }) => {
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [dialogConfig, setDialogConfig] = React.useState({

    });

    const openDialog = ({ callBack, Component }) => {
        console.log(typeof Component);
        setDialogOpen(true);
        setDialogConfig({callBack, Component });
    };

    const resetDialog = () => {
        setDialogOpen(false);
        setDialogConfig({});
    };

    const onCropped = (src) => {
        resetDialog();
        dialogConfig.callBack({
            status: 'CROPPED',
            src,
        });
    };

    const onSelected = (src) => {
        setDialogConfig({
            ...dialogConfig,
            src,
        });
    };

    const onDismiss = () => {
        resetDialog();
        if (dialogConfig.src) {
            dialogConfig.callBack({
                status: 'SELECTED',
                src: dialogConfig.src,
            });
        } else {
            dialogConfig.callBack({
                status: 'CANCELED',
            });
        }
    };

    return (
        <RightDrawerContext.Provider value={{ openDialog ,dialogOpen}}>
            <RightDrawer
                dialogOpen={dialogOpen}
                setDialogOpen={setDialogOpen}
                Component={dialogConfig.Component}
            />
            <Main open={dialogOpen}>
                {children}
            </Main>
        </RightDrawerContext.Provider>
    );
};

export const useRightDrawer = () => {
    const { openDialog,dialogOpen} = React.useContext(RightDrawerContext);

    const openRightDrawer = (Component) =>
        new Promise((res) => {
            openDialog({ callBack: res, Component });
        });
    return {
        openRightDrawer,
        dialogOpen
    };
};

export const withRightDrawer = (Component) => (props) => {
    return (
        <RightDrawerProvider>
            <Component {...props} />
        </RightDrawerProvider>
    );
};
