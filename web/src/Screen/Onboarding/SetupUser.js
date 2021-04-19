import React, { useState } from 'react';
import './SetupUser.css';
import Icon from '../../Image/Icon.png';

import Grandpa from '../../Image/grandpa.png';
import Grandma from '../../Image/grandma.png';
import Grandma2 from '../../Image/grandma2.png';
import WarniningFill from '../../Image/warning-fill.png';
import { useHistory } from "react-router-dom";

function SetupUser() {  
    const [selected, setSelected] = useState(false);
    const history = useHistory();
    return (
        <div className = "mainBody">
        <div className = "main">
            <div style = {{display: "flex", paddingTop: 50}}>
                <div style = {{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <img src = {Icon} alt = "icon" width = {35} height = {45}/>
                    &nbsp;
                    <div style = {{color: "#5564DD", fontSize: 25, fontWeight: "bold", paddingLeft: 10}}>
                        Who are you <br /> setting this up for?
                    </div>
                </div>
            </div>
            <div style = {{display: "flex", justifyContent: "space-evenly", alignItems: "center", paddingTop: 20, paddingBottom: 10}}>
                <img src = {Grandpa} width = {60} height = {60}/>
                <div className = {selected ? "selected" : "notSelected"} onClick = {() => setSelected(!selected)}>
                    <img src = {Grandma} width = {60} height = {60}/>
                </div>
                <img src = {Grandma2} width = {60} height = {60}/>
            </div>
            <div className = "inputContainer">
              <div className = "inputTitle">Nickname</div>
              <input className = "input"/>
            </div>
            <div className = "inputContainer">
              <div className = "inputTitle">Address</div>
              <input className = "input"/>
            </div>
            <div className = "inputContainer">
              <div className = "inputTitle">Phone Number</div>
              <input className = "input"/>
            </div>
            <div className = "inputContainer">
              <div className = "inputTitle">Health Conditions</div>
              <textarea className = "input"/>
            </div>
            <div style = {{display: "flex", color: "#5564DD", fontSize: 12}}>
                <img src = {WarniningFill} alt = "warning" height = {20} style = {{marginRight: 10}} />
                This data will be shared with first responders when help is called on Safety Net. 
            </div>
            <div className = "circleContainer" style ={{height: 35}}>
                <div className = "circle-fill"></div>
                <div className = "circle"></div>
                <div className = "circle"></div>
            </div>
            <div className = "button" onClick = {() => history.push("/languages")}>
                Next
            </div>

        </div>
      </div>
    );
  }

export default SetupUser;