import CssBaseline from "@mui/material/CssBaseline";
import type { AppProps } from "next/app";
import Head from "next/head";
import {
    AppBar,
    Button,
    Container,
    IconButton,
    Toolbar,
    Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";

import { firebaseApp } from "firebase.config";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";

function MyApp({ Component, pageProps }: AppProps) {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(firebaseApp);

    const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser !== null);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    });

    const googlePopUpSignIn = () => {
        signInWithPopup(auth, provider);
    };

    const logOut = () => {
        console.log(auth.currentUser);
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                console.log("Logged Out");
            })
            .catch((error) => {
                // An error happened.
                console.log("ERROR while logging out");
            });
    };

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
            </Head>
            <CssBaseline />

            <AppBar position="sticky">
                <Container maxWidth="lg" disableGutters={true}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            Crowdfunding App
                        </Typography>
                        <Button
                            color="inherit"
                            onClick={!isLoggedIn ? googlePopUpSignIn : logOut}
                        >
                            {!isLoggedIn ? "Login" : "Logout"}
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>

            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
