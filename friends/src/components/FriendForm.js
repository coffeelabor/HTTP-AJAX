// import React from 'react';

import React, { Component } from "react";
import axios from "axios";

class FriendForm extends Component {
  state = {
    newFriend: {
      name: "",
      age: "",
      emai: ""
    }
  };

  handleChange = e => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div>
        <form className="form">
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="name"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="age"
            value={this.state.age}
            placeholder="age"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="email"
            value={this.state.email}
            placeholder="email"
            onChange={this.handleChange}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default FriendForm;
