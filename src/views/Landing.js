import React, { useContext, useEffect } from "react";
import { withRouter } from "react-router";
import { app, googleAuthProvider } from "../firebase/Config";
import { Auth } from "../context/AuthContext";
import styled from 'styled-components';

// Images
import LandingImage from '../svg/LandingImage.svg';

// Components
import LoginForm from '../components/LoginForm';
import FooterNav from '../components/FooterNav';

// Hooks
import useWindowSize from '../hooks/useWindowSize';

const Main = styled.div`
    width: 100%;
`;

const Content = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    display: flex;
    align-items: center;
    justify-content: center;
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


const Landing = ({ history }) => {
    const { user } = useContext(Auth);
    const windowSize = useWindowSize();

    useEffect(() => {
        if (user) {
            history.push("/home");
        }
    }, [history, user]);

    // Login with Email function
    const emailLogin = async (state) => {

        await app
            .auth()
            .signInWithEmailAndPassword(state.email, state.password)
            .then(result => {
                console.log(result);
                history.push("/home");
            })
            .catch(error => {
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
      <Main>
            <Content>
                {windowSize.width >= 820 ? (
                    <div style={{ width: 350, height: 485}}>
                        <img
                            src={LandingImage}
                            alt="landingImage"
                            style={{ width: 350, height: 485}}
                        />
                    </div>
                ) : (
                    ''
                )}
                <div style={{ width: 350, height: 485 }}>
                    <LoginForm emailLogin={emailLogin} googleLogin={googleLogin} />
                </div>
            </Content>
            <FooterBox>
                <FooterNav />
            </FooterBox>

      </Main>
    );
}

export default withRouter(Landing);
