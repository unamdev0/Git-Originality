import React, { Component } from "react";
import { connect } from "react-redux";
import Axios from "axios";
class Form extends Component {
  handleChange = event => {
    this.props.onAddingUsername(event.target.value);
  };

  handleSubmit = event => {
    event.preventDefault();
    const username = this.props.username;
    Axios.post("/form", { username }).then(res => {
      if (res.data) {
        this.props.onAddingUser(res.data);
      }
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

const mapStateToProps = state => {
  return { username: state.username, users: state.users };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddingUser: userData =>
      dispatch({ type: "Adding_user", payload: userData }),
    onAddingUsername: username => {
      dispatch({ type: "Adding_username", payload: username });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
