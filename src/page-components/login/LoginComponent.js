import { useState } from "react";
import LoginFormComponent from "./LoginFormComponent";
import { useSnackbar } from "notistack";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router";

const useStyles = makeStyles(theme => ({
    paper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // flex: '598',
        backgroundColor: '#fff',
        height: '100vh',
        padding: 55,
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // flex: '598',
            backgroundColor: '#fff',
            height: '100vh',
            padding: 20,
            width: '100%',
        }
    },
}));


const LoginComponent = ({ setCurrentPage, setToken }) => {

    const { enqueueSnackbar } = useSnackbar();
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const Router = useRouter();

    const validate = () => {
        if (email.trim() === '') {
            setEmailError('Email mustn\'t be empty');
            return false;
        }
        if (email.trim() !== 'admin@gmail.com') {
            setEmailError('Invalid emailId');
            return false;
        }
        if (password.trim() === '') {
            setPasswordError('Password mustn\'t be empty');
            return false;
        }
        if (password.trim() !== 'Password@1') {
            setPasswordError('Invalid password');
            return false;
        }
        return true;
    };

    const login = async () => {
        if (validate()) {
            await localStorage.setItem('email', JSON.stringify(email));
            await localStorage.setItem('password', JSON.stringify(password));
            await Router.push('/');
            enqueueSnackbar('sucessfully loggedin', { variant: 'success' })
        }
    };

    return <div className={classes.paper}>
        <LoginFormComponent
            email={email}
            emailError={emailError}
            setEmail={setEmail}
            password={password}
            passwordError={passwordError}
            setPassword={setPassword}
            login={login}
        />
    </div>
};

export default LoginComponent;
