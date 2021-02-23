import React from "react";
import './App.css';
<<<<<<< HEAD
import { BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./LoginFolder/Login";
import CreatePage from "./CreateProjectFolder/create";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/login" component={LoginPage}/>
	<Route exact path="/createproject" component={CreatePage}/>
      </BrowserRouter>
    </div>
  );

import Routes from "./Components/Routes"

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //this is where the token check will go with the API
  }

  render() {
    return (
      <div className="App">
        {/*put the Header component here*/}
        <Routes />
        {/*put the Footer component here*/}
      </div>
    )
  }

export default App;
