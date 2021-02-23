import logo from './logo.svg';
import './App.css';
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
}

export default App;
