import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "../utils/authContext";
import useRouter from "../utils/useRouter";

const CompanyMarkup = () => {
  return (
    <div>
      <div class="grid grid-cols-1">
        <div class="relative z-10 col-start-1 row-start-3 text-center px-4 pt-48 pb-1">
          <h2 class="font-semibold  text-2xl leading-7 text-white md:text-3xl">
            Welcome to PMA
          </h2>
          <Link to="/project/create">
            <button className="px-3 py-2 text-white transition duration-200 transform bg-green-500 rounded-full hover:bg-green-400 focus:outline-none">
              Create Project!
            </button>
          </Link>
        </div>
        <div class="col-start-1 row-start-2 px-4 pb-20"></div>
        <div class="flex justify-center row-start-1 flex col-start-1 row-span-3">
          <div class="w-full h-full grid grid-cols-2 grid-rows-1 gap-2">
            <div class="relative col-span-2 ">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt=""
                class="absolute w-full h-full object-cover bg-gray-100 sm:rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StudentMarkup = () => {
  return (
    <div>
      <div class="grid grid-cols-1">
        <div class="relative z-10 col-start-1 row-start-3 text-center px-4 pt-48 pb-1">
          <h2 class="font-semibold  text-2xl leading-7 text-white md:text-3xl">
            Welcome to PMA
          </h2>
          <Link to="/projects/all">
            <button className="px-3 py-2 text-white transition duration-200 transform bg-green-500 rounded-full hover:bg-green-400 focus:outline-none">
              Search for projects
            </button>
          </Link>
        </div>
        <div class="col-start-1 row-start-2 px-4 pb-20"></div>
        <div class="flex justify-center row-start-1 flex col-start-1 row-span-3">
          <div class="w-full h-full grid grid-cols-2 grid-rows-1 gap-2">
            <div class="relative col-span-2 ">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt=""
                class="absolute w-full h-full object-cover bg-gray-100 sm:rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Content = () => {
  const { user } = useAuthState();
  const router = useRouter();

  const [markup, setMarkup] = React.useState("");

  React.useEffect(() => {
    console.log(user);
  }, [user]);

  React.useEffect(() => {
    if (!user) router.push("/login");
  });

  React.useEffect(() => {
    if (user && user.type === "STUDENT") setMarkup("STUDENT");
    else if (user && user.type === "COMPANY") setMarkup("COMPANY");
  }, [user]);

  return (
    <React.Fragment>
      {markup === "STUDENT" && <StudentMarkup />}
      {markup === "COMPANY" && <CompanyMarkup />}
    </React.Fragment>
  );
};

export default Content;
