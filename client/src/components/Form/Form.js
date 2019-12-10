import React, { Component } from "react";
import Axios from "axios";
export default class Form extends Component {
  state = {
    username: ""
  };

  handleChange = event => {
    this.setState({ username: event.target.value });
    console.log(this.state);
  };

  handleSubmit = event=> {
    event.preventDefault();
    const username = this.state.username;
    console.log("username",username)
    Axios.post("/form", { username }).then(res => {
      console.log(res);
    });
  };

  render() {
    return (
      <div className="form_wrapper">
        <form onSubmit={this.handleSubmit}>
          Enter Username
          <input
            className="form_input"
            type="text"
            name="username"
            onChange={this.handleChange}
          />
          <input className="form_submit" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
