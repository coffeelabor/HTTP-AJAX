// import React from 'react';

import React, { Component } from "react";

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
          <input type="text" name="name" placeholder="name" />
          <input type="text" name="age" placeholder="age" />
          <input type="text" name="email" placeholder="email" />
          <button>submit</button>
        </form>
      </div>
    );
  }
}

export default FriendForm;
