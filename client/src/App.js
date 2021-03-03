import React from "react";
import './App.css';
import Routes from "./Components/Routes"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import axios from "axios"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: undefined
    }
  }

  setUser = (user) => {
    console.log("updating user", user);
    this.setState({user})
  }

  componentDidMount() {
    //this is where the token check will go with the API
    console.log("checking token");
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes setUser={this.setUser} user={this.state.user}/>
        <Footer />
      </div>
    )
  }
}

export default App;
