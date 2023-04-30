import { Box, Button, Hidden, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const LoginFormComponent = ({ email, emailError, passwordError, password, setPassword, setEmail, login }) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    return <Box display={'flex'} flexDirection={'column'} mt={{ md: 0, sm: 0, xs: 0 }}>
        <Hidden smUp>
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} bgcolor={'#fff'} width={'100%'}>
                <img src={'/logo.svg'} alt={'Image'} style={{ height: 140, width: 140, marginTop: 40 }} />
            </Box>
        </Hidden>
        <Box display={'flex'} flexDirection={'column'} >
            <Typography variant={'h2'} style={{ color: '#584084', fontWeight: 700 }}>{'Login'}</Typography>
            <Box mt={1} />
            <Typography variant={'subtitle2'}>{'Sign in to continue'}</Typography>
            <Box mt={1} />
        </Box>
        <Box display={'flex'} flexDirection={'column'} mt={2}>
            <Typography variant={'caption'} sx={{ color: '#939393' }}>
                {'Your Email'}
            </Typography>
            <TextField
                autoFocus
                fullWidth
                margin="dense"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                variant="outlined"
                error={!!emailError}
                helperText={emailError}
            />
            <Typography variant={'caption'} sx={{ color: '#939393', mt: 1 }}>
                {'Your Password'}
            </Typography>
            <TextField
                autoFocus
                fullWidth
                margin="dense"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
                variant="outlined"
                error={!!passwordError}
                type={showPassword ? "text" : "password"}
                helperText={passwordError}
                InputProps={{ // <-- This is where the toggle button is added.
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
        </Box>
        <Box mt={1} alignItems="center" display={'flex'}>
            <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
                align="center"
            >
                By creating an account or logging in, you agree to our
                <span style={{ color: 'blue', cursor: 'pointer' }}>
                    {' Terms'}
                </span>
                {' and'}
                <span style={{ color: 'blue', cursor: 'pointer' }}>
                    {' Privacy Policy.'}
                </span>
            </Typography>
        </Box>
        <Box mt={2} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Button
                color={'primary'}
                variant={'contained'}
                onClick={() => {
                    login();
                }}
                style={{ height: '58px' }}
                fullWidth
            >
                Login
            </Button>
        </Box>
    </Box>
};

export default LoginFormComponent;
