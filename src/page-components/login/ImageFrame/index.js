import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from "@mui/styles";
import {Box, Grid, Hidden} from "@mui/material";
import Image from 'next/image'
// import FirstImage from '../../../assets/Top Vector.svg';
// import SecondImage from '../../../assets/Group 4.svg';
// import ThirdImage from '../../../assets/Mask Group.svg';

const useStyles = makeStyles((theme) => ({
    root: {
       height:'auto',
        display: 'flex',
    },
    bgColor: {
        backgroundColor:'#F7E2FE',
        height:'100vh',
    },
    subTitle: {
        fontSize: '19px',
    },
}));

const ImageFrame = ({ children }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Hidden smDown>
                    <Grid item md={6} sm={6} xs={12} lg={6} style={{position:'relative'}}>
                        <Box mb={0} className={classes.bgColor} display={"flex"} flexDirection={'column'} width={'100%'}>
                            <img src={'/Top Vector.svg'} alt={'Image'} style={{height:210,width:'100%'}} />
                            <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                <img src={'/logo.svg'} alt={'Image'} style={{height:140,width:140}}/>
                            </Box>
                            <Box style={{position:'absolute',bottom:0}} display={'flex'} alignItems={'center'} justifyContent={'center'} width={'100%'}>
                                <img src={'/Mask Group 1.png'} alt={'Image'} style={{position:'relative',height:290,width:'100%'}}/>
                                <img src={'/loginGrpImg.svg'} alt={'Image'} style={{width:'100vw',height:290,position:'absolute'}}/>
                            </Box>
                        </Box>
                    </Grid>
                </Hidden>
                <Grid item md={6} sm={6} xs={12} lg={6}>
                    <div>{children}</div>
                </Grid>
            </Grid>
        </div>
    );
};

ImageFrame.propTypes = {
    children: PropTypes.element.isRequired,
};

export default ImageFrame;
