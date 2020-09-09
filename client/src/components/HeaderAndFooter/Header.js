import React, { Component } from "react";

export default class Header extends Component {
  state = {
    showHeader: true,
    show:true,
  };

  handleEvent = () => {
    if (window.scrollY > 0) {
      this.setState({ showHeader: false });
    } else {
      this.setState({ showHeader: true });
    }

    if(window.scrollY>400){
      this.setState({ show: false });
    }
    if(window.scrollY<400){
      this.setState({ show: true });
    }
  };

  renderLogo = () => {
    if (this.state.showHeader) {
      return (
        <img alt="logo" src="https://bitemycoin.com/wp-content/uploads/2018/06/GitHub-Logo.png" />
      );
    } else {
      return (
        <img alt="logo" src="https://major.io/wp-content/uploads/2014/08/github.png" />
      );
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleEvent);
  }
  render() {
    return (
      <div
        className="header_wrapper"
        style={{
          background: this.state.showHeader ? "black" : "inherit"
        }}
      >
        <div
          className="header_title"
          style={{ color: this.state.showHeader ? "white" : "black", display: this.state.show ? "" :"none" }}
        >
          {this.renderLogo()}
          Git Originality
        </div>
      </div>
    );
  }
}
