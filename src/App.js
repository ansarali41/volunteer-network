import React, { createContext, useState } from 'react';
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
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import RegistrationList from './Components/RegistrationList/RegistrationList';
import Admin from './Components/Admin/Admin';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({})
  return (
    <UserContext.Provider className="container" value={[user, setUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          <PrivateRoute path="/volunteer/:volKey">
            <Register></Register>
          </PrivateRoute>

          <PrivateRoute path="/registrationList">
            <RegistrationList></RegistrationList>
          </PrivateRoute>
          <Route path="/admin">
            <Admin />
          </Route>

          <Route path="/comingSoon">
            <ComingSoon />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
