import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/CustomNavbar';


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Navbar />
        <Route exact path = "/" component={Home} />
        {/* <Route path ="/contact" component={Contact}/> */}
      </div>
    </Router>
  );
}

export default App;
