import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import kemnuLogo from '../../../../public/icons/kemnu_logo.png'
import {makeStyles} from "@mui/styles";
import {AppBar, Toolbar} from "@mui/material";
import Link from 'next/link';
import Image from 'next/image'

const useStyles = makeStyles(({
  root: {},
  toolbar: {
    height: 64,
    backgroundColor: "white"
  }
}));

const TopBar = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar className={classes.toolbar}>
        <Link href={"/"}>
          <Image src={kemnuLogo} height={45} width={40}  alt={"Alt"}/>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string
};

export default TopBar;
