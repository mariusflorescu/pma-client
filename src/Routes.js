import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import IndexPage from "./pages/IndexPage";
import { useAuthState } from "./utils/authContext";
import Sidebar from "./components/Sidebar";
import UserProfile from "./components/UserProfile";
import ViewProjects from "./pages/ViewProjects";
import AddProject from "./pages/AddProject";
import Content from "./pages/Content";
import ViewApplicants from "./pages/ViewApplicants";
import ViewCompanyProjects from "./pages/ViewCompanyProjects";
import ProjectEdit from "./pages/ProjectEdit";
import ViewTasks from "./pages/ViewTasks";
import AddTask from "./pages/AddTask";
import ViewOneProject from "./pages/ViewOneProject";

const IsUserMarkup = () => {
  return (
    <Router>
      <Switch>
        <div className="flex items-center h-screen bg-gradient-to-b from-gray-600 via-gray-700 to-gray-800">
          <div className="container flex mx-auto bg-white shadow rounded-xl">
            {/* SIDEBAR MENU */}
            <Sidebar />

            {/* MAIN CONTENT */}
            <div className="flex-auto px-4 py-6 overflow-y-scroll">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/logout" component={Logout} />
              <Route exact path="/content" component={Content} />
              <Route exact path="/projects/all" component={ViewProjects} />
              <Route exact path="/projects/" component={ViewCompanyProjects} />
              <Route exact path="/project/create" component={AddProject} />
              <Route exact path="/project/:id" component={ViewOneProject}/>
              <Route exact path="/" component={IndexPage} />
              <Route
                exact
                path="/projects/:id/applicants"
                component={ViewApplicants}
              />

              <Route
                exact
                path="/project/info/:id/edit"
                component={ProjectEdit}
              />
              <Route exact path="/project/:id/tasks" component={ViewTasks} />
              <Route exact path="/task/create" component={AddTask} />
            </div>

            {/* RIGHT INFO */}
            <UserProfile />
          </div>
        </div>
      </Switch>
    </Router>
  );
};

const IsNotUserMarkup = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/:not" component={Login} />
        <Route exact path="/" component={IndexPage} />
      </Switch>
    </Router>
  );
};

const Routes = () => {
  const [markup, setMarkup] = React.useState(false);
  const { auth } = useAuthState();

  React.useEffect(() => {
    if (auth) setMarkup(true);
    else setMarkup(false);
  }, [auth]);

  return (
    <React.Fragment>
      {markup ? <IsUserMarkup /> : <IsNotUserMarkup />}
    </React.Fragment>
  );
};

export default Routes;
