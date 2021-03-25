import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Content from "./pages/Content";

const Routes = ({ user, setUser }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/content">
          <Content user={user} />
        </Route>
        <Route exact path="/register">
          <Register user={user} setUser={setUser} />
        </Route>
        <Route exact path="/login">
          <Login user={user} setUser={setUser} />
        </Route>
        <Route path="/">
          <Home user={user} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
