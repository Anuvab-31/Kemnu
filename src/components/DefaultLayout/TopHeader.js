import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Button, Hidden, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        height: '55px',
        padding: '5px',
        alignItems: 'center',
    },
    grow: {
        flexGrow: 1,
    },
    profile: {
        background: theme.palette.background.other,
        borderRadius: '6px',
        height: '33px',
        paddingRight: '40px',
        paddingLeft: '15px',
        marginRight: '-25px',
        display: 'flex',
        alignItems: 'center',
        fontWeight: 600,
        fontSize: '13px',
        textTransform: 'capitalize',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    profileButton: {
        '&:hover': {
            backgroundColor: '#F57A32',
            color: '#fff',
        },
        backgroundColor: '#F57A32',
        color: '#fff',
    },
}));

export default function TopHeader({
    refHowToUse,
    refContactUs,
    handleMobDrawer,
    onTop,
    refPricing,
    goToTheElement,
    refDownload, refTechnology
}) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const isMenuOpen = Boolean(anchorEl);

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            id={'user-account'}
            keepMounted
            onClose={handleMenuClose}
            open={isMenuOpen}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
            <MenuItem>{'appbar.logout'}</MenuItem>
        </Menu>
    );

    return (
        <div className={classes.root}>
            <div className={classes.grow} />
            <Hidden smDown>
                <Button
                    onClick={() => {
                        goToTheElement(refHowToUse);
                    }}
                    style={{ color: '#fff', marginRight: 10 }}
                >
                    {'How To'}
                </Button>
                <Button
                    onClick={() => {
                        goToTheElement(refTechnology);
                    }}
                    style={{ color: '#fff', marginRight: 10 }}
                >
                    {'Why FeedSlanger'}
                </Button>
                <Button
                    onClick={() => {
                        goToTheElement(refDownload);
                    }}
                    style={{ color: '#fff', marginRight: 10 }}
                >
                    {'Application'}
                </Button>
                <Button
                    onClick={() => {
                        goToTheElement(refPricing);
                    }}
                    style={{ color: '#fff', marginRight: 10 }}
                >
                    {'Pricing'}
                </Button>
            </Hidden>
            <Hidden smDown>
                <Button
                    className={classes.profileButton}
                    onClick={() => {
                        goToTheElement(refContactUs);
                    }}
                    size={'small'}
                >
                    {'Contact Us'}
                </Button>
            </Hidden>
            <Hidden smUp>
                <Box onClick={handleMobDrawer}>
                    <MenuIcon style={!onTop ? { color: '#fff', boxShadow: 5 } : { color: '#FB7833', boxShadow: 5 }} />
                </Box>
            </Hidden>
            {renderMenu}
        </div>
    );
}
