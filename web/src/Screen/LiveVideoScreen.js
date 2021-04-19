import './LiveVideoScreen.css';
import React, {useEffect, useState} from 'react';
import WalkingImg from '../Image/walkingman.png';
import FallingImg from '../Image/fallingman.png';
import WarningImg from '../Image/warning.png';
import StarFillImg from '../Image/star-fill.png';
import Star from '../Image/star.png';
import BottomNavigator from '../Components/BottomNavigator';
import { useHistory } from "react-router-dom";
import Notification from '../Image/Notification.png';
import socketIOClient from "socket.io-client";

function LiveVideoScreen() {
    const [dislayNotification, setDisplayNotification] = useState(false);
    const ENDPOINT1 = "http://127.0.0.1:5001";
    const history = useHistory();
    useEffect(() => {
        const socket1 = socketIOClient(ENDPOINT1);
        socket1.on("conversation", data => {
            console.log(data);
          setDisplayNotification(true);
        });
    }, []);
  return (
      <div className = "mainBody">
          {dislayNotification &&
          <div className = "notification" onClick = {() => history.push("/watchvideoemergency")}>
        <img src = {Notification} alt = "not" />
      </div>}
    <div className = "main">
        <div className = "title">Live Stream: Living Room</div>
        <img className = "video" alt = "video" src={"http://127.0.0.1:5000/video_feed"} width="100%"/>
        <div>&nbsp;</div>
        <div style ={{display: 'flex', justifyContent: "space-between"}}>
            <div className = "card-title">Recent Recordinigs</div>
            <div style = {{fontWeight: "bold"}}>See All</div>
        </div>
        <div className = "scroll-view">
            {[1,2,3,4,5].map((recording, index) => {
                return(
                    <div>
                        <div className = "card-container language-selected" style = {{display: "flex", flexDirection: "row"}} onClick = {() => history.push("/watchvideo")}>
                            <img alt = "walking" src = {FallingImg} />
                            <div style = {{paddingLeft: 10, flex: 1, fontSize: 17. }}>
                                <div style = {{display: "flex", justifyContent: "space-between", alignItems: "center" ,flex: 1,}}>
                                    <div style = {{paddingTop: 5,}}>
                                        <b>Living Room: Fall &nbsp;</b>
                                        <img alt = "walking" src = {WarningImg} />
                                    </div>
                                    <img alt = "walking" src = {StarFillImg} />
                                </div>
                                <div>03:30 PM  4-17-2021</div>
                            </div>
                        </div>
                        <div className = "card-container" style = {{display: "flex", flexDirection: "row"}} onClick = {() => history.push("/watchvideo")}>
                            <img alt = "walking" src = {WalkingImg} />
                            <div style = {{paddingLeft: 10, flex: 1, fontSize: 17. }}>
                                <div style = {{display: "flex", justifyContent: "space-between", alignItems: "center" ,flex: 1,}}>
                                    <div style = {{paddingTop: 5,}}>
                                        <b>Living Room: Walking</b>
                                        <img alt = "walking" src = {WarningImg} />
                                    </div>
                                    <img alt = "walking" src = {Star} />
                                </div>
                                <div>12:30 PM  4-17-2021</div>
                            </div>
                        </div>
                        <div className = "card-container" style = {{display: "flex", flexDirection: "row"}} onClick = {() => history.push("/watchvideo")}>
                            <img alt = "walking" src = {WalkingImg} />
                            <div style = {{paddingLeft: 10, flex: 1, fontSize: 17. }}>
                                <div style = {{display: "flex", justifyContent: "space-between", alignItems: "center" ,flex: 1,}}>
                                    <div style = {{paddingTop: 5,}}>
                                        <b>Living Room: Walking</b>
                                        <img alt = "walking" src = {WarningImg} />
                                    </div>
                                    <img alt = "walking" src = {Star} />
                                </div>
                                <div>1:30 PM  4-17-2021</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className = "flex-row" style = {{paddingTop: 15, borderRadius: 5,}}>
            <div className = "button" style = {{flex: 1}}>
                Call Device
            </div>
            <div className = "button-emp" style = {{marginLeft: 15}}>
                Device Settings
            </div>
        </div>
    </div>
    <BottomNavigator />
    </div>
  );
}

export default LiveVideoScreen;
