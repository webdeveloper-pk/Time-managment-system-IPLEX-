import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import { Helmet } from "react-helmet";
import Login from "./pages/logIn";
import SignUp from "./pages/signUp";
import AdminDashboard from "./pages/adminDashboard";
import ManagerDashboard from "./pages/managerDashboard";
import UserDashboard from "./pages/userDashboard";
import Create from "./pages/create";
import ProtectedRoute from "./components/protectedRoutes";
import ErrorPage from "./pages/errorPage/ErrorPage";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>Time Management System</title>
        <meta name="title" content="Time Management System" />
      </Helmet> */}
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route  path="/signup" component={SignUp} />
          <ProtectedRoute
            path="/admindashboard"
            component={AdminDashboard}
          />
          <ProtectedRoute
            path="/managerdashboard"
            component={ManagerDashboard}
          />
          <ProtectedRoute
            path="/userdashboard"
            component={UserDashboard}
          />
          <ProtectedRoute exact path="/create" component={Create} />
          <Route exact path="/404" component={ErrorPage} />
          <Redirect from="*" to="/404" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
