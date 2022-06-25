import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./components/Home";
import Auth from "./components/Auth";

function App() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<Home />} />
                <Route path="login" element={<Auth isLogin />} />
                <Route path="register" element={<Auth />} />
            </Route>
        </Routes>
    );
}

export default App;
