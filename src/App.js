import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import { Helmet } from "react-helmet";
import Home from "./pages/home";
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
          <Route exact path="/" component={Home} />
          <Route exact path="/404" component={ErrorPage} />
          <Redirect from="*" to="/404" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
