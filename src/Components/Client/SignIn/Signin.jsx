import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography, Container, CssBaseline, Link } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import backgroundImage from "../../Global/images/bg-img.jpg";
import Logo from "../../Global/images/logo.png";

const Signin = () => {
    const navigate = useNavigate();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    useEffect(() => {
        // Add background image to the body
        document.body.style.backgroundImage = `url(${backgroundImage})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundAttachment = 'fixed';
        document.body.style.margin = '0';
        document.body.style.height = '100vh';

        // Your Firebase initialization code
        return () => {
            // Cleanup styles on component unmount
            document.body.style.backgroundImage = '';
            document.body.style.backgroundSize = '';
            document.body.style.backgroundPosition = '';
            document.body.style.backgroundAttachment = '';
            document.body.style.margin = '';
            document.body.style.height = '';
        };
    }, []);

    const handleSignIn = () => {
        if (email === "" || password === "") {
            console.log("Good");
        } else {
            console.log("Filling");
        }
    };

    const handleShop = () => {
        navigate("/");
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                flex: '1 0 0',
                alignSelf: 'stretch',
            }}
        >
            <CssBaseline />
            <Container
                component="main"
                maxWidth="xs"
                style={{
                    backgroundColor: 'white',
                    padding: '20px',
                    width: '525px',
                    height: '1060px',
                    position: 'fixed',
                    right: '0',
                    top: '0',
                    border: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px',
                    flex: '1 0 0',
                    alignSelf: 'stretch',
                }}
            >
                <div className="flexbox-container">
                    <Container
                        style={{
                            width: '365px',
                            height: '300px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '10px',
                            flex: '1 0 0',
                            alignSelf: 'stretch',
                        }}
                    >
                        <img
                            src={Logo}
                            alt="Logo"
                            className="logo"
                            style={{
                                width: '137px',
                                height: '50px',
                                objectFit: 'contain',
                            }}
                        />
                    </Container>
                    <div style={{ display: 'flex', alignSelf: 'stretch', alignItems: 'center', gap: '10px' }}>
                        <div style={{ flex: '1' }}>
                            <Typography
                                component="h1"
                                variant="h4"
                                className="sign"
                                style={{
                                    color: '#000',
                                    flex: '1 0 0',
                                    fontFamily: 'Lovelo',
                                    fontSize: '30px',
                                    fontStyle: 'normal',
                                    fontWeight: 900,
                                    lineHeight: 'normal',
                                    leadingTrim: 'both',
                                    textEdge: 'cap',
                                }}
                            >
                                SIGN IN
                            </Typography>
                        </div>
                        <Container
                            style={{
                                display: 'flex',
                                width: '69px',
                                padding: '10px 11px',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '30px',
                                cursor: 'pointer',
                            }}
                            onClick={handleShop}
                        >
                            <Typography
                                style={{
                                    color: '#072840',
                                    fontFamily: 'Roboto',
                                    fontSize: '15px',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    lineHeight: '26px',
                                    letterSpacing: '0.46px',
                                    textTransform: 'uppercase',
                                }}
                            >
                                SHOP <ChevronRightIcon style={{ color: '#2196F3' }} />
                            </Typography>
                        </Container>
                    </div>
                    <TextField
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        size="medium"
                        variant="standard"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            alignSelf: 'stretch',
                        }}
                    />
                    <TextField
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        size="medium"
                        variant="standard"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                    />
                    <Link href="#/" variant="body2" className="forgot-password-link" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold', paddingLeft: '65%', }}>
                        Forgot Password?
                    </Link>
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className="submit-button"
                        onClick={handleSignIn}
                        style={{
                            borderRadius: '30px',
                            background: '#072840',
                            display: 'flex',
                            padding: '8px 22px',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'stretch',
                            marginTop: '10px',
                        }}
                    >
                        Sign In
                    </Button>
                    <Container
                        style={{
                            width: '365px',
                            height: '30px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '10px',
                            flex: '1 0 0',
                            alignSelf: 'stretch',
                        }}
                    >
                        <Link
                            href="#/"
                            variant="body2"
                            className="create-account-link"
                            style={{ textDecoration: 'none', color: '#072840', textAlign: 'center', fontWeight: 'bold' }}
                        >
                            DO NOT HAVE AN ACCOUNT?
                        </Link>
                    </Container>
                    <Container style={{ width: '365px', height: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px', flex: '1 0 0', alignSelf: 'stretch' }}>
                        <Link
                            href="https://accounts.google.com/InteractiveLogin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&osid=1&passive=1209600&service=mail&ifkv=AVQVeyxNQ2A432r4bfY_nLZnSse1n4WLox8NOt3k4n4yU4mXFzdxmjwDpFI1rp9-wKRm_5q_I3Xgc&theme=glif&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                            variant="body2"
                            className="Sign-with-google-link"
                            style={{ textDecoration: 'none', color: 'red', textAlign: 'center', fontWeight: 'bold' }}
                        >
                            <GoogleIcon /> SIGN IN WITH GOOGLE
                        </Link>
                    </Container>
                </div>
            </Container>
        </div>
    );
};

export default Signin;















