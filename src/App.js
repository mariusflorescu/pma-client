import Routes from "./Routes";
import React from "react";

function App() {
  const [user, setUser] = React.useState(undefined);
  return <Routes user={user} setUser={setUser} />;
}

export default App;
