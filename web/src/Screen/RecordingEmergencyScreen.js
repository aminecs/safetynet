import './RecordingEmergencyScreen.css';
import AmbulanceImage from '../Image/ambulanceimg.png'
import BottomNavigator from '../Components/BottomNavigator';
import { useHistory } from "react-router-dom";
import sample from '../fall.mp4';

function LiveVideoEmergencyScreen() {
    const history = useHistory();
  return (
      <div className = "mainBody">
    <div className = "main">
        <div className = "title">Watch Recording</div>
        <video className='videoTag' src={sample} autoPlay loop muted />
        <div className = "card-container flex-row">
            <img src = {AmbulanceImage} />
            <div className = "light-text" style = {{marginLeft: 20}}><b>911</b> has been called and an ambulance is on the way</div>
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
        <div className = "button"  onClick = {() => history.push("/livevideoemergency")}>
            See Live Stream
        </div>
    </div>
    <BottomNavigator />
    </div>
  );
}

export default LiveVideoEmergencyScreen;
