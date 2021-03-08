import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchPage from './Pages/SearchPage';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}  />
          <Route exact path='/search-page' component={SearchPage}  />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
