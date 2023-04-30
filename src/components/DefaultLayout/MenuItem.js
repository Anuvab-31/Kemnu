import clsx from 'clsx';
import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { Box, Collapse, ListItem, ListItemIcon, ListItemText, Tooltip, Zoom } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import DynamicMenuIcon from './DynamicMenuIcon';

const useStyle = makeStyles((theme) => ({
    item: {
        height: '45px',
        marginLeft: theme.spacing(1),
        borderRadius: '50px 0px 0px 50px',
        color: theme.palette.common.drawer,
        '&:hover,&:focus': {
            backgroundColor: theme.palette.background.drawer,
        },
    },
    itemActiveItem: {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.background.drawer,
    },
    itemIcon: {
        minWidth: 'auto',
        marginLeft: theme.spacing(1),
        '& img': {
            height: 20,
            width: 'auto',
        },
    },
    itemPrimary: {
        fontSize: 'inherit',
        marginLeft: theme.spacing(1),
        [theme.breakpoints.down('xs')]: {
            paddingRight: theme.spacing(9),
        },
    },
    activeItem: {
        marginLeft: '-3px',
        width: '6px',
        background: theme.palette.primary.main,
    },
    unMarked: {
        width: '0px',
        background: theme.palette.primary.main,
        transitionProperty: 'width',
        transitionDuration: '.4s',
        '&:hover': {
            width: '6px',
        },
    },
}));

const MenuItem = ({ menu, handleClose }) => {
    const classes = useStyle();

    const Router = useRouter();

    const [openCollapse, setOpenCollapse] = React.useState(false);

    const handleClick = () => {
        setOpenCollapse(!openCollapse);
    };

    if (menu.isGroup) {
        return (
            <Box>
                <Tooltip TransitionComponent={Zoom} arrow placement="right" title={!open ? menu.name : ''}>
                    <ListItem
                        button
                        className={clsx(classes.item, Router.pathname === menu.href && classes.itemActiveItem)}
                        onClick={handleClick}
                    >
                        <ListItemIcon className={classes.itemIcon}>
                            <DynamicMenuIcon menu={menu} />
                        </ListItemIcon>
                        {open || window.innerWidth <= 500 ? (
                            <ListItemText
                                classes={{
                                    primary: classes.itemPrimary,
                                }}
                            >
                                {menu.name}
                            </ListItemText>
                        ) : (
                            ''
                        )}
                        {openCollapse ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ListItem>
                </Tooltip>
                <Collapse in={openCollapse} timeout="auto" unmountOnExit>
                    {menu.options.map((option) => (
                        <MenuItem handleClose={handleClose} key={option._id} menu={option} open={open} />
                    ))}
                </Collapse>
            </Box>
        );
    } else {
        return (
            <Box display="flex" key={menu._id}>
                <Tooltip TransitionComponent={Zoom} arrow placement="right" title={!open ? menu.name : ''}>
                    <ListItem
                        as={menu.href}
                        button
                        className={clsx(classes.item, Router.pathname === menu.href && classes.itemActiveItem)}
                        component={Link}
                        href={menu.href}
                        onClick={handleClose}
                    >
                        <ListItemIcon className={classes.itemIcon}>
                            <DynamicMenuIcon menu={menu} />
                        </ListItemIcon>
                        {open || window.innerWidth <= 500 ? (
                            <ListItemText
                                classes={{
                                    primary: classes.itemPrimary,
                                }}
                            >
                                {menu.name}
                            </ListItemText>
                        ) : (
                            ''
                        )}
                    </ListItem>
                </Tooltip>
                {Router.pathname === menu.href ? (
                    <div className={classes.activeItem} />
                ) : (
                    <div className={classes.unMarked} />
                )}
            </Box>
        );
    }
};

MenuItem.propTypes = {
    menu: PropTypes.object.isRequired,
    handleClose: PropTypes.func,
};
MenuItem.defaultProps = {
    handleClose: () => {},
};

export default MenuItem;
