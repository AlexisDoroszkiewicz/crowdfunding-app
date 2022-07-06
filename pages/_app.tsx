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
import { initializeApp } from "firebase/app";

import { firebaseConfig } from "../firebase.config";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


function MyApp({ Component, pageProps }: AppProps) {
	// const firebaseConfig = {
	// 	apiKey: "AIzaSyCCYTB2w7S6dh5w91TFVb6JMQBah2aLJlI",
	// 	authDomain: "crowdfunding-app-4f407.firebaseapp.com",
	// 	projectId: "crowdfunding-app-4f407",
	// 	storageBucket: "crowdfunding-app-4f407.appspot.com",
	// 	messagingSenderId: "651487973051",
	// 	appId: "1:651487973051:web:a4b9222bb7ab1bb599639e",
	// 	measurementId: "G-C8274EJMVH"
	// };
	
	  
	// Initialize Firebase
	console.log(firebaseConfig)
	  
	// const app = initializeApp(firebaseConfig);
	// console.log(app)
	  
	// const auth = getAuth(app);
	// const provider = new GoogleAuthProvider();

	const signIn = async () => {
		// googlePopUpSignIn()
	}
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
							sx={{ mr: 2 }}>
							<MenuIcon />
						</IconButton>
						<Typography
							variant="h6"
							component="div"
							sx={{ flexGrow: 1 }}>
							Crowdfunding App
						</Typography>
						<Button color="inherit" onClick={signIn}>Login</Button>
					</Toolbar>
				</Container>
			</AppBar>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
