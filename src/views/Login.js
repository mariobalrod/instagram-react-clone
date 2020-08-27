import React from 'react'
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const Container = styled.div`
    border: 1px solid lightgray;
    box-shadow: 10px 5px 5px lightgray;
    border-radius: 40px;
    background: #ffffff;
    width: 500px;
    padding: 50px;
`;

const Content = styled.div`
    display: flex-column;
    align-items: center;
    background: #ffffff;
`;

const Text = styled.h4`
    background: #ffffff;
    font-size: 34px;
    text-align: center;
`;

const Login = (props) => {
    return (
        <Container className="mx-auto mt-5">
            <Content className="mt-5">
                <Text className="mt-3">Welcome to <br/> Instagram Clone</Text>
                <Button className="mx-auto mt-5" variant="dark" style={{width: 150}} onClick={props.signIn} block>Start with Google</Button>
                <h6 style={{textAlign: "center", marginTop: 40, background: "#ffffff"}}>By Mariobalrod</h6>
            </Content>
        </Container>
    )
}

export default Login
