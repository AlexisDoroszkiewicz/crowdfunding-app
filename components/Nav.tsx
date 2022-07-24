import {
    AppBar,
    Button,
    Container,
    IconButton,
    Toolbar,
    Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { useState } from "react";

import { firebaseApp } from "firebase.config";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";

type Props = {};

export default function Nav({}: Props) {
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
    );
}
