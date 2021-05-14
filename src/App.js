import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Login, Signup } from "./pages/";
import { Notification } from "./components";
import * as ROUTES from "./constants/routes";
import { useSelector } from "react-redux";
import { ProtectedRoute, IsUserRedirect } from "./helpers/routes";
import useAuth from "./hooks/use-auth";

function App() {
  const { isOpen: notificationIsOpen, notification } = useSelector(
    (state) => state.notification
  );
  const user = useAuth();
  console.log(user);

  return (
    <Router>
      <Notification
        open={notificationIsOpen}
        type={notification.status}
        title={notification.title}
        message={notification.message}
        iconClass={notification.icon}
      />
      <Switch>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.HOME}
          path={ROUTES.LOGIN}
        >
          <Login />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          exact
          loggedInPath={ROUTES.HOME}
          path={ROUTES.SIGN_UP}
        >
          <Signup />
        </IsUserRedirect>
        <ProtectedRoute user={user} exact path={ROUTES.HOME}>
          <Home />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}

export default App;
