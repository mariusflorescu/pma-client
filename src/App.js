import Routes from "./Routes";
import React from "react";
import { AuthProvider } from "./utils/authContext";
import "./assets/css.css";

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
