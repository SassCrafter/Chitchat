import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Login, Signup } from "./pages/";
import * as ROUTES from "./constants/routes";
import { useAuth } from "./context/AuthContext";

function App() {
  const { user } = useAuth();
  console.log(user);
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.LOGIN} render={() => <Login />} />
        <Route path={ROUTES.SIGN_UP} render={() => <Signup />} />
        <Route exact path={ROUTES.HOME} render={() => <Home />} />
      </Switch>
    </Router>
  );
}

export default App;
