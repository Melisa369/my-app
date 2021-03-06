import './App.css'
import { useTranslation } from "react-i18next";
import LanguageSelect from "../languageSelect";
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
  const { t } = useTranslation();
  return (
    <Router>
     
      <div className="wrapper">
      <div className="navbar">
      <div className="language-select">
        <LanguageSelect />
      </div>
        <ul>
          <li>
            <Link to="/">{t("home")}</Link>
          </li>
          <li>
            <Link to="/sign-In">{t("sign_in")}</Link>
          </li>
          <li>
            <Link to="/sign-Up">{t("sign_up")}</Link>
          </li>
          <li>
            <Link to="/address-Card">{t("address")}</Link>
          </li>
          <li>
            <Link to="/comment-Page">{t("comments")}</Link>
          </li>
          <li>
              <Link to="/comment-Table">{t("comment_table")}</Link>
            </li>
            <li>
              <Link to="/user-Table">{t("user_table")}</Link>
            </li>
            <li>
              <Link to="/map-Address">{t("map")}</Link>
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

