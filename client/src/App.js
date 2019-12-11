import React from "react";
import './style.css'
import Header from './components/HeaderAndFooter/Header'
import Form  from './components/Form/Form'
import Profile from './components/Profile/Profile'


function App() {
  return (
    <div className="app">
      <Header/>
      <Form/>
      <Profile/>    
    </div>
  );
}

export default App;