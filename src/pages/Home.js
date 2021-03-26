import React from "react";
import useRouter from "../utils/useRouter";

const Home = () => {
  const router = useRouter();

  const goToLoginPage = () => {
    router.push("/login");
  };
  const goToRegisterPage = () => {
    router.push("/register");
  };

  return (
    <div className="flex flex-col">
      <h1>Hello from home page!</h1>
      <button onClick={goToLoginPage}>Login</button>
      <button onClick={goToRegisterPage}>Register</button>
    </div>
  );
};

export default Home;
