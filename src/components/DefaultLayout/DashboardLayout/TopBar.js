import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import kemnu_logo_white from '../../../../public/kemnu_full_logo.svg';
import {makeStyles} from "@mui/styles";
import {AppBar, Box, Button, Hidden, IconButton, Toolbar} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import sign_out_icon from "../../../../public/icons/signout_icon.png";
import Link from "../../../Link";

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    width: 60,
    height: 60
  }
}));

const TopBar = ({ className, onMobileNavOpen,handleLogout, ...rest }) => {
  const classes = useStyles();
  const [notifications] = useState([]);

  return (
    <>
      <Hidden lgUp>
        <AppBar
          className={clsx(classes.root, className)}
          elevation={0}
          {...rest}
          style={{ background: '#fff' }}
        >
          <Toolbar>
              <IconButton
                  onClick={onMobileNavOpen}
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
              >
                  <MenuIcon sx={{color:'#000'}}/>
              </IconButton>
            <Link href={"/"}>
              <Image
                src={kemnu_logo_white}
                alt="kemnu logo"
                height={60}
                width={'100%'}
              />
            </Link>
            {/*<Box flexGrow={1} />*/}
            {/*<IconButton color="inherit" onClick={handleLogout}>*/}
            {/*        <Image src={sign_out_icon} height={25} width={25}  />*/}
            {/*</IconButton>*/}
          </Toolbar>
        </AppBar>
      </Hidden>
    </>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TopBar;
