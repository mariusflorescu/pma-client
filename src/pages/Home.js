import React from "react";
import useRouter from "../utils/useRouter";
import "./../css/Home.css";

const Home = () => {
  const router = useRouter();

  const goToLoginPage = () => {
    router.push("/login");
  };
  const goToRegisterPage = () => {
    router.push("/register");
  };

  return (
    <div className="home_container">
      <h1>Hello from home page!</h1>
      <button onClick={goToLoginPage}>Login</button>
      <button onClick={goToRegisterPage}>Register</button>
    </div>
  );
};

export default Home;
