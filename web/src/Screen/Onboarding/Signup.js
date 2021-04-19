import React from 'react';
import './Signup.css';
import Icon from '../../Image/Icon.png';
import OR from '../../Image/OR.png';
import SocialMedia from '../../Image/socialmedia.png';
import { useHistory } from "react-router-dom";

function Signup() {  
  const history = useHistory();
    return (
      <div className = "mainBody">
        <div className = "main">
          <div style = {{display: "flex", flex: 0.75, justifyContent: "center", alignItems: "center"}}>
            <div style = {{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
              <img src = {Icon} alt = "icon" width = {70}/>
              <div style = {{display: "flex", fontSize: 25}}>
                <b style = {{color: "#343965"}}>Safety</b>
                <b style = {{color: "#FE7940"}}>Net</b>
              </div>
            </div>
          </div>
          <div style = {{flex: 1}}>
            <div className = "inputContainer">
              <div className = "inputTitle">Full Name</div>
              <input className = "input"/>
            </div>
            <div className = "inputContainer">
              <div className = "inputTitle">Email</div>
              <input className = "input"/>
            </div>
            <div className = "inputContainer">
              <div className = "inputTitle">Password</div>
              <input className = "input" type = "password"/>
            </div>
            <img src = {OR} alt = "or" />
            <div style = {{paddingBlock: 5,}}>
            <b>Sign up with</b>
            </div>
            <img src = {SocialMedia} alt = "sm" />
            <div style = {{color: "#5564DD", paddingTop: 10, paddingBlock: 10}}>Already a Member? Login</div>
            <div className = "button" onClick = {() => history.push("/setupuser")}>Sign up</div>
          </div>
        </div>
      </div>
    );
  }

export default Signup;