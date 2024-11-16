import "./App.css";
import { Landing } from "./Views/Landing/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SingUp } from "./Views/SignUp/SignUp";
import { LogIn } from "./Views/LogIn/Login";

function App() {
  return (
    <>
      <div id="App">
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<SingUp />} />
            <Route path="/login" element={<LogIn />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
