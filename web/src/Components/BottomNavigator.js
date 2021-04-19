import React from 'react';
import './BottomNavigator.css';

import Home from '../Image/home-fill.png';
import RecordingFill from '../Image/RecordingFill.png';
import Settings from '../Image/Settings.png';
import { useHistory } from "react-router-dom";

function BottomNavigator() {  
    const history = useHistory();
    return (
      <div className = "bottom-nav">
        <div className = "botton-nav-btn" onClick = {() => history.push("/home")}>
            <img alt = "home" src = {Home} />
        </div>
        <div className = "botton-nav-btn" onClick = {() => history.push("/notifications")}>
            <img alt = "home" src = {RecordingFill} />
        </div>
        <div className = "botton-nav-btn">
            <img alt = "home" src = {Settings} />
        </div>
      </div>
    );
  }

export default BottomNavigator;