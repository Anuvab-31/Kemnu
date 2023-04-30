import React from 'react';
import { Avatar, Box, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CommentIcon from "@mui/icons-material/Comment";
import { useRightDrawer } from "../../components/right_drawer/RightDrawerProvider";
import ProfileWithFavorites from "../DrawerComponents/ProfileWithFavorites";

const CardComponent = ({ each }) => {
    const { openRightDrawer } = useRightDrawer();
    return (
        <>
            <Box display={'flex'} flexDirection={'column'} border={'1px solid #EDEDED'} borderRadius={1} width={'100%'}>
                <Box p={2}>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <Box display={'flex'}>
                            <Avatar src={each?.userDp}>{each?.postedBy?.charAt(0)}</Avatar>
                            <Box display={'flex'} flexDirection={'column'} ml={2}>
                                <Box display={'flex'}>
                                    <Typography variant={'body1'} sx={{ wordBreak: 'break-all', cursor: 'pointer' }} onClick={async () => {
                                        await openRightDrawer(() => <ProfileWithFavorites each={each} />);
                                    }}>
                                        {each?.postedBy}
                                    </Typography>
                                    <Box ml={1} />
                                    <Typography variant={'body1'} style={{ color: '#6D2CB0' }}>
                                        {each?.category}
                                    </Typography>
                                </Box>
                                <Typography variant={'caption'}>
                                    {each?.postedAt}
                                </Typography>
                            </Box>
                        </Box>
                        <MoreHorizIcon />
                    </Box>
                    <Box display={'flex'} mt={2}>
                        <Typography variant={'caption'}>
                            {each?.caption}
                        </Typography>
                    </Box>
                    <Box mt={1} />
                    <img src={'/Rectangle 1146.png'} alt={'Image'} style={{ height: 200, width: '100%' }} />
                </Box>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} bgcolor={'#F2F2F2'} p={1.5} width={'100%'}>
                    <Box display={'flex'} alignItems={'center'}>
                        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mr={1}>
                            <img alt={'Image'} src={'/Path 1982.png'} style={{ height: 'auto', width: 20 }} />
                        </Box>
                        <Typography variant={'caption'} style={{ color: 'green' }}>
                            {each?.vote}
                        </Typography>
                        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} ml={1}>
                            <img alt={'Image'} src={'/Path 1983.png'} style={{ height: 'auto', width: 20 }} />
                        </Box>
                        <Box display={'flex'} alignItems={'center'} ml={2}>
                            <img alt={'Image'} src={'/comment.svg'} style={{ height: 'auto', width: 20 }} />
                            <Typography variant={'caption'} sx={{ ml: 1 }}>
                                {each?.comments}
                            </Typography>
                        </Box>
                    </Box>
                    <Box display={'flex'} alignItems={'center'}>
                        <img alt={'Image'} src={'/share.png'} style={{ height: 'auto', width: 20 }} />
                        <Typography variant={'caption'} sx={{ ml: 1 }}>
                            {each?.share}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default CardComponent;
