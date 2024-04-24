import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Landing_Screen from "./components/Landing_Screen";
import Signin from "./components/signin";
import Create_ac from "./components/create_ac";
import Ac_setting from "./components/ac_setting";
import F0F from "./components/F0F_page.js";

function App() {
  return (
    <div className="main_container">
      <Routes>
        <Route path="/" element={<Landing_Screen />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/Create_account" element={<Create_ac />} />
        <Route path="/account_setting" element={<Ac_setting />} />
        <Route path="*" element={<F0F />} />
      </Routes>
    </div>
  );
}

export default App;
