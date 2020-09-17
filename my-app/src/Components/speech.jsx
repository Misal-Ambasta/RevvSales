import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Dictaphone = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }
  SpeechRecognition.startListening({ continuous: true });
  SpeechRecognition.stopListening({ continuous: false });

  return (
    <div>
      {/* <div>
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/2983/2983820.svg"
          style={{
            marginLeft: "0px",
            width: "20px",
            height: "20px",
          }}
          onMouseDown={SpeechRecognition.startListening}
          onMouseUp={SpeechRecognition.stopListening}
        />
      </div>

      <p>{transcript}hii</p> */}
    </div>
  );
};
export default Dictaphone;
