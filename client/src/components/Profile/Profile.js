import React from "react";
import { PieChart,BarChart } from 'recharts'


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


const Profile=(props)=>{
  return(
    <div className="profile_wrapper">
      <div className="img_src">
        <img src={props.img} alt="profile picture"/>
      </div>
      <p className="userData">
          Username:{props.username}<br/>
          Name:{props.name}<br/>
          About:{props.about}
        </p>
    </div>
  )
}
export default Profile; 