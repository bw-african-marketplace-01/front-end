import React from "react";
import Signin from "./components/Signin"
import Signup from "./components/Signup"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/dashboard"/>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Signin}/>
          <Route path="/" />

          <Route path="/">
            <Redirect to="/"/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
