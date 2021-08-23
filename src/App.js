import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/dashboard" />
          <Route path="/signup" />
          <Route path="/login" />
          <Route path="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
