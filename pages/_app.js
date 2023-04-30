import React from "react";
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import Layout from '../src/components/DefaultLayout';
import {useEffect} from 'react';
import {SnackbarProvider} from "notistack";
import {useRouter} from "next/router";

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    const Router = useRouter();

    return (
        <SnackbarProvider>
            <CacheProvider value={emotionCache}>
                <Head>
                    <title>Task</title>
                    <meta content="initial-scale=1, width=device-width" name="viewport" />
                </Head>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Layout>
                        <Component{...pageProps}/>
                    </Layout>
                </ThemeProvider>
            </CacheProvider>
        </SnackbarProvider>

    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    emotionCache: PropTypes.object,
    pageProps: PropTypes.object.isRequired,
};
