import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Beginer from './components/pages/Beginer.js';
import Intermidiate from './components/pages/Intermediate';
import MyCourses from './components/pages/MyCourses';
import Advanced from './components/pages/Advanced';
import LoginPage from './components/pages/loginpage.js'

function App() {
  // const history=useHistory;
  return (
    <>
      <Router >
        <Navbar />
        <Switch>
          <Route path='/' exact component={LoginPage} />
          <Route path='/home' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path="/services/beginer"  component={Beginer} />
          <><Route path="/mycourses" exact>
            <MyCourses></MyCourses>
          </Route><Route path ="/services/beginer" exact>
              <Beginer></Beginer>
            </Route><Route path="/intermediate" exact>
              <Intermidiate></Intermidiate>
            </Route><Route path="/advanced" exact>
              <Advanced></Advanced>
            </Route><Route path="*">
              <p>Invalid Route</p>
            </Route></>
        </Switch>
      </Router>
    </>
  );
}

export default App;
