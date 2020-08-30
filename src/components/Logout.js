import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Logout = () => {
    return (
      <Link
      to="#"
        className="ml-4"
        onClick={() => {
          firebase
            .auth()
            .signOut()
            .then(function () {
              // Sign-out successful.
              console.log("Sign Out Succesfully");
            })
            .catch(function (error) {
              // An error happened.
              alert(error);
            });
        }}
        variant="dark"
        style={{ color: "black" }}
      >
        <ExitToAppIcon style={{ background: "trasparent" }} />
      </Link>
    );
}

export default Logout
