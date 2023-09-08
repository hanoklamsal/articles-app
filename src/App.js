import React from "react";
import "./app.css";
import Login from "./components/login/login";
import LandingPage from "./components/registration/landing-page";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Article from './components/articles/article';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
