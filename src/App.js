// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Alert from "./components/Alert";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (messageType, Message) => {
    setAlert({
      type: messageType,
      msg: Message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#3c3d59";
      showAlert("success", "Dark Mode Enabled");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success", "Light Mode Enabled");
    }
  };

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} mode={mode} />

        <Routes>
          <Route
            path="/onlinetextformatter"
            element={
              <TextForm
                showAlert={showAlert}
                mode={mode}
                heading="Enter Text To Analyze"
              />
            }
          />
         
        </Routes>
      </Router>
    </>
  );
}

export default App;
