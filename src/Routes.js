import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import IndexPage from "./pages/IndexPage";
import Content from "./pages/Content";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/content">
          <Content />
        </Route>
        <Route exact path="/register">
          <Register/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route path="/">
          <IndexPage/>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
