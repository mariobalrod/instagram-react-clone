import React from 'react';
import { AuthContext } from "./context/AuthContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Views
import Landing from './views/Landing';
import SignUp from './views/SignUp';
import Home from './views/Home';

const App = () => {
  return(
    <AuthContext>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthContext>
  );
}

export default App;
