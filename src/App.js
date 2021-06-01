import React, { createContext,useReducer } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/pages/About'
import Service from './components/pages/Service'
import{Route, Switch} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
import '../node_modules/owl.carousel/dist/assets/owl.theme.default.css';

function App() {
  
  return (
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route exact path='/about'>
        <About/>
      </Route>
      <Route exact path='/service'>
        <Service/>
      </Route>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route exact path='/'>
        <Home/>
      </Route>
    {/* <Route>
      <Errorpage />
    </Route> */}
  </Switch>
  )
}

export default App;
