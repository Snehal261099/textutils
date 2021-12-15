import "./App.css";
// import PropTypes from "prop-types";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  let toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      togglealert("Dark mode has been enabled", "success");
      setbtn("dark");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      togglealert("Light mode has been enabled", "success");
      setbtn("info");
    }
  };
  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')


  }

  const [mode, setmode] = useState("light"); //whether dark mode is enabled or not
  const [alert, setalert] = useState(null);
  const [btn, setbtn] = useState("info");
  let togglealert = (message, type) => {
    // if (mode === 'dark')
    //   setalert("You are working in dark mode");
    // else
    //   setalert("You are working in light mode")
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1000);
  };
  return (
    <>
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes> 
        <Route exact path="/about" element={<About to="/About" mode={mode} />}></Route>
        <Route 
              exact
              path="/"
              element={
        <TextForm
          heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces "
          mode={mode}
          alert={togglealert}
          btn={btn}
        />
        }
            />
          </Routes>
      </div>
       </Router> 
      {/* <Alert alert={alert} /> */}
      {/* <TextForm
          heading="Enter Your Text to Analyze Below"
          alert={togglealert}
          mode={mode}
          btn={btn}
        /> */}
    </>
  );
}

export default App;
// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   aboutText: PropTypes.string,
// };

// Navbar.defaultProps ={
//   title:"Strangers",
//   aboutText:"About Me"
// }
