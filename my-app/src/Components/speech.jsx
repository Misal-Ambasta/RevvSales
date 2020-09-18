import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { AppContext } from "../Context/AuthContext";
const Dictaphone = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();
  var t = transcript.split(" ").join("");
  t = t.toLowerCase();
  console.log(t);
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }
  //SpeechRecognition.startListening({ continuous: true });
  //   SpeechRecognition.stopListening({ continuous: false });
  window.localStorage.setItem("name", t);
  return (
    <AppContext.Consumer>
      {({ handleMicChange }) => (
        <div>
          <div>
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/2983/2983820.svg"
              style={{
                marginLeft: "0px",
                width: "20px",
                height: "20px",
              }}
              onClick={SpeechRecognition.startListening}
              onMouseLeave={handleMicChange}
            />
          </div>
        </div>
      )}
    </AppContext.Consumer>
  );
};
export default Dictaphone;
