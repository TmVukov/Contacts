import './App.css';
import Homepage from './components/homepage/Homepage'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import Dashboard from './components/dashboard/Dashboard'
import Contacts from './components/contacts/Contacts'
import Details from './components/details/Details'
import Update from './components/update/Update'
import Favorites from './components/favorites/Favorites'
import PrivateRoute from './components/PrivateRoute'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>        
        <Switch>
          <PrivateRoute exact path='/' component={Dashboard}/>
          <PrivateRoute path='/contacts' component={Contacts}/>          
          <PrivateRoute path='/details/:id' component={Details}/>          
          <PrivateRoute path='/update' component={Update}/>          
          <PrivateRoute path='/favorites' component={Favorites}/>          
          <Route path='/home' component={Homepage}/> 
          <Route path='/login' component={Login}/> 
          <Route path='/signup' component={Signup}/>                 
        </Switch>        
      </Router>
    </div>
  );
}

export default App;
