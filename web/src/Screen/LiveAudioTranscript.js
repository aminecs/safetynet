import './LiveAudioTranscript.css';
import DownloadIcon from '../Image/download-icon.png'
import BottomNavigator from '../Components/BottomNavigator';
import { useHistory } from "react-router-dom";

function LiveAudioTranscript() {
    const history = useHistory();
    return (
        <div className = "mainBody">
        <div className = "main" style = {{flex: 1, overflow: "hidden"}}>
            <div style = {{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                <div className = "title">
                    Live Audio Transcript
                </div>
                <img src = {DownloadIcon} height = {20}/>
            </div>
            <div className = "transcriptBody">
            <div>
                <div style = {{fontSize: 12, color: "#5564DD"}}>9:00 AM</div>
                <div className = "card-container" style = {{marginTop: 5}}>
                    <b>Debra</b>: Are you okay?
                </div>
            </div>
            <div >
                            <div style = {{fontSize: 12, color: "#5564DD"}}>9:01 AM</div>
                            <div className = "card-container" style = {{marginTop: 5}}>
                                <b>Grandma</b>: No I need help?
                            </div>
                        </div>
                        <div>
                            <div style = {{fontSize: 12, color: "#5564DD"}}>9:01 AM</div>
                            <div className = "card-container" style = {{marginTop: 5}}>
                                <b>Debra</b>: Ok, calling 911 now..
                            </div>
                        </div>
                        <div>
                            <div style = {{fontSize: 12, color: "#5564DD"}}>9:02 AM</div>
                            <div className = "card-container language-selected" style = {{marginTop: 5}}>
                                <b>911</b>: 911 emergency, how can we help
                            </div>
                        </div>
                        <div>
                            <div style = {{fontSize: 12, color: "#5564DD"}}>9:02 AM</div>
                            <div className = "card-container" style = {{marginTop: 5}}>
                                <b>911</b>: Hello, I am Debra, a bot from SafetyNet. Maggie McDonald, an 80 year old woman, has fallen and hasn’t moved for the last 5 minutes. Can you send help to 123 Address St?
                            </div>
                        </div>
                        <div>
                            <div style = {{fontSize: 12, color: "#5564DD"}}>9:02 AM</div>
                            <div className = "card-container language-selected" style = {{marginTop: 5}}>
                                <b>911</b>: Ok, dispatching ambulance now.
                            </div>
                        </div>
            </div>
        </div>
        <BottomNavigator />
        </div>
    );
}

export default LiveAudioTranscript;
