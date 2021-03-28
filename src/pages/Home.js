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
    <div className="relative w-full h-screen">
      <div className="container relative flex flex-col justify-center h-screen mx-auto">
          <h1 className="text-5xl font-semibold text-gray-700">
            <span className="font-bold text-green-700 text-9xl">PMA</span>,
            we unite <span className="px-2 text-indigo-400 bg-black">students</span> and <span className="px-2 text-red-400 bg-black">companies</span> together.
          </h1>

          <div className="flex items-center justify-center w-full mt-12 space-x-8">
            <button 
            onClick={goToLoginPage}
            className="px-8 py-3 text-lg font-semibold text-white transition duration-200 bg-black rounded-lg hover:bg-gray-700 focus:outline-none"
            >
              Login
            </button>

            <span className="font-semibold">or</span>

            <button 
            onClick={goToRegisterPage}
            className="px-8 py-3 text-lg font-semibold text-white transition duration-200 bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none"
            >
              Register
            </button>
          </div>

      </div> 

      <svg className="absolute -top-24 -left-24 w-96 h-96" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#6EE7B7" d="M54.1,-65.2C68.1,-52.8,76,-33.8,77.8,-15C79.5,3.8,75.2,22.3,66.7,39.8C58.1,57.3,45.5,73.8,28.5,81.3C11.5,88.8,-9.9,87.4,-28.3,79.8C-46.8,72.3,-62.3,58.6,-72.9,41.5C-83.5,24.3,-89.3,3.8,-85.8,-15C-82.3,-33.8,-69.6,-50.8,-53.8,-62.9C-37.9,-74.9,-19,-82,0.5,-82.7C20.1,-83.3,40.1,-77.5,54.1,-65.2Z" transform="translate(100 100)" />
      </svg>

      <svg className="absolute -bottom-48 left-24 w-96 h-96" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#A5B4FC" d="M44.2,-65.6C58.7,-59.5,72.7,-49.5,78.1,-36.1C83.4,-22.7,80.2,-5.8,77.3,10.8C74.4,27.4,71.9,43.8,62.6,54C53.4,64.3,37.3,68.5,21.3,73.7C5.3,78.9,-10.8,85.1,-24.8,82.1C-38.8,79.1,-50.8,66.7,-62,53.8C-73.2,40.8,-83.5,27.1,-85.2,12.5C-86.8,-2.1,-79.8,-17.6,-72.6,-33C-65.4,-48.4,-58,-63.7,-45.9,-70.8C-33.8,-78,-16.9,-77.1,-1,-75.6C14.9,-74,29.8,-71.7,44.2,-65.6Z" transform="translate(100 100)" />
      </svg>

      <svg className="absolute -right-36 top-2 w-96 h-96" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FCD34D" d="M44.8,-56.1C55.5,-44.4,59.9,-27.9,65.3,-9.7C70.7,8.5,77.1,28.3,70.2,40.8C63.3,53.3,43.2,58.3,24.6,63.1C6,67.9,-11,72.5,-28.3,69.6C-45.5,66.8,-63,56.7,-72.2,41.4C-81.4,26.1,-82.2,5.7,-77.7,-12.6C-73.1,-30.9,-63.2,-47.2,-49.3,-58.4C-35.5,-69.5,-17.7,-75.6,-0.4,-75.2C17,-74.8,34.1,-67.8,44.8,-56.1Z" transform="translate(100 100)" />
      </svg>

      <svg className="absolute right-16 -bottom-12 w-96 h-96" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#93C5FD" d="M46.3,-55.1C58.6,-44.8,66.3,-28.9,69.3,-12.2C72.3,4.6,70.7,22.3,63.2,37.7C55.8,53.2,42.4,66.5,26.8,71.3C11.1,76,-6.9,72.2,-21.1,64.3C-35.3,56.4,-45.8,44.4,-57.3,30.3C-68.8,16.2,-81.3,-0.2,-82,-17.5C-82.6,-34.9,-71.3,-53.2,-55.7,-62.9C-40,-72.6,-20,-73.6,-1.5,-71.8C17,-70,34,-65.4,46.3,-55.1Z" transform="translate(100 100)" />
      </svg>
    </div>
  );
};

export default Home;
