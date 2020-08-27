import React, { useEffect, useContext ,useState} from "react";
import { Button } from 'react-bootstrap';
import firebase from 'firebase';
import { Auth } from "../context/AuthContext";
import { withRouter } from "react-router";

const Home = ({history}) => {

    const { user } = useContext(Auth);
    const [name, setName] = useState(null)

    useEffect(() => {
        if (user===null) {
            history.push("/");
        }
        user?user.displayName?setName(user.displayName):setName(user.email):setName(null)
    }, [history, user]);

    return (
        <div>
            <h1>Hi {name}</h1>
            <Button onClick={() => {
                firebase.auth().signOut().then(function() {
                    // Sign-out successful.
                    console.log("Sign Out Succesfully")
                  }).catch(function(error) {
                    // An error happened.
                    alert(error);
                  });
            }}>Sign Out</Button>
        </div>
    )
}

export default withRouter(Home);
