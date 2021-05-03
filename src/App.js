import './App.scss';
import Homepage from './pages/homepage/Homepage';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Dashboard from './pages/dashboard/Dashboard';
import Contacts from './pages/contacts/Contacts';
import Details from './pages/details/Details';
import Update from './pages/update/Update';
import Favorites from './pages/favorites/Favorites';
import PrivateRoute from './components/PrivateRoute';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute path="/contacts" component={Contacts} />
          <PrivateRoute path="/details/:id" component={Details} />
          <PrivateRoute path="/update" component={Update} />
          <PrivateRoute path="/favorites" component={Favorites} />
          <Route path="/home" component={Homepage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
