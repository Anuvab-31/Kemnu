import React, { useState } from 'react';
import { Avatar, Box, Divider, FormControl, InputBase, MenuItem, Select, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { withStyles } from "@mui/styles";
import FavoritesBox from './FavoritesBox';

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 5,
        position: 'relative',
        backgroundColor: '#F7E2FF',
        fontSize: 12,
        color: '#5A3F86',
        padding: '2px 10px 2px 10px',
        transition: theme.transitions.create(['box-shadow']),
    },
}))(InputBase);

const ProfileWithFavorites = ({ each }) => {
    const [value, setValue] = useState(1);
    const Data = [
        {
            name: 'People',
            type: 1
        }, {
            name: 'Groups',
            type: 2
        },
    ];
    return (
        <>
            <Box display={'flex'} flexDirection={'column'} p={2} mt={2} alignItems={'center'} justifyContent={'center'}>
                <Avatar style={{ height: 75, width: 75 }} src={each?.userDp}>
                    {each?.postedBy?.charAt(0)}
                </Avatar>
                <Box mt={1} />
                <Typography>{each?.postedBy}</Typography>
                <Box mt={1} />
                <Typography variant={'caption'}>{'Lorem ipsum dolor sit amet,'}</Typography>
                <Typography variant={'caption'}>{' consectetur adipiscing elit. Interdum'}</Typography>
                <Typography variant={'caption'}>{' est mattis...'}</Typography>
                <Box display={'flex'} alignItems={'center'} mt={1.5} p={'5px 23px 5px 23px'} justifyContent={'center'} bgcolor={'#EAF9DE'} borderRadius={5}>
                    <LocationOnIcon style={{ color: 'green', height: 20 }} />
                    <Typography variant={'caption'} style={{ color: 'green' }}>
                        {'Bhubaneswar, India'}
                    </Typography>
                </Box>
            </Box>
            <Divider />
            <Box p={2} display={'flex'} flexDirection={'column'}>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Typography variant={'caption'}>
                        {'Favourites'}
                    </Typography>
                </Box>
                <Box mt={2} />
                <FavoritesBox /><Box mt={2} />
                <FavoritesBox /><Box mt={2} />
                <FavoritesBox /><Box mt={2} />
                <FavoritesBox />
            </Box>
        </>
    );
};

export default ProfileWithFavorites;
