import React from 'react';
import { Route, Switch ,BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home/Home';
import Projects from './components/Pages/Projects/Projects';



function App() {
  return (
    
    <React.Fragment>
      <Router >
      <Navbar/>
      <Home/>
      {/* <Projects/> */}
      </Router>
     {/* <Router >
       <Navbar/>
       <Switch>
         <Route path={process.env.PUBLIC_URL + '/'} exact component={Home}/>
         <Route path='/Portfolio' component={Projects}/>
         {/* <Route path='/blog' component={Blog}/> */}
       {/* </Switch> */}
       {/* </Router>  */}
      </React.Fragment>
  );
}

export default App;
