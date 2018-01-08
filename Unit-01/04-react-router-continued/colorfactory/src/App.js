import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ColorsList from "./ColorsList";
import ColorForm from "./ColorForm";
import Color from "./Color";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: []
    };
    this.addColor = this.addColor.bind(this);
  }
  addColor(newColorObj) {
    this.setState(
      {
        colors: [newColorObj, ...this.state.colors]
      },
      () => localStorage.setItem("colors", JSON.stringify(this.state.colors))
    );
  }
  componentWillMount() {
    let colors = JSON.parse(localStorage.getItem("colors")) || [];
    this.setState({ colors });
  }
  render() {
    const colorsList = () => <ColorsList colors={this.state.colors} />;
    const colorForm = props => (
      <ColorForm addColor={this.addColor} {...props} />
    );
    const showColor = props => {
      const name = props.match.params.color;
      const color = this.state.colors.find(color => color.colorName === name);
      return color ? (
        <Color {...props} color={color} />
      ) : (
        <Redirect to="/colors" />
      );
    };
    return (
      <div className="App">
        <Switch>
          <Route path="/colors/new" render={colorForm} />
          <Route path="/colors/:color" render={showColor} />
          <Route path="/colors" render={colorsList} />
          <Redirect to="/colors" />
        </Switch>
      </div>
    );
  }
}

export default App;
