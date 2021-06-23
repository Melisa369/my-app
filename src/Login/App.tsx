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
import CommentTable from "../FirstTable/CommentTable";
import UserTable from "../SecondTable/UserTable";
import AddressCard from "../AddressCard";
import MapAddress from "../Map/MapAddress";




export default function BasicExample() {
  return (
    <Router>
      <div className="wrapper">
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sign-In">Sign In</Link>
          </li>
          <li>
            <Link to="/sign-Up">Sign Up</Link>
          </li>
          <li>
            <Link to="/address-Card">Address</Link>
          </li>
          <li>
            <Link to="/comment-Page">Comments</Link>
          </li>
          <li>
              <Link to="/comment-Table">Comment Table</Link>
            </li>
            <li>
              <Link to="/user-Table">User Table</Link>
            </li>
            <li>
              <Link to="/map-Address">Map</Link>
            </li> 
        </ul>

        <hr />


        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/sign-In">
            <SignIn />
          </Route>
          <Route path="/sign-Up">
            <SignUp />
          </Route>
          <Route path="/address-Card">
            <AddressCard />
          </Route>
          <Route path="/comment-Page">
            <CommentPage />
          </Route>
          <Route path="/comment-Table">
            <CommentTable />
          </Route>
          <Route path="/user-Table">
            <UserTable />
          </Route>
          <Route path="/map-Address">
            <MapAddress />
          </Route>
        </Switch>
      </div>
      </div>
    </Router>
  );
}

