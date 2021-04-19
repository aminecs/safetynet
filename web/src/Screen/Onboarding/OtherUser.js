import React, { useState } from 'react';
import './SetupUser.css';
import Icon from '../../Image/Icon.png';

import Grandpa from '../../Image/user1.png';
import Grandma from '../../Image/user2.png';
import Grandma2 from '../../Image/user3.png';
import WarniningFill from '../../Image/warning-fill.png';
import { useHistory } from "react-router-dom";

function OtherUser() {  
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
                        Who else should be 
                        <div style ={{display: "flex"}}>
                            notified about <div style = {{color: "#FE7940"}}> &nbsp;Grandma</div>
                        </div>
                        on SafetyNet?
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
              <div className = "inputTitle">Phone Number</div>
              <input className = "input"/>
            </div>
            <div className = "inputContainer">
              <div className = "inputTitle">Relationship</div>
              <input className = "input"/>
            </div>
            <div className = "button-emp" style = {{marginBottom: 20, marginTop: 20}}>
                Add Another Contact
            </div>
            <div style = {{display: "flex", color: "#5564DD", fontSize: 12}}>
                <img src = {WarniningFill} alt = "warning" height = {20} style = {{marginRight: 10}} />
                This data will be shared with first responders when help is called on Safety Net. 
            </div>
            <div className = "circleContainer" style ={{height: 35}}>
                <div className = "circle-fill"></div>
                <div className = "circle-fill"></div>
                <div className = "circle-fill"></div>
            </div>
            <div className = "button" onClick = {() => history.push("/home")}>
                Next
            </div>

        </div>
      </div>
    );
  }

export default OtherUser;