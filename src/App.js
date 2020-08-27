import React, { useState, useEffect } from 'react';
import firebase from 'firebase';

import { db, provider } from './firebase/Config';

// Components
import Header from './components/Header';
import Posts from './components/Posts';

// Views
import Login from './views/Login';

function App() {
  const [ posts, setPosts ] = useState([]);
  const [ token, setToken ] = useState();
  const [ user, setUser ] = useState();

  useEffect(() => {
    db.collection('posts').onSnapshot( snapshot => {
      //* Every time a new post is added, this code runs
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
    })
  }, [])

  const signIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = result.credential.accessToken;
        setToken(token);
        // The signed-in user info.
        const user = result.user;
        console.log(user.displayName);
        setUser(user);
        // ...
      })
      .catch(function (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
        console.log({
          errorCode: errorCode,
          errorMessage: errorMessage,
          email: email,
          credential: credential
        });
        alert(errorMessage);
      });
  };

  return (
    <div className="App">
      <Header user={user} token={token}/>
      {
        (!token) ? (
          <Login signIn={signIn} />
        ) : ''
      }
      
      {
        (token) ? (<Posts posts={posts} />) : ''
      }
    </div>
  );
}

export default App;
