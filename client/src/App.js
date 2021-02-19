import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./LoginFolder/Login";
import EditPage from "./EditProjectFolder/edit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/login" component={LoginPage}/>
	<Route exact path="/editproject" component={EditPage}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
