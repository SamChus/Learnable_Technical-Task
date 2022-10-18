import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signUp";

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path={"/"}>
            <LandingPage />
          </Route>
          <Route path={"/signUp"}>
            <SignUpPage />
          </Route>
          <Route path={"/login"}>
            <LoginPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
