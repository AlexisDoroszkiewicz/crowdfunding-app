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
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential =
                    GoogleAuthProvider.credentialFromResult(result);
                if (credential) {
                    const token = credential.accessToken;
                }
                // The signed-in user info.
                const user = result.user;
                // there we'll use the user info to do whatever
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential =
                    GoogleAuthProvider.credentialFromError(error);
                // ...
            });
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
                        {!isLoggedIn ? (
                            <Button color="inherit" onClick={googlePopUpSignIn}>
                                Login
                            </Button>
                        ) : (
                            <Button color="inherit" onClick={logOut}>
                                Logout
                            </Button>
                        )}
                    </Toolbar>
                </Container>
            </AppBar>

            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
