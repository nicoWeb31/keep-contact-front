import React from 'react';
import './App.css';
import NavBar from './component/layout/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './component/pages/Home';
import About from './component/pages/About';


import ContactState from './context/contact/ContactState';

const App = () => {
  return (

    <ContactState>

      <Router>

        <React.Fragment className="App">
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />

            </Switch>
          </div>

        </React.Fragment>

      </Router>

    </ContactState>
  );
}

export default App;
