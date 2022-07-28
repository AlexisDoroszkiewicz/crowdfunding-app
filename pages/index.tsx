import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { Container } from "@mui/material";
import { firebaseApp } from "firebase.config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
    getFirestore,
    collection,
    addDoc,
    doc,
    getDocs,
    setDoc,
    deleteDoc,
    getDoc,
    onSnapshot,
    query,
} from "firebase/firestore";
import ProjectCard from "@components/ProjectCard";
import { Project, projectConverter } from "@classes/Project";

const db = getFirestore(firebaseApp);

("use strict");

const Home: NextPage = () => {
    const auth = getAuth(firebaseApp);
    const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser !== null);

    const [projects, setProjects] = useState<Project[]>([]);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    });

    var projectList: Project[] = [];

    async function getProjects() {
        // IMPORTANT
        // IMPLEMENT PAGINATION
        // BEFORE IT'S TOO LATE
        // https://firebase.google.com/docs/firestore/query-data/query-cursors

        projectList = [];

        // const querySnapshot = await getDocs(
        //     collection(db, "projects").withConverter(projectConverter)
        // );
        // querySnapshot.forEach((document) => {
        //     projectList.push(document.data());
        // });

        const q = query(
            collection(db, "projects").withConverter(projectConverter)
        );

        const unsub = onSnapshot(q, (querySnapshot) => {
            // setProjects([querySnapshot.docs.data]);
            // querySnapshot.forEach((document) => {
            //     projects.push(document.data());
            //     console.log(document.data());
            // });
            querySnapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    // setProjects([...projects, change.doc.data()]);
                    setProjects((prevState) => [
                        ...prevState,
                        change.doc.data(),
                    ]);
                }
                if (change.type === "modified") {
                    // setProjects([
                    //     (projects[
                    //         projects.findIndex((obj) => obj.id == change.doc.id)
                    //     ] = change.doc.data()),
                    // ]);
                    setProjects((prevState) => {
                        console.log("initial previous state: " + prevState);
                        const indexlol = prevState.findIndex(
                            (obj) => obj.id == change.doc.id
                        );
                        console.log("index of modified data: " + indexlol);

                        prevState[indexlol] = change.doc.data();
                        console.log(
                            "Prevstate suposedly modified: " +
                                prevState[1].title
                        );

                        const newState: Project[] = prevState;
                        console.log("New State after assignment: " + newState);

                        return prevState;
                    });
                }
                // if (change.type === "removed") {
                //     setProjects(
                //         projects.splice(
                //             projects.findIndex(
                //                 (obj) => obj.id == change.doc.id
                //             ),
                //             1
                //         )
                //     );
                // }
            });
        });
        // setProjects(projectList);
    }

    useEffect(() => {
        getProjects();
    }, []);

    return (
        <Container maxWidth="lg">
            <h1>
                {isLoggedIn
                    ? "Hello " + auth.currentUser?.displayName
                    : "Hello"}
            </h1>
            <div>
                {projects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
        </Container>
    );
};

export default Home;
