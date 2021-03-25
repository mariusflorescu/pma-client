import React from "react";
import useRouter from "../utils/useRouter";
import "./../css/Login.css";

const Login = ({ user, setUser }) => {
  const router = useRouter();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      //do api request
      if (username === "vic" && password === "cerna") {
        setUser({ username, password });
        router.push("/content");
      } else {
        alert("Wrong credentials!");
      }
    } else {
      alert("Please fill the form!");
    }
  };

  return (
    <div>
      <form className="login_form" onSubmit={handleLoginFormSubmit}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={!username || !password}>
          Log in!
        </button>
      </form>
    </div>
  );
};

export default Login;
