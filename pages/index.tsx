import type { NextPage } from "next";
import { Container } from "@mui/material";
import { firebaseApp } from "firebase.config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

const Home: NextPage = () => {
    const auth = getAuth(firebaseApp);
    const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser !== null);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    });

    return (
        <Container maxWidth="lg">
            <h1>
                {isLoggedIn
                    ? "Hello " + auth.currentUser?.displayName
                    : "Hello"}
            </h1>
        </Container>
    );
};

export default Home;
