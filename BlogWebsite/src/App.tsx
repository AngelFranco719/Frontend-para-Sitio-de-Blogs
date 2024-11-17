import "./App.css";
import { Landing } from "./Views/Landing/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SingUp } from "./Views/SignUp/SignUp";
import { LogIn } from "./Views/LogIn/Login";
import { LayoutWithoutNav } from "./Layouts/LayoutWithoutNav";
import { LayoutWithNav } from "./Layouts/LayoutWithNav";
import { HomePage } from "./Views/Home/Home";
import { FilterByCategorie } from "./Views/FilterByCategorie/FilterByCategorie";

function App() {
  return (
    <>
      <div id="App">
        <Router>
          <Routes>
            {/* Rutas SIN Navbar */}
            <Route element={<LayoutWithoutNav />}>
              <Route path="/" element={<Landing />} />
              <Route path="/signup" element={<SingUp />} />
              <Route path="/login" element={<LogIn />} />
            </Route>
            {/* Rutas CON Navbar */}
            <Route element={<LayoutWithNav />}>
              <Route path="/home" element={<HomePage />} />
              <Route path="/categories" element={<FilterByCategorie />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
