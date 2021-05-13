import React from 'react';

import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import Start from './Start';
import Home from './Home';
import Login from './Login';
import Register from './Register';

function Application() {
  
  return (
    <BrowserRouter>
      <div className="">
     
        <nav className="navbar bg-dark">
           <i>
            <Link to="/home" className="text-white text-uppercase float-left">Home</Link>
            <Link to="/register" className="text-white text-uppercase float-left">Register</Link>
          </i>
          <i>
            <Link to="/login" className="text-white text-uppercase float-right ">Login</Link>
          </i>
        </nav>
        <div className="container">
          <Switch>
       
            <Route path="/register" component={Register} />
           <Route path="/login" component={Login} />
            <Route path="/home">
              <center>
                <Home/>
              </center>
            </Route>
            <Route path="/" component= {Start} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Application;
