import { useEffect } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { Chat, Login, Signup, ResetPassword } from "./pages/";
import { Notification } from "./components";
import * as ROUTES from "./constants/routes";
import { useSelector, useDispatch } from "react-redux";
import { ProtectedRoute, IsUserRedirect } from "./helpers/routes";
import useAuth from "./hooks/use-auth";
import history from "./helpers/history";
import { getUser } from "./store/user-actions";

function App() {
  const dispatch = useDispatch();
  const { isOpen: notificationIsOpen, notification } = useSelector(
    (state) => state.notification
  );
  const authUser = useAuth();
  const dbUser = useSelector((state) => state.user);
  console.log(dbUser);

  useEffect(() => {
    document.body.classList.add(`theme-${dbUser.theme}`);
    console.log(authUser);
    authUser && dispatch(getUser(authUser.uid));
  }, [authUser]);

  return (
    <Router history={history}>
      <Notification
        open={notificationIsOpen}
        type={notification.status}
        title={notification.title}
        message={notification.message}
        iconClass={notification.icon}
      />
      <Switch>
        <IsUserRedirect
          user={authUser}
          loggedInPath={ROUTES.HOME}
          path={ROUTES.LOGIN}
        >
          <Login />
        </IsUserRedirect>
        <IsUserRedirect
          user={authUser}
          exact
          loggedInPath={ROUTES.HOME}
          path={ROUTES.SIGN_UP}
        >
          <Signup />
        </IsUserRedirect>
        <Route path={ROUTES.RESET_PASSWORD}>
          <ResetPassword />
        </Route>
        <ProtectedRoute user={authUser} exact path={ROUTES.HOME}>
          <Chat />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}

export default App;
