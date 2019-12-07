import React, { Component } from "react";
import Axios from "axios";
export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      apiResponse: ""
    };
  }

  send = () => {
    Axios.get("/form").then(data => {
      // if(data!==""){
      //   <Profile 
      // }
      console.log(data)
    });
  };

  render() {
    return (
      <div className="form_wrapper">
        <form action="/form" onSubmit={this.send()} method="post">
          Enter Username
          <input className="form_input" type="text" name="username" />
          <input
            className="form_submit"
            
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}
