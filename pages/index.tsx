import type { NextPage } from "next";
import { Container } from "@mui/material";
import { firebaseApp } from "firebase.config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

const Home: NextPage = () => {
    const auth = getAuth(firebaseApp);
    const [name, setName] = useState(auth.currentUser?.displayName);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setName(user.displayName);
        } else {
            setName("");
        }
    });
    return (
        <Container maxWidth="lg">
            <h1>hello {name}</h1>
        </Container>
    );
};

export default Home;
