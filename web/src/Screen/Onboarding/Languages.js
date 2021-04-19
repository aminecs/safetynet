import React, { useState } from 'react';
import './Languages.css';
import Icon from '../../Image/Icon.png';

import Grandpa from '../../Image/grandpa.png';
import Grandma from '../../Image/grandma.png';
import Grandma2 from '../../Image/grandma2.png';
import WarniningFill from '../../Image/warning-fill.png';
import { useHistory } from "react-router-dom";

function Languages() {  
    const [language, setLanguage] = useState([]);
    const history = useHistory();
    return (
        <div className = "mainBody">
        <div className = "main">
            <div style = {{display: "flex", paddingTop: 50}}>
                <div style = {{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <img src = {Icon} alt = "icon" width = {35} height = {45}/>
                    &nbsp;
                    <div style = {{color: "#5564DD", fontSize: 25, fontWeight: "bold", paddingLeft: 10}}>
                        What language(s) does <br /> 
                        <div style = {{display: "flex"}}>
                            <div style = {{color: "#FE7940"}}>Grandma</div> 
                            &nbsp;speak?
                        </div>
                    </div>
                </div>
            </div>
            <div style = {{display: "flex", justifyContent: "space-evenly", alignItems: "center", paddingTop: 20, paddingBottom: 10}}>
                <div className = "selected">
                    <img src = {Grandma} width = {60} height = {60}/>
                </div>
            </div>
           <div style = {{fontWeight: "bold", color: "#5564DD"}}>Select all that apply</div>
            <div className = {language.includes("arabic") ? "card-container language-selected": "card-container"} onClick = {() =>  setLanguage(oldArray => [...oldArray, "arabic"])}>
                <b>Arabic</b>
            </div>
            <div className = {language.includes("cantonese") ? "card-container language-selected": "card-container"} onClick = {() =>  setLanguage(oldArray => [...oldArray, "cantonese"])}>
                <b>Cantonese</b>
            </div>
            <div className = {language.includes("english") ? "card-container language-selected": "card-container"} onClick = {() =>  setLanguage(oldArray => [...oldArray, "english"])}>
                <b>English</b>
            </div>
            <div className = {language.includes("french") ? "card-container language-selected": "card-container"} onClick = {() =>  setLanguage(oldArray => [...oldArray, "french"])}>
                <b>French</b>
            </div>
            <div className = {language.includes("korean") ? "card-container language-selected": "card-container"} onClick = {() =>  setLanguage(oldArray => [...oldArray, "korean"])}>
                <b>Korean</b>
            </div>
            <div className = {language.includes("spanish") ? "card-container language-selected": "card-container"} onClick = {() =>  setLanguage(oldArray => [...oldArray, "spanish"])}>
                <b>Spanish</b>
            </div>
            <div className = "circleContainer">
                <div className = "circle-fill"></div>
                <div className = "circle-fill"></div>
                <div className = "circle"></div>
            </div>
            <div className = "button" onClick = {() => history.push("/otheruser")}>
                Next
            </div>

        </div>
      </div>
    );
  }

export default Languages;