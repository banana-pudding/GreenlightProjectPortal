import React from "react";
import './App.css';
import Routes from "./Components/Routes"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"

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
        <Navbar />
        <Routes />
        <Footer />
      </div>
    )
  }
}

export default App;