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
            <Link to="/homePage">Home</Link>
          </li>
          <li>
            <Link to="/signIn">Sign In</Link>
          </li>
          <li>
            <Link to="/signUp">Sign Up</Link>
          </li>
          <li>
            <Link to="/addressCard">Address</Link>
          </li>
          <li>
            <Link to="/commentPage">Comments</Link>
          </li>
          <li>
              <Link to="/commentTable">Comment Table</Link>
            </li>
            <li>
              <Link to="/userTable">User Table</Link>
            </li>
            <li>
              <Link to="/mapAddress">Map</Link>
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
          <Route path="/addressCard">
            <AddressCard />
          </Route>
          <Route path="/commentPage">
            <CommentPage />
          </Route>
          <Route path="/commentTable">
            <CommentTable />
          </Route>
          <Route path="/userTable">
            <UserTable />
          </Route>
          <Route path="/mapAddress">
            <MapAddress />
          </Route>
        </Switch>
      </div>
      </div>
    </Router>
  );
}

