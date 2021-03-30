import Routes from "./Routes";
import React from "react";
import {AuthProvider} from './utils/authContext'

function App() {
  return (
    <AuthProvider>
      <Routes/>
    </AuthProvider>
  );
}

export default App;
