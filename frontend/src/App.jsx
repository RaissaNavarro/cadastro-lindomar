import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from "./components/Login";
import Home from "./components/Home";
import Modal from "./components/Modal";

export default function  App(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/modal" element={<Modal />}/>
            </Routes>
        </Router>

    )
}