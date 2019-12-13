import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,PieChart, Pie, Sector
} from "recharts";

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const data02 = [
  { name: 'Group A', value: 2400 }, { name: 'Group B', value: 4567 },
 
  { name: 'Group C', value: 1398 },
  //  { name: 'Group D', value: 9800 },
  // { name: 'Group E', value: 3908 }, { name: 'Group F', value: 4800 },
];

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
        <br/>
        <br/>
        <br/>
    <div className="bargraph" style={{textAlign:"left"}}>
    <BarChart
        width={600}
        height={300}
        data={props.barData}

      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="language" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill={getRandomColor()} />
      </BarChart>
    </div >
    <div className="piechart">
    <PieChart width={400} height={400}>
        <Pie dataKey="value" isAnimationActive={true} data={props.pieData} cx={200} cy={200} outerRadius={80} fill={getRandomColor()} label />
        <Tooltip />
      </PieChart>
    </div>
    </div>
  )
}
export default Profile;
