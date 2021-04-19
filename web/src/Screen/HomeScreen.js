import React from 'react';
import './HomeScreen.css';
import GrandmaImage from '../Image/grandma.png'
import EditIcon from '../Image/editbtn.png';
import WarningFillIcon from '../Image/warning-fill.png';
import EmergencyIcon from '../Image/EmergencyDispatchIcon.png';
import Kitchen from '../Image/Kitchen.png';
import LivingRoom from '../Image/LivingRoom.png';
import Dining from '../Image/Dining.png';
import Bedroom from '../Image/Bedroom.png';
import BottomNavigator from '../Components/BottomNavigator';
import { useHistory } from "react-router-dom";

function HomeScreen() {  
  const history = useHistory();
    return (
      <div className = "mainBody">
        <div className = "main">
            <div className = "title" style = {{marginBottom: 0}}>Grandma's house</div>
            <div className = "card-container">
              <div style = {{display: "flex", justifyContent: "space-between"}}>
                <img src = {GrandmaImage} alt = "grandma" />
                <div>
                  <div><b>Grandma</b></div>
                  <div>123 Address Street</div>
                  <div>123-456-7890</div>
                </div>
                <img src = {EditIcon} alt = "edit" height = {20}/>
              </div>
              <div className = "border-spacer"></div>
              <div>
                <div >
                  <img src = {WarningFillIcon} width = {15} />
                  <b style = {{paddingLeft: 20}}>2 Falls This year</b>
                </div>
                <div >
                  <img src = {EmergencyIcon} width = {15} />
                  <b style = {{paddingLeft: 20}}>1 Emergency Dispatch</b>
                </div>
              </div>
            </div>
            <div className = "title" style = {{marginTop: 10, marginBottom: 10}}>Rooms</div>
            <div>
              <div style = {{display: "flex", justifyContent: "space-between"}}>
                <div className = "card-container" onClick = {() => history.push("/livevideo")}>
                <img src = {Kitchen} alt = "kitchen" width = {130}/>
                  <div>
                    <b style = {{fontSize: 15}}>Kitchen</b> <br/>
                    <b style = {{fontSize: 12}}>0 FALLS</b>
                  </div>
                </div>
                <div className = "card-container" onClick = {() => history.push("/livevideo")}>
                  <img src = {LivingRoom} alt = "kitchen" width = {130}/>
                  <div>
                    <b style = {{fontSize: 15}}>Living Room</b> <br/>
                    <b style = {{fontSize: 12}}>1 RECENT FALL</b> &nbsp;
                    <img src = {WarningFillIcon} width = {15} />
                  </div>
                </div>
              </div>
              <div style = {{display: "flex", justifyContent: "space-between"}}>
                <div className = "card-container" onClick = {() => history.push("/livevideo")}>
                  <img src = {Dining} alt = "kitchen" width = {130}/>
                  <div>
                  <b style = {{fontSize: 15}}>Dining Room</b> <br/>
                  <b style = {{fontSize: 12}}>0 FALLS</b>
                  </div>
                </div>
                <div className = "card-container" onClick = {() => history.push("/livevideo")}>
                  <img src = {Bedroom} alt = "kitchen" width = {130}/>
                  <div>
                  <b style = {{fontSize: 15}}>Bedroom</b> <br/>
                  <b style = {{fontSize: 12}}>0 FALLS</b>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <BottomNavigator />
      </div>
    );
  }

export default HomeScreen;