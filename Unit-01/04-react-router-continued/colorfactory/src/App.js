import React, { Component } from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import ColorsList from "./ColorsList";
import ColorForm from "./ColorForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">{header}</header>
        <Switch>
          <Route path="/colors/new" render={props => <ColorForm />} />
          <Route path="/colors/:color" render={props => <Color />} />
          <Route path="/colors" render={props => <ColorsList />} />
          <Redirect path="/colors" />
        </Switch>
      </div>
    );
  }
}

export default App;
