import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './NoMatch/NoMatch';
import CountryDetail from './components/CountryDetail/CountryDetail';

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route path ="/home">
             <Home/>
          </Route>
          <Route path="/country/:alpha3Code">
            <CountryDetail/>
          </Route>
          <Route exact path ="/">
             <Home/>
          </Route>
          <Route path ="*">
             <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
