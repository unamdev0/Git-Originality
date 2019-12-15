import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from "../components/Profile/Profile";


class profileHOC extends Component {

  languageFormatter = (user) => {
    var languageData;
    languageData = Object.keys(user["language"]).map(language => ({
      language: language,
      count: user["language"][language]
    }));
  
    return languageData;
  };

  render() {
    let data=
      this.props.users.map(user=>{
        const repoData = [
          {name:'forked', value:user.forked},
          {name:'original', value: user.original}
        ];
        const languageData = this.languageFormatter(user);
        return {languageData,repoData,userdata:user.userData}
      })
    return(
    data.map((user)=>(
      <Profile languageData={user.languageData} userData={user.userdata} repoData={(user.repoData)} />
    ))
  )}
}

const mapStateToProps = state => {
  return { users: state.users };
};

export default connect(mapStateToProps)(profileHOC);
