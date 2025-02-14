import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from "../src/pages/login/index"
import Home from "../src/pages/home/index"
import ModalProfessores from "./components/modal";

export default function  App(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/modal" element={<ModalProfessores />}/>
            </Routes>
        </Router>

    )
}