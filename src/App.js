import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Login from "./pages/logIn";
import SignUp from "./pages/signUp";
import AdminDashboard from "./pages/adminDashboard";
import ManagerDashboard from "./pages/managerDashboard";
import UserDashboard from "./pages/userDashboard";
import Create from "./pages/create";
import AddRecord from "./pages/addRecord/AddRecord";
// import ProtectedRoute from "./components/protectedRoutes";
import ErrorPage from "./pages/errorPage/ErrorPage";
import "./App.css";

const App = () => {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
        <meta charSet="utf-8" />
        <title>Time Management System</title>
        <meta name="title" content="Time Management System" />
      </Helmet>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/signup/:id" component={SignUp} />
            <Route path="/admindashboard" component={AdminDashboard} />
            <Route path="/managerdashboard" component={ManagerDashboard} />
            <Route path="/userdashboard" component={UserDashboard} />
            <Route path="/addrecord/:id" component={AddRecord} />
            <Route path="/create/:id" component={Create} />
            <Route path="/404" component={ErrorPage} />
            <Redirect from="*" to="/404" />
          </Switch>
        </Router>
      </div>
    </HelmetProvider>
  );
};

export default App;
