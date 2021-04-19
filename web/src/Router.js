import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LiveVideoEmergencyScreen from './Screen/LiveVideoEmergencyScreen';
import LiveVideoScreen from './Screen/LiveVideoScreen';
import WatchVideoScreen from './Screen/WatchRecordingScreen';
import RecordingEmergencyScreen from './Screen/RecordingEmergencyScreen';
import LiveAudioTranscript from './Screen/LiveAudioTranscript';
import NotificationsScreen from './Screen/NotificationsScreen';
import HomeScreen from './Screen/HomeScreen';
import Signup from './Screen/Onboarding/Signup';
import SetupUser from './Screen/Onboarding/SetupUser';
import Languages from './Screen/Onboarding/Languages';
import OtherUser from './Screen/Onboarding/OtherUser';

function Router(){
  return(
      <BrowserRouter>
      <Route exact path = "/watchvideo" component = {WatchVideoScreen} />
          <Route exact path = "/signup" component = {Signup} />
          <Route exact path = "/setupuser" component = {SetupUser} />
          <Route exact path = "/languages" component = {Languages} />
          <Route exact path = "/otheruser" component = {OtherUser} />
          <Route exact path = "/livevideo" component = {LiveVideoScreen} />
          <Route exact path = "/livevideoemergency" component = {LiveVideoEmergencyScreen} />
          <Route exact path = "/watchvideoemergency" component = {RecordingEmergencyScreen} />
          <Route exact path = "/liveaudiotranscript" component= {LiveAudioTranscript} />
          <Route exact path = "/notifications" component= {NotificationsScreen} />
          <Route exact path = "/home" component= {HomeScreen} />
          <Route exact path = "/" component = {HomeScreen} />
      </BrowserRouter>
  )
}

export default Router;