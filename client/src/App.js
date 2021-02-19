import React from "react";
import './App.css';
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
}

export default App;
