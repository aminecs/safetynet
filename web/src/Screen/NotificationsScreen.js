import React, {useState} from 'react';
import './NotificationsScreen.css';
import WalkingImg from '../Image/walkingman.png';
import WarningImg from '../Image/warning.png';
import { useHistory } from "react-router-dom";
import StarFillImg from '../Image/star-fill.png';
import BottomNavigator from '../Components/BottomNavigator';

function NotificationsScreen() {  
    const [isSaved, setIsSaved] = useState(false);
    const history = useHistory();
    return (
        <div className = "mainBody" style = {{paddingBottom: 0}}>
        <div className = "main" style = {{display: "initial", marginBottom: 0}}>
            <div style = {{display: "flex", justifyContent: "space-between"}}>
                <div className = "title">Notifications</div>
                <div className = "title">Saved</div>
                <div> </div>
                <div> </div>
            </div>
            <div className = "scroll-view" style = {{height: 635, flex: 1, display: "flex", flexDirection: "column"}}>
            {[1,2,3,4,5,6,7,8,8,8,8,8].map((recording, index) => {
                return(
                    <div className = "card-container" style = {{display: "flex", flexDirection: "row"}} onClick = {() => history.push("/watchvideo")}>
                        <img alt = "walking" src = {WalkingImg} />
                        <div style = {{paddingLeft: 10, flex: 1, fontSize: 17. }}>
                            <div style = {{display: "flex", justifyContent: "space-between", alignItems: "center" ,flex: 1,}}>
                                <div style = {{paddingTop: 5,}}>
                                    <b>Living Room: Fall</b>
                                    <img alt = "walking" src = {WarningImg} />
                                </div>
                                <img alt = "walking" src = {StarFillImg} />
                            </div>
                            <div>03:30 PM  4-17-2021</div>
                        </div>
                    </div>
                )
            })}
        </div>
        </div>
        <BottomNavigator />
        </div>
    );
  }

export default NotificationsScreen;