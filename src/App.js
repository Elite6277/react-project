import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import NaviBar from "./Components/Navibar";

import { BrowserRouter as Router, Routes, Switch, Route, Link } from "react-router-dom";

import { Home } from "./Home";
import { Users } from "./Users";
import { About } from "./About";

function App() {
   return (
      <>
         <Router>
            <NaviBar />
            <Routes>
               <Route exact path="/" component={Home} element={<Home />} />
               <Route path="/user" component={Users} element={<Users />} />
               <Route path="/about" component={About} element={<About />} />
            </Routes>
         </Router>
      </>
   );
}

export default App;
