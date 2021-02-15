import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./LoginFolder/Login"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/login" component={LoginPage}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
