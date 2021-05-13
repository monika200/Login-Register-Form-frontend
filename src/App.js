import React from 'react';
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import Navbar from './Router/Navbar';
import Start from './Router/Start';
import Home from './Router/Home';
import Login from './Router/Login';
import Register from './Router/Register';
import Forgot from './Router/Forgot';
import Reset from './Router/Reset';
function App() {
  
  return (
    <div>
    <BrowserRouter>
    <Navbar />
     <Switch>
       <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/forgot" component={Forgot} />
        <Route path="/reset" component={Reset} />
        <Route path="/home" component= {Home} />
        <Route path="/" component= {Start} />
        </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;

