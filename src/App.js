import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Register from './Components/Register/Register';
import ComingSoon from './Components/ComingSoon/ComingSoon';

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/volunteer/:volKey">
            <Register></Register>
          </Route>

          <Route path="/comingSoon">
            <ComingSoon />
            </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
