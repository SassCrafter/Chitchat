import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Login, Signup } from "./pages/";
import { Notification } from "./components";
import * as ROUTES from "./constants/routes";
import { useSelector } from "react-redux";

function App() {
  const { isOpen: notificationIsOpen, notification } = useSelector(
    (state) => state.notification
  );
  console.log(notificationIsOpen, notification);
  return (
    <Router>
      <Notification
        open={notificationIsOpen}
        type={notification.type}
        title={notification.title}
        message={notification.message}
        iconClass={notification.icon}
      />
      <Switch>
        <Route path={ROUTES.LOGIN} render={() => <Login />} />
        <Route path={ROUTES.SIGN_UP} render={() => <Signup />} />
        <Route exact path={ROUTES.HOME} render={() => <Home />} />
      </Switch>
    </Router>
  );
}

export default App;
