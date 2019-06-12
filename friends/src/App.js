import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Friends from "./components/Friends";

class App extends Component {
  state = {
    friends: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(friends => this.setState({ friends: friends.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={props => <Friends {...props} friends={this.state.friends} />}
        />
      </div>
    );
  }
}

export default App;
