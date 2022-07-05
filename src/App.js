import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React from "react";

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textutils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Textutils - Light Mode";
    }
  };
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  return (
    <>
        <Navbar title="textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
    </>
  );
}

export default App;
