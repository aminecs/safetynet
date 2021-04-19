import './LiveVideoEmergencyScreen.css';
import AmbulanceImage from '../Image/ambulanceimg.png'
import BottomNavigator from '../Components/BottomNavigator';
import { useHistory } from "react-router-dom";
import VoiceComponent from '../Components/VoiceComponent';

function LiveVideoEmergencyScreen() {
    const history = useHistory();
  return (
      <div className = "mainBody">
            <div className = "main">
                <div className = "title">Live Stream: Living Room</div>
                <img className = "video" alt = "video" src={"http://127.0.0.1:5000/video_feed"} width="100%"/>
                <div className = "card-container flex-row">
                    <div className = "wrapper">
                        <VoiceComponent />
                    </div>
                    <div className = "light-text" style = {{marginLeft: 20,}}><b>Grandma: No I'm not okay <br/><br/></b></div>
                </div>
                <div className = "card-container">
                    <div className = "card-title">Details</div>
                    <div style = {{display: "flex", marginBottom: 5, fontSize: 17}}>
                        <div className = "bold" style = {{flex: 1}}>Time of Incident</div>
                        <div>9:00AM</div>
                    </div>
                    <div style = {{display: "flex", marginBottom: 5, fontSize: 17}}>
                        <div className = "bold" style = {{flex: 1}}>Time Elapsed</div>
                        <div>22 mins</div>
                    </div>
                    <div style = {{display: "flex", marginBottom: 5, fontSize: 17}}>
                        <div className = "bold" style = {{flex: 1}}>Help Dispatched</div>
                        <div>9:20 AM</div>
                    </div>
                    <div className = "border-spacer"></div>
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
                    <div className = "button" style = {{flex: 1}}>
                        Call Device
                    </div>
                    <div className = "button-emp" style = {{marginLeft: 15}} onClick = {() => history.push("/watchvideoemergency")}>
                        See Recordings
                    </div>
                </div>
            </div>
            <BottomNavigator />
    </div>
  );
}

export default LiveVideoEmergencyScreen;
