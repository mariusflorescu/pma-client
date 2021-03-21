import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/" component={Home}/>
      </Switch>
    </Router>
  );
}

export default Routes;