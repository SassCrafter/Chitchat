import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Login } from "./pages/";
import * as ROUTES from "./constants/routes";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.LOGIN} render={() => <Login />} />
        <Route exact path={ROUTES.HOME} render={() => <Home />} />
      </Switch>
    </Router>
  );
}

export default App;
