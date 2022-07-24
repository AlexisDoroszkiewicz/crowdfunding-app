import type { NextPage } from "next";
import { Container } from "@mui/material";
import { firebaseApp } from "firebase.config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import ProjectList from "@components/ProjectList";
import Project from "@classes/Project";

const tempProjectList: Project[] = [
    {
        id: "2DjnIuE7q0UCpOwmSR6q",
        createdAt: new Date(),
        description: "Blahblahblah",
        isClosed: false,
        likes: 98,
        ownerId: "wJSLzZ25cIPL3tyfrHMfPrD4h002",
        reachedAmount: 300,
        requiredAmount: 40000,
        title: "The first project",
    },
    {
        id: "2DjnIuE7q0UCpOwmSR6w",
        createdAt: new Date(),
        description: "Tototototototototo",
        isClosed: false,
        likes: 98,
        ownerId: "wJSLzZ25cIPL3tyfrHMfPrD4h002",
        reachedAmount: 300,
        requiredAmount: 40000,
        title: "The second project",
    },
];

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
            <ProjectList projects={tempProjectList} />
        </Container>
    );
};

export default Home;
