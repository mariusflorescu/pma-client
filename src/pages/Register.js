import React from "react";
import { Link } from "react-router-dom";

import loginimg from "../assets/login.jpg";

const Register = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setlastName] = React.useState("");
  const [githubUsername, setGithubUsername] = React.useState("");
  const [companyName, setCompanyName] = React.useState("");
  const [website, setWebsite] = React.useState("");

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
            Create your account
          </h3>
          <span className="flex justify-end w-full px-3 pt-12">
            Already have an account? Click{" "}
            <Link
              to="/login"
              className="px-1 text-green-600 hover:cursor-pointer hover:text-green-500"
            >
              here
            </Link>
            to login
          </span>

          {/* Form */}
          <form
            className="grid gap-6 px-20 grid-rows-auto"
            // onSubmit={handleLoginFormSubmit}
          >
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="px-3 py-2 text-gray-600 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400"
              placeholder="Username"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-3 py-2 text-gray-600 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400"
              placeholder="Password"
            />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="px-3 py-2 text-gray-600 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400"
              placeholder="Confirm Password"
            />
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="px-3 py-2 text-gray-600 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400"
              placeholder="First Name"
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
              className="px-3 py-2 text-gray-600 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400"
              placeholder="Last Name"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2 text-gray-600 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400"
              placeholder="Email"
            />
            <input
              type="text"
              value={githubUsername}
              onChange={(e) => setGithubUsername(e.target.value)}
              className="px-3 py-2 text-gray-600 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400"
              placeholder="Github Username"
            />
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="px-3 py-2 text-gray-600 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400"
              placeholder="Company Name"
            />
            <input
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="px-3 py-2 text-gray-600 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400"
              placeholder="Website"
            />

            <button
              type="submit"
              disabled={!username || !password}
              className="flex items-center justify-center px-3 py-2 mx-12 mt-2 space-x-2 text-white transition duration-200 transform bg-green-500 rounded-full hover:scale-105 hover:bg-green-400 focus:outline-none"
            >
              <span className="font-semibold">Register</span>
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
        </div>
        {/* Image */}
        <img src={loginimg} className="max-w-md rounded-r" />
      </div>
    </div>
  );
};

export default Register;
