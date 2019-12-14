import React from "react";
import './style.css'
import Header from './components/HeaderAndFooter/Header'
import Form  from './components/Form/Form'
import ProfileHOC from './hoc/profileHOC'


function App() {
  return (
    <div className="app">
      <Header/>
      <Form/>
      <ProfileHOC/>    
    </div>
  );
}

export default App;