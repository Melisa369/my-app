import React from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import HomePage from "../HomePage";
import CommentPage from "../CommentPage";
import User from "../FirstTable/User";

export default function BasicExample() {
  return (
    <Router>
      <div className="wrapper">
      <div className="navbar">
        <ul>
          <li>
            <Link to="/homePage">Home</Link>
          </li>
          <li>
            <Link to="/signIn">Sign In</Link>
          </li>
          <li>
            <Link to="/signUp">Sign Up</Link>
          </li>
          <li>
            <Link to="/commentPage">Comments</Link>
          </li>
          <li>
              <Link to="/user">User</Link>
            </li>
        </ul>

        <hr />


        <Switch>
          <Route exact path="/homePage">
            <HomePage />
          </Route>
          <Route path="/signIn">
            <SignIn />
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>
          <Route path="/commentPage">
            <CommentPage />
          </Route>
          <Route path="/user">
            <User />
          </Route>
         
        </Switch>
      </div>
      </div>
    </Router>
  );
}

     function useStyles() {
    throw new Error("Function not implemented.");
  }

