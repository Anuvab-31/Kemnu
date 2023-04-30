import React, {useEffect, useMemo, useState} from 'react';
import TopBar from './TopBar';
import {makeStyles} from "@mui/styles";
import dashboard_icon from "../../../../public/icons/dashboard_icon.png";
import dashboardSelected_icon from "../../../../public/icons/dashboardSelected_icon.png";
import chat_icon from "../../../../public/icons/chat_icon.png";
import chatSelected_icon from "../../../../public/icons/chatSelected_icon.png";
import calendar_icon from "../../../../public/icons/calendar_icon.png";
import calendarSelected_icon from "../../../../public/icons/calendarSelected_icon.png";
import users_icon from "../../../../public/icons/users_icon.png";
import usersSelected_icon from "../../../../public/icons/usersSelected_icon.png";
import settings_icon from "../../../../public/icons/settings_icon.png";
import settingsSelected_icon from "../../../../public/icons/settingsSelected_icon.png";
import {useRouter} from "next/router";
import {Box, Button, Drawer, Hidden, List, ListItem, Paper} from "@mui/material";
import Image from "next/image";
import kemnu_logo from "../../../../public/icons/kemnu_logo.png";
import sign_out_icon from "../../../../public/icons/signout_icon.png";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import BottomNavigation from "@mui/material/BottomNavigation";
import Confirm from "../../Confirm";
import {useUser} from "../../../store/UserContext";
import notification_icon from '../../../../public/icons/notification_icon.png';
import notificationSelected_icon from '../../../../public/icons/notificationSelected_icon.png';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
    mobileDrawer: {
        width: '72px'
    },
    desktopDrawer: {
        width: '72px', //256
        // top: 64,
        height: '100%' // 'calc(100%-64)'
    },
    avatar: {
        cursor: 'pointer',
        width: 64,
        height: 64
    },
    navIcon: {
        display: 'flex',
        justifyContent: 'center',
        cursor: 'pointer',
        width: 'auto',
        marginTop: 10,
        marginBottom: 10
    },
    navIconMobile: {
        display: 'flex',
        justifyContent: 'center',
        cursor: 'pointer',
        width: 'auto',
        marginBottom: 5
    },
    button: {
        color: 'rgb(63 32 101)',
        marginBottom:18
    },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingLeft: 64,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0
    }
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto',
  },
}));

const DashboardLayout = ({children}) => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
    const [user, setUser] = useUser();

    const navigations = useMemo(()=>[{
        icon: dashboard_icon,
        selectedIcon: dashboardSelected_icon,
        path: '/'
    },{
        icon: chat_icon,
        selectedIcon: chatSelected_icon,
        path: '/groups'
    },{
        icon: notification_icon,
        selectedIcon: notificationSelected_icon,
        path: '/calendar'
    },{
        icon: users_icon,
        selectedIcon: usersSelected_icon,
        path: '/users'
    },{
        icon: settings_icon,
        selectedIcon: settingsSelected_icon,
        path: '/settings'
    },],[]);

    const Router = useRouter();

    const [page, setPage] = useState(Router.pathname);

    useEffect(() => {
        setPage(Router.pathname);
    }, [Router.pathname]);

    const handleLogout = () => {
        Confirm('Are you sure ?', 'Do you really want to Log Out?', 'Yes', '').then(async () => {
            await Router.push('/login');
        }).catch(e=>{
            console.log(e)
        });
    };

    const sideBarContents = (
        <Box height="100%" display="flex" flexDirection="column">
            <Box alignItems="center" display="flex" flexDirection="column" p={2}>
                <Image src={kemnu_logo} alt="kemnu logo" />
            </Box>
            <Box p={2}>
                <List>
                    {
                        navigations.map(
                            ({icon,selectedIcon,path},i)=> <ListItem key={`item_${i}`} disableGutters className={classes.navIcon}>
                                <Button
                                    onClick={async () => {
                                        await Router.push('/');
                                        await setMobileNavOpen(false);
                                    }}
                                >
                                    <Image src={page === path? selectedIcon : icon} height={25} width={25}  />
                                </Button>
                            </ListItem>
                        )
                    }
                </List>
            </Box>

            {/* Absolute positioning of signout icon on side navbar */}

            <Box style={{ position: 'absolute', bottom: 50, left: 4 }}>
                <List>
                    <ListItem disableGutters className={classes.navIcon}>
                        <Button className={classes.button} onClick={handleLogout}>
                            <Image src={sign_out_icon} height={25} width={25}  />
                        </Button>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );

  return (
    <div className={classes.root}>
        <Hidden mdUp>
            <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} handleLogout={handleLogout}/>
        </Hidden>
        <Hidden mdDown>
            <Drawer
                anchor="left"
                classes={{ paper: classes.desktopDrawer }}
                open
                variant="persistent"
            >
                  {sideBarContents}
            </Drawer>
        </Hidden>

        <Drawer
            anchor="left"
            classes={{ paper: classes.desktopDrawer }}
            open={isMobileNavOpen}
            onClose={()=> {
                setMobileNavOpen(false);
            }}
        >
              {sideBarContents}
        </Drawer>

        <div className={classes.wrapper}>
            <div className={classes.contentContainer}>
                <div className={classes.content}>
                    {children}
                </div>
            </div>
        </div>
    </div>
  );
};

export default DashboardLayout;
