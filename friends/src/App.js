import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import FriendsList from "./components/FriendsList";
import FriendForm from "./components/FriendForm";

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

  postFriend = (e, person) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/friends", person)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={props => (
            <FriendsList {...props} friends={this.state.friends} />
          )}
        />
        {/* <FriendForm addFriend={this.addFriend} /> */}
        <FriendForm postFriend={this.postFriend} />
      </div>
    );
  }
}

export default App;
