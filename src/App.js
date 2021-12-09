import logo from './logo.svg';
import Home from "./pages/Home/Home.component.jsx";
import Client from './pages/Client/Cliente.component';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.less';

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Home}  />
      <Route exact path="/client" component={Client}/>
    </Switch>
  </Router>
  );
}

export default App;
