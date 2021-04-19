import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import './WatchRecordingScreen.css';
import BottomNavigator from '../Components/BottomNavigator';
import { useHistory } from "react-router-dom";
import WarningImg from '../Image/warning-fill.png'
import sample from '../fall.mp4';

function WatchRecordingScreen() {
    const ENDPOINT = "http://127.0.0.1:5000";
    const history = useHistory();
    const [eTime, setETime] = useState("00:00:00");
    const [hasSet, setHasSet] = useState(false);

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        socket.on("elapsed time", data => {
            if(data !== eTime){
                setETime(data);
            }
          });
    }, []);

      

    return (
        <div className = "mainBody">
            <div className = "main">
                <div className = "title">Watch Recording</div>
                <video className='videoTag' src={sample} autoPlay loop muted />
                <div className = "card-container">
                    <div className = "card-title">Details</div>
                    <div style = {{display: "flex", marginBottom: 5, fontSize: 17}}>
                        <div className = "bold" style = {{flex: 1}}>Date of Incident</div>
                        <div>04-17-2021</div>
                    </div>
                    <div style = {{display: "flex", marginBottom: 5, fontSize: 17}}>
                        <div className = "bold" style = {{flex: 1}}>Time of Incident</div>
                        <div>9:00AM</div>
                    </div>
                    <div style = {{display: "flex", marginBottom: 5, fontSize: 17}}>
                        <div className = "bold" style = {{flex: 1}}>Time Elapsed</div>
                        <div>{eTime}</div>
                    </div>
                    <div style = {{display: "flex", marginBottom: 5, fontSize: 17}}>
                        <div className = "bold" style = {{flex: 1}}>Time Standing</div>
                        <div>9:45 AM</div>
                    </div>
                    <div style = {{display: "flex", marginBottom: 5, fontSize: 17}}>
                        <div className = "bold" style = {{flex: 1}}>Help Dispatched</div>
                        <div>Yes</div>
                    </div>
                    <div className = "border-spacer"></div>
                    <div style = {{display: "flex", marginBottom: 5, fontSize: 17}}>
                        <div className = "bold" style = {{flex: 1}}>Incident Type</div>
                        <div>
                            <img alt = "warning-fill" src = {WarningImg} width = {15}/> &nbsp;
                            Fall
                        </div>
                    </div>
                    <div style = {{display: "flex", marginBottom: 5, fontSize: 17}}>
                        <div className = "bold" style = {{flex: 1}}>Location</div>
                        <div>Living Room</div>
                    </div>
                    <div style = {{display: "flex", marginBottom: 5, fontSize: 17}}>
                        <div className = "bold" style = {{flex: 1}}>Hazards</div>
                        <div>None</div>
                    </div>
                </div>
                <div className = "flex-row">
                    <div className = "button" style = {{flex: 1}} onClick = {() => history.push("/liveaudiotranscript")}>
                        See Transcript
                    </div>
                    <div className = "button-emp" style = {{marginLeft: 12}}>
                        Downlaod Video
                    </div>
                </div>
                </div>
            <BottomNavigator />
        </div>
    );
}

export default WatchRecordingScreen;
