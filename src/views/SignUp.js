import React, { useState, useEffect, useContext }  from 'react';
import { withRouter } from "react-router";
import styled from 'styled-components';
import { Button, Form } from 'react-bootstrap';
import { app, googleAuthProvider } from "../firebase/Config";
import { Auth } from "../context/AuthContext";
import {Link} from 'react-router-dom';

// Components
import FooterNav from '../components/FooterNav';

const Main = styled.div`
    display: flex-grow;
    align-items: center;
    justify-content: center;
`;

const Box = styled.div`
    margin-top: 100px;
    width: 350px;
    display: flex-grow;
    align-items: center;
    justify-content: center; 
`;

const Group = styled.div`
    border: 1px solid lightgray; 
    padding: 20px 25px;
    background: "#ffffff";
`;

const Line = styled.span`
    margin-top: 20px;
    display:block;
    width:100%;
    border-top: 1px solid lightgray;
`;

const FooterBox = styled.div`
    position: absolute;
    top: 95%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SignUp = ({ history }) => {

    const { user } = useContext(Auth);

    const [state, setState] = useState({
      email: "",
      password: "",
    });

    useEffect(() => {
        if (user) {
            history.push("/home");
        }
    }, [history, user]);

    const handleChangle = (e) => {
      e.preventDefault();
      const value = e.target.value;
      setState({
        ...state,
        [e.target.name]: value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      handleSignUp(state);

      setState({
        email: "",
        password: "",
      });
    };

    const handleSignUp = async (state) => {
      const { email, password } = state;

      await app
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((result) => {
          console.log(result);
          history.push("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    };

    // Login with Google
    const googleLogin = async () =>{
        await app
            .auth()
            .signInWithPopup(googleAuthProvider)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                alert(error.message)
            });
    }

    return (
      <Main className="mt-5 mb-5">
        <Box className="mx-auto">
            <Group>
                <div className="mx-auto" style={{ width: "40%" }}>
                    <img
                    style={{ width: "100%", background: "#ffffff" }}
                    src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                    alt="logo"
                    />
                </div>

                <p className="mt-3" style={{fontSize: 16,textAlign: "center", fontWeight: "bold"}}>Sign up to see photos and videos from your friends.</p>

                <Button onClick={googleLogin} variant="primary" block>Log in with Google</Button>

                <Line className="mx-auto"/>

                <Form className="mx-auto mt-4" onSubmit={handleSubmit}>
                    <Form.Group>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={state.email}
                        name="email"
                        onChange={handleChangle}
                        size="sm"
                    />
                    </Form.Group>

                    <Form.Group>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={state.password}
                        name="password"
                        onChange={handleChangle}
                        size="sm"
                    />
                    </Form.Group>
                    <Button variant="primary" type="submit" block>
                        Sign Up
                    </Button>
                </Form>

                <p className="mt-3" style={{fontSize: 14, textAlign: "center"}}>By signing up, you agree to our <strong>Terms</strong>, <strong>Data</strong>, <strong>Policy</strong> and <strong>Cookies Policy</strong>.</p>
            </Group>

            <Group className="mt-3" style={{textAlign: "center", fontSize: 14}}>
                <p>Have an account? <Link to="/" style={{textDecoration: "none", fontWeight: "bold", color: "#57b6f8"}}>Log In</Link></p>
            </Group>
        </Box>
        <FooterBox>
            <FooterNav className="mt-5 mb-5" />
        </FooterBox>
      </Main>
    );
}

export default withRouter(SignUp);
