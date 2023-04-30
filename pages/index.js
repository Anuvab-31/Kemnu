import React from 'react';
import { useState } from "react";
import {
    Box,
    Chip,
    Divider,
    Grid, Hidden,
    Stack,
    Typography
} from "@mui/material";
import { useRightDrawer, withRightDrawer } from "../src/components/right_drawer/RightDrawerProvider";
import CardComponent from "../src/page-components/Posts/CardComponent";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    scrollBehaviour: {
        overflowX: 'scroll'
    }
}));

const Index = () => {
    const classes = useStyles();
    const { dialogOpen } = useRightDrawer();

    const chip = [
        {
            label: 'All'
        }, {
            label: 'Gossip'
        }, {
            label: 'Tech'
        }, {
            label: 'Events'
        }, {
            label: 'Games'
        }, {
            label: 'Coding'
        }, {
            label: 'Movie'
        },
    ]

    const [changeChip, setChangeChip] = useState('All');

    const posts = [{ caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum est mattis integer neque vel ipsum.', postedBy: 'Bijay Ranjan Pati', postedAt: '2 Hours Ago', category: 'Gossip', vote: 300, voteType: 'upvote', comments: 400, share: 240, userDp: '/images/Ellipse 99.svg', image: '/images/post-image.png', }, { caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum est mattis integer neque vel ipsum.', postedBy: 'Guru Prasad', postedAt: '5 Hours Ago', category: 'Movie', vote: 454, voteType: 'upvote', comments: 232, share: 444, userDp: '/images/Ellipse 100.svg', image: '/images/post-image.png', }, {
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum est mattis integer neque vel ipsum.', postedBy: 'Abhijeet Mohapatra', postedAt: '5 Hours Ago', category: 'Tech', vote: 566, voteType: 'upvote', comments: 400, share: 240,
        userDp: '/images/Ellipse 101.svg', image: '/images/post-image.png',
    }, { caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum est mattis integer neque vel ipsum.', postedBy: 'Ramakanta Kar', postedAt: '6 Hours Ago', category: 'Tech', vote: 756, voteType: 'upvote', comments: 400, share: 240, userDp: '/images/Ellipse 102.svg', image: '/images/post-image.png', }, { caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum est mattis integer neque vel ipsum.', postedBy: 'Biswa Ranjan', postedAt: '8 Hours Ago', category: 'Health', vote: 877, voteType: 'upvote', comments: 400, share: 240, userDp: '/images/Ellipse 103.svg', image: '/images/post-image.png', }, { caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum est mattis integer neque vel ipsum.', postedBy: 'Sunil Kumar Muduli', postedAt: '10 Hours Ago', category: 'Politics', vote: 456, voteType: 'upvote', comments: 400, share: 240, userDp: '/images/Ellipse 99.svg', image: '/images/post-image.png', }, {
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum est mattis integer neque vel ipsum.', postedBy: 'Soumya Ranjan', postedAt: '11 Hours Ago', category: 'Gossip', vote: 300, voteType: 'upvote', comments: 400, share: 240, userDp: '/images/Ellipse 100.svg', image: '/images/post-image.png',
    }, { caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum est mattis integer neque vel ipsum.', postedBy: 'Sai Swarup', postedAt: '12 Hours Ago', category: 'Gossip', vote: 300, voteType: 'upvote', comments: 400, share: 240, userDp: '/images/user-image.png', image: '/images/post-image.png', }, { caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum est mattis integer neque vel ipsum.', postedBy: 'Bijay Ranjan', postedAt: '12 Hours Ago', category: 'Movie', vote: 300, voteType: 'upvote', comments: 400, share: 240, userDp: '/images/user-image.png', image: '/images/post-image.png', }]


    return (
        <>
            {/*<Container maxWidth={false}>*/}
            <Hidden mdDown>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Box display={'flex'} flexDirection={'column'}>
                        <Typography
                            variant="h2"
                            style={{
                                fontFamily: 'Raleway, sans-serif',
                                fontWeight: '700'
                            }}
                        >
                            Kemnu
                        </Typography>
                        <p
                            style={{
                                fontFamily: 'Lato, sans-serif',
                                color: 'rgb(127, 143, 164)',
                                fontSize: 13,
                                marginTop: 5
                            }}
                        >
                            Welcome back!
                        </p>
                    </Box>
                </Box>
            </Hidden>

            <Box borderRadius={1} display={'flex'} flexDirection={'column'} bgcolor={'#fff'} mt={{ md: 0, sm: 7, xs: 7 }} width={'100%'}>
                <Box display={'flex'} p={2} className={classes.scrollBehaviour}>
                    <Stack direction="row" spacing={2}>
                        {
                            chip?.map((e) => (
                                <Chip
                                    label={e?.label}
                                    sx={changeChip === e?.label ? {
                                        backgroundColor: '#5A3F86', color: '#fff', '&:hover': {
                                            backgroundColor: '#5A3F86', color: '#fff',
                                        },
                                    } : {
                                        backgroundColor: '#F7E2FF', color: '#5A3F86', '&:hover': {
                                            backgroundColor: '#F7E2FF', color: '#5A3F86'
                                        },
                                    }}
                                    onClick={() => {
                                        setChangeChip(e?.label);
                                    }}
                                />
                            ))
                        }
                    </Stack>
                </Box>
                <Divider />
                <Grid container spacing={2} sx={{ padding: { md: 2, sm: 2, xs: 0.5 } }}>
                    {
                        changeChip === 'All' ? posts?.map((e) => (
                            <Grid item md={dialogOpen === true ? 12 : 6} sm={6} xs={12}>
                                <CardComponent
                                    each={e}
                                />
                            </Grid>
                        )) :
                            posts?.filter((each) => each?.category === changeChip).length > 0 ? posts?.filter((each) => each?.category === changeChip).map((e) => (
                                <Grid item md={dialogOpen === true ? 12 : 6} sm={6} xs={12}>
                                    <CardComponent
                                        each={e}
                                    />
                                </Grid>
                            )) : <Box width={'100vw'} height={'50vh'} display={'flex'} alignItems={'center'} justifyContent={'center'}>{'No Posts found'}</Box>
                    }
                </Grid>
            </Box>
        </>
    );
}
export default withRightDrawer(Index);
