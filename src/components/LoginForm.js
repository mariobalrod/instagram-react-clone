import React, { useState } from "react";
import styled from 'styled-components';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import AppleIcon from '@material-ui/icons/Apple';
import AndroidIcon from '@material-ui/icons/Android';

const Box = styled.div`
    width: 100%;
    display: flex-grow;
    align-items: center;
    justify-content: center; 
`;

const Group = styled.div`
    border: 1px solid lightgray; 
    background: "#ffffff";
`;

const Row1 = styled.div`
    width: 100%;
    height: 50px;
    margin-top: 10px;
    background: transparent;
`;

const Row2 = styled.div`
    width: 100%;
    height: 190px;
    padding: 17px;
    background: transparent;
`;

const Row3 = styled.div`
    width: 80%;
    height: 63px;
    background: transparent;
    border-top: 1px solid lightgray;
`;

const Row4 = styled.div`
    width: 100%;
    height: 85px;
    margin-top: 10px;
    background: transparent;
`;

const PuttonGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Putton = styled.a`
    margin: 4px;
    width: 136px;
    height: 40px;
    color: black;
    &:hover {
        text-decoration: none;
        color: gray;
    }
`;

const LoginForm = (props) => {

    const [state, setState] = useState({
      email: "",
      password: "",
    });

    const handleChangle = (e) => {
      e.preventDefault();
      const value = e.target.value;
      setState({
        ...state,
        [e.target.name]: value
      });
    }

    const handleSubmit = (e) => {
      e.preventDefault();

      props.emailLogin(state);

      setState({
        email: "",
        password: "",
      });
    }

    return (
      <Box>
        <Group>
          <Row1>
            <div className="mx-auto mt-5" style={{ width: "40%" }}>
              <img
                style={{ width: "100%", background: "#ffffff" }}
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt="logo"
              />
            </div>
          </Row1>

          <Row2>
            <Form className="mx-auto" onSubmit={handleSubmit}>
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
                Log In
              </Button>
            </Form>
          </Row2>

          <Row3 className="mx-auto" style={{ textAlign: "center", paddingTop: 10 }}>
            <Link style={{ fontSize: 14, textDecoration: "none", fontWeight: "bold", color: "#385185" }} onClick={props.googleLogin}>
                Log in with Google
            </Link>
          </Row3>
        </Group>
        
        <Group className="mt-2" style={{textAlign: "center", fontSize: 14}}>
            <p className="mt-2">Don't have an account? <Link to="/signup" style={{textDecoration: "none", fontWeight: "bold", color: "#57b6f8"}}>Regístrate</Link></p>
        </Group>

        <Group className="mt-2" style={{textAlign: "center", fontSize: 14}}>
          <Row4>
              <div>
                <p>Get the app</p>
              </div>
              <PuttonGroup>
                <Putton target="_blank" href="https://apps.apple.com/app/instagram/id389801252?vt=lo">
                    <AppleIcon /> <strong>App Store</strong>
                </Putton>
                <Putton target="_blank" href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D35CC0190-BD98-4B3C-ABCE-26BA50AA1677%26utm_content%3Dlo%26utm_medium%3Dbadge">
                    <strong>Google Play</strong> <AndroidIcon />
                </Putton>
              </PuttonGroup>
          </Row4>
        </Group>
      </Box>
    );
}

export default LoginForm
