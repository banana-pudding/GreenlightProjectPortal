import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./LoginFolder/Login"
import LandingPage from "./Components/LandingPage/LandingPage.jsx"
import { Component } from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/login" component={LoginPage}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
