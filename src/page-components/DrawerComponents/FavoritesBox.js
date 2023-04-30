import React from 'react';
import { Avatar, Box, Typography } from "@mui/material";

const FavoritesBox = () => {
    return (
        <>
            <Box borderRadius={1} border={'1px solid #DCDCDC'} p={1.5} display={'flex'}>
                <Avatar>{'B'}</Avatar>
                <Box display={'flex'} flexDirection={'column'} ml={2}>
                    <Typography variant={'body1'}>
                        {'Desirae Mango'}
                    </Typography>
                    <Typography variant={'caption'}>
                        {'Community name'}
                    </Typography>
                </Box>
                <Box flexGrow={1} />
                <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <img src={'/Heart.png'} alt={'Image'} style={{ height: 25 }} />
                </Box>
            </Box>
        </>
    );
};

export default FavoritesBox;
