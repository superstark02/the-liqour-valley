import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchPage from './Pages/SearchPage';
import About from './Pages/About';
import ContactUs from './Pages/Contact';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}  />
          <Route exact path='/catalogue' component={SearchPage}  />
          <Route exact path='/search-page' component={SearchPage}  />
          <Route exact path='/about' component={About}  />
          <Route exact path='/contact' component={ContactUs}  />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
