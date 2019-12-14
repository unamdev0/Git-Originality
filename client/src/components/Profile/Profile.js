import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Sector
} from "recharts";

const data02 = [{name: 'Group A', value: 2400}, {name: 'Group B', value: 4567},
                  {name: 'Group C', value: 1398}];


function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const Profile = props => {
  const userData = props.userData;
  const repoData =(props.repoData);
  const languageData = props.languageData;
  console.log(repoData);
  return (
    <div className="profile_wrapper">
      <div className="biodata_wrapper">
        <div className="img_src">
          <img
            style={{ width: "inherit", height: "inherit" }}
            src={userData.avatar_url}
            alt="profile picture"
          />
        </div>
        <p className="userData">
          Username:{userData.login}
          <br />
          Name:{userData.name}
          <br />
          Profile:
          <a style={{ color: "white" }} href={userData.html_url}>
            {" "}
            {userData.html_url}
          </a>
        </p>
      </div>
      
      <div className="bargraph" style={{ textAlign: "left" }}>
      <label style={{ fontSize:'23px', margin:'0 0 10px 20px'}}>language Used</label>
        <BarChart width={600} height={300} data={languageData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis tick={{ fill: "black" }} dataKey="language" />
          <YAxis tick={{ fill: "black" }} />
          <Tooltip cursor={{ fill: "transparent" }} />
          <Legend />
          <Bar dataKey="count" fill={getRandomColor()} />
        </BarChart>
      </div>
      <div className="piechart">
      <label style={{ fontSize:'23px', margin:'0 0 10px 20px'}}>Repository Type</label>
      <PieChart width={300} height={200}>
      <Pie data={repoData} cx={80} cy={75} innerRadius={40} outerRadius={80} fill={getRandomColor()}/>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
  // return (
  //   <PieChart width={800} height={400}>
  //     {/* <Pie isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={80} fill="#8884d8" label/> */}
  //     <Pie data={repoData} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d"/>
  //     <Tooltip/>
  //    </PieChart>
  // );
};
export default Profile;
