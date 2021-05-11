import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import useRouter from "../utils/useRouter";
import {useAuthDispatch,useAuthState} from '../utils/authContext'

import loginimg from "../assets/login.jpg";

const Login = () => {
  const {auth} = useAuthState()
  const router = useRouter();
  const dispatch = useAuthDispatch();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState({});

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    if (username && password) {
      try {
        axios.post("/login", { username, password })
            .then((res) => {
              let pl={
                type:"",
                data:res.data
              };
              if(res.data.firstname) pl.type="STUDENT";
              else pl.type="COMPANY";
              dispatch({type:"LOGIN",payload:pl});
              router.push("/");
            })
            .catch((err) => console.log(err));

      } catch (err) {
        setErrors(err.response.data);
      }
    } else {
      alert("Please fill the form!");
    }
  };

  React.useEffect(() => {
    if(auth === true) router.push('/');
  },[auth,router]);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      {/* BOX */}
      <div className="grid grid-cols-2 bg-white border border-gray-300 rounded">
        <div className="py-12">
          {/* Title */}
          <h1 className="text-3xl font-bold text-center text-gray-800">PMA</h1>

          {/* Divider */}
          <div className="w-full h-px my-12 bg-gray-300"></div>

          {/* Message */}
          <h3 className="pb-12 text-xl font-semibold text-center text-gray-600">
            Log in to your account
          </h3>

          {/* Form */}
          <form
            className="grid gap-6 px-20 grid-rows-auto"
            data-testid="login-form"
            onSubmit={handleLoginFormSubmit}
          >
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="px-3 py-2 text-gray-600 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400"
              placeholder="Username..."
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-3 py-2 text-gray-600 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400"
              placeholder="Password..."
            />
            {errors.password && (
              <small className="text-xs text-red-500">
                Invalid credentials
              </small>
            )}

            <button
              type="submit"
              data-testid="login-button"
              disabled={!username || !password}
              className="flex items-center justify-center px-3 py-2 mx-12 mt-2 space-x-2 text-white transition duration-200 transform bg-green-500 rounded-full hover:scale-105 hover:bg-green-400 focus:outline-none"
            >
              <span className="font-semibold">Login</span>
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
            </button>
          </form>
          {/* new to pma */}
          <span className="flex justify-end w-full px-3 pt-12">
            Not a PMA user? Click{" "}
            <Link
              to="/register"
              className="px-1 text-green-600 hover:cursor-pointer hover:text-green-500"
            >
              here
            </Link>
            to register
          </span>
        </div>
        {/* Image */}
        <img alt="" src={loginimg} className="max-w-md rounded-r" />
      </div>
    </div>
  );
};

export default Login;
