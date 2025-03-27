import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaMicrophone } from "react-icons/fa";

const VoiceNavigation = ({ onClose }) => {
  const [listening, setListening] = useState(false);
  const navigate = useNavigate();
  let recognition;

  useEffect(() => {
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-US";

      recognition.onstart = () => setListening(true);
      recognition.onend = () => {
        setListening(false);
        onClose(); // Automatically close the mic window after recognition ends
      };

      recognition.onresult = (event) => {
        let command = event.results[0][0].transcript.trim().toLowerCase();
        command = command.replace(/[.,!?]/g, ""); // Remove punctuation

        console.log("Recognized command:", command);

        // 🎯 Available Routes
        const routes = {
          "dashboard": "/dashboard",
          "profile": "/profile",
          "settings": "/settings",
          "reports": "/reports"
        };

        if (routes[command]) {
          speak(`Okay, opening ${command}.`);
          console.log(`✅ Redirecting to: ${routes[command]}`);
          setTimeout(() => {
            navigate(routes[command]); 
            onClose(); // Close the window after redirect
          }, 1500); // Delay to allow speech output
        } else {
          speak("Sorry, I didn't understand.");
          console.warn(`⚠️ Unrecognized command: "${command}"`);
          setTimeout(() => {
            speak("Understood.");
            onClose(); // Close the window after saying "Understood."
          }, 2000);
        }
      };
    }
  }, [navigate, onClose]);

  // 🎤 Speak Function
  const speak = (message) => {
    const speech = new SpeechSynthesisUtterance(message);
    speech.lang = "en-US";
    speech.rate = 1;
    window.speechSynthesis.speak(speech);
  };

  // 🎤 Start Listening
  const startListening = () => {
    if (recognition) {
      speak("Listening...");
      console.log("🎤 Listening for command...");
      recognition.start();
    }
  };

  return (
    <div 
    style={{ 
      textAlign: "center", 
      marginTop: "20px", 
      width: "200px", 
      padding: "10px",
      borderRadius: "10px", 
      background: "#f8f9fa",
      boxShadow: "0 2px 10px rgba(0,0,0,0.2)", 
      position: "fixed",
      bottom: "20px",
      right: "20px"
    }}
  >
    <h4 style={{ fontSize: "14px", marginBottom: "10px" }}>🎤 Voice Command</h4>
    <button 
      onClick={startListening}
      style={{
        backgroundColor: listening ? "#ff4d4d" : "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "50%",
        padding: "10px",
        fontSize: "16px",
        cursor: "pointer",
        outline: "none",
      }}
    >
      <FaMicrophone />
    </button>


</div>  
  );
};

export default VoiceNavigation;


