import React from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import classNames from 'classnames'

import useRouter from '../utils/useRouter';

import Success from '../components/Success'

import loginimg from "../assets/login.jpg";
import {useAuthState} from "../utils/authContext";

const Register = () => {
  const {auth} = useAuthState();
  const router = useRouter();
  //
  const [step,setStep] = React.useState(1);
  const [accType,setAccType] = React.useState("");

  //General user related data
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  //Student related data
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setlastname] = React.useState("");
  const [github_username, setGithub_username] = React.useState("");

  //Company related data
  const [companyName, setCompanyName] = React.useState("");
  const [website, setWebsite] = React.useState("");

  //errors
  const [errors,setErrors] = React.useState([]);

  //funcs
  const changeStep = (e,value) => {
    e.preventDefault();
    setStep(value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if(accType === 'STUDENT'){
        await axios.post('/register',{
          type: accType,
          data:{
            username,
            email,
            password,
            confirmPassword,
            firstname,
            lastname,
            github_username
          }
        })
      } else if(accType === 'COMPANY'){
        await axios.post('/register', {
          type: accType,
          data:{
            username,
            email,
            password,
            confirmPassword,
            name:companyName,
            website
          }
        })
      }

      setStep(3); //success state
    } catch (err) {
      console.log(err.response.data);
      setErrors(err.response.data);

      if(err.response.data.username || err.response.data.confirmPassword || err.response.data.password || err.response.data.confirmPassword){
        if(err.response.data.confirmPassword) setConfirmPassword("")
        if(err.response.data.username === 'Username taken') setUsername("")
        if(err.response.data.email === 'Email taken') setEmail("" )
        setStep(1);
      } 
    }
  }

  React.useEffect(() => {
    if(auth === true) router.push('/');
  },[auth,router]);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      {/* BOX */}
      <div className="grid grid-cols-2 bg-white border border-gray-300 rounded">
        {/* Image */}
        <img alt="" src={loginimg} className="max-w-md rounded-l" />
        <div className="py-6">
          {/* Title */}
          <h1 className="text-3xl font-bold text-center text-gray-800">PMA</h1>

          {/* Divider */}
          <div className="w-full h-px my-6 bg-gray-300"></div>

          {/* Message */}
          {step === 1 && (
            <h3 className="pb-12 text-xl font-semibold text-center text-gray-600">
              Create your account
            </h3>
          )}

          {step === 2 && (
            <button
              className="p-2 mb-2 ml-6 text-gray-700 transition duration-200 transform bg-white border border-gray-400 rounded hover:-translate-x-2 focus:outline-none focus:ring-1 focus:ring-black"
              onClick={(e) => changeStep(e,1)}
            >
              <svg className="w-6 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
          )}

          {/* Form */}
          <form
            className="grid gap-6 px-20 grid-rows-auto"
            onSubmit={handleSubmit}
          >
            {step === 1 && (
              <>
                  <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={classNames("px-3 py-2 text-gray-600 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400", {"border-red-500 placeholder-red-500" : errors.username})}
                  placeholder={errors.username ? (errors.username) : ("Username...")}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={classNames("px-3 py-2 text-gray-600 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400", {"border-red-500 placeholder-red-500" : errors.email})}
                  placeholder={errors.email ? (errors.email) : ("Email...")}
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={classNames("px-3 py-2 text-gray-600 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400", {"border-red-500 placeholder-red-500" : errors.password})}
                  placeholder={errors.password ? (errors.password) : ("Password...")}
                />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={classNames("px-3 py-2 text-gray-600 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400", {"border-red-500 placeholder-red-500" : errors.confirmPassword})}
                  placeholder={errors.confirmPassword ? (errors.confirmPassword) : ("Confirm password...")}
                />
                <button
                onClick={(e) => changeStep(e,2)}
                className="flex items-center justify-center px-3 py-2 mx-12 mt-2 space-x-2 text-white transition duration-200 transform bg-black rounded-full hover:translate-x-2.5 hover:bg-gray-700 focus:outline-none"
                >
                <span className="font-semibold">Next</span>
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>     
              </>
            )}

            {step === 2 && (
                <>
                  <h4 className="mt-2 font-semibold text-gray-600 text-md">Select your account type:</h4>
                  <div className="flex px-6 space-x-12">
                    <button
                      onClick={(e) => {e.preventDefault(); setAccType("STUDENT")}}
                      className={classNames("px-3 py-2 font-semibold text-white transition duration-200 transform bg-black rounded-full hover:scale-90 hover:bg-gray-700 focus:outline-none", {"transform scale-90 bg-gray-700" : accType === "STUDENT"})}
                      >
                        Student
                    </button>   

                    <button
                      onClick={(e) => {e.preventDefault();setAccType("COMPANY")}}
                      className={classNames("px-3 py-2 font-semibold text-white transition duration-200 transform bg-black rounded-full hover:scale-90 hover:bg-gray-700 focus:outline-none", {"transform scale-90 bg-gray-700" : accType === "COMPANY"})}
                      >
                        Company
                    </button>
                  </div>

                { accType === 'STUDENT' && (
                  <>
                        <input
                        type="text"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        className={classNames("px-3 py-2 text-gray-600 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400", {"border-red-500 placeholder-red-500" : errors.firstname})}
                        placeholder={errors.firstname ? (errors.firstname) : ("Firstname...")}
                      />
                      <input
                        type="text"
                        value={lastname}
                        onChange={(e) => setlastname(e.target.value)}
                        className={classNames("px-3 py-2 text-gray-600 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400", {"border-red-500 placeholder-red-500" : errors.lastname})}
                        placeholder={errors.lastname ? (errors.lastname) : ("Lastname...")}
                      />
                      
                      <input
                        type="text"
                        value={github_username}
                        onChange={(e) => setGithub_username(e.target.value)}
                        className={classNames("px-3 py-2 text-gray-600 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400", {"border-red-500 placeholder-red-500" : errors.github_username})}
                        placeholder={errors.github_username ? (errors.github_username) : "Github username..."}
                      />    
                  </>
                )}
              {accType === 'COMPANY' && (
                <>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className={classNames("px-3 py-2 text-gray-600 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400", {"border-red-500 placeholder-red-500" : errors.name})}
                    placeholder={errors.name ? (errors.name) : ("Company name...")}
                  />
                  <input
                    type="text"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className={classNames("px-3 py-2 text-gray-600 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400", {"border-red-500 placeholder-red-500" : errors.website})}
                    placeholder={errors.website ? (errors.website) : ("Website...")}
                  />
                  {/* THIS IS MEANT TO BE HERE JUST TO KEEP THE SAME HEIGHT DESPITE THE ACC TYPE CHOSEN */}
                  <input className="invisible px-3 py-2 text-gray-600 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400"/>
                </>
              )}

              {accType && (
                  <button
                  type="submit"
                  className="flex items-center justify-center px-3 py-2 mx-12 mt-2 space-x-2 text-white transition duration-200 transform bg-green-500 rounded-full hover:scale-105 hover:bg-green-400 focus:outline-none"
                >
                  <span className="font-semibold">Register</span>
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                    </svg>
                </button>
              )}     
              </>
            )}


          </form>

          {step !== 3 && (
            <span className="flex justify-end w-full px-3 pt-6">
              Already have an account? Click{" "}
              <Link
                to="/login"
                className="px-1 text-green-600 hover:cursor-pointer hover:text-green-500"
              >
                here
              </Link>
              to login
            </span>
          )}

          {step === 3 && (
            <Success/>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;