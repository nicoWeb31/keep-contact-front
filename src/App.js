import React from 'react';
import './App.css';
import NavBar from './component/layout/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './component/pages/Home';
import About from './component/pages/About';
import Register from './component/auth/Register';
import Login from './component/auth/Login'


import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState'


const App = () => {
  return (

    <AuthState>
    <ContactState>
    <AuthState>

        <Router>

          <React.Fragment className="App">
            <NavBar />
            <div className="container">
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />

              </Switch>
            </div>

          </React.Fragment>

        </Router>

    </AuthState>
    </ContactState>
    </AuthState>
  );
}

export default App;
