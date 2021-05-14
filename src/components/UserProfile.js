import React from "react";
import { useAuthState } from "../utils/authContext";
import axios from "axios";

const UserProfile = () => {
  const { user } = useAuthState();
  const [namePic, setNamePic] = React.useState("");
  const [description,setDescription] = React.useState("");
  const [open,setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!user) {
      setNamePic("");
    }

    if (user && user.data) {
      if (user.type === "STUDENT") {
        setNamePic(
          (user.data.firstname[0] + user.data.lastname[0]).toUpperCase()
        );
      } else {
        setNamePic((user.data.name[0] + user.data.name[1]).toUpperCase());
      }
    }
  }, [user]);

  React.useEffect(() => {
    if(user && user.data){
      setDescription(user.data.description);
    }
  },[user]);

  const handleSaveStudent = (e) => {
    e.preventDefault();

    const id = user.data.id;

    axios.put('/users/student/description',{id,description})
        .then((res) => {
          console.log(res.data);
          setOpen(false);
        })
        .catch((err) => {
          console.log(err);
        })
  }

  const handleSaveCompany = (e) => {
    e.preventDefault();

    const id = user.data.id;

    axios.put('/users/company/description',{id,description})
        .then((res) => {
          console.log(res.data);
          setOpen(false);
        })
        .catch((err) => {
          console.log(err);
        })
  }

  return (
    <div className="flex-shrink-0 w-64 py-1 pr-1">
      <div className="h-full p-2 bg-gray-50 rounded-r-xl">
        <div className="flex justify-center pt-8 space-x-2">
          <span className="w-28 h-28 bg-green-400 rounded-full flex items-center justify-center text-5xl text-white ">
            {user && namePic}
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-3 p-2 rounded-full w-10 h-10 hover:bg-gray-200 transition duration-100 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={(e) => {e.preventDefault(); setOpen(!open)}}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </div>
        {user && user.type === "STUDENT" ? (
          <>
            <div className="flex justify-center pt-6 space-x-1">
              <span className="font-medium text-gray-600">
                {user && user.data ? user.data.firstname : ""}
              </span>
              <span className="font-medium text-gray-600">
                {user && user.data ? user.data.lastname : ""}
              </span>
            </div>
            <div className="flex justify-center">
              <span className="text-xs font-medium text-gray-600">Student</span>
            </div>
            <div className="flex justify-center">
              <span className="text-xs font-medium text-gray-600">
                {user && user.data ? user.data.github_username : ""}
              </span>
            </div>
            <div className="flex-col justify-center items-center pt-4">
              <label className="flex justify-center font-normal text-sm">
                Who am I?
              </label>
              {user && user.data && !open &&
              (<span className="flex justify-center text-sm text-gray-600 pt-4">{description}</span>)
              }
              {user && user.data && open && (
                  <React.Fragment>
                    <textarea
                        placeholder="Add description here..."
                        value={description ? description : ""}
                        onChange={(e) => setDescription(e.target.value)}
                        className="rounded-lg mt-2 pl-2 pt-1 pb-1 pr-2 w-full h-20 text-gray-600 bg-gray-50 border-2 border-gray-400 border-opacity-25 focus:outline-none"
                    />
                    <button
                        className="w-full flex justify-center px-3 py-2 mt-2 space-x-2 text-white transition duration-200 transform bg-green-500 rounded-full hover:scale-90 hover:bg-green-400 focus:outline-none"
                        onClick={handleSaveStudent}>
                      Save
                    </button>
                  </React.Fragment>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-center pt-6 space-x-1">
              <span className="font-semibold text-gray-600">
                {user && user.data ? user.data.name : ""}
              </span>
            </div>
            <div className="flex justify-center">
              <span className="font-normal text-gray-600">
                {user && user.data ? user.data.website : ""}
              </span>
            </div>
            <div className="flex-col justify-center pt-4">
              <label className="flex justify-center font-normal text-sm">
                More about us
              </label>
              {user && user.data && !open &&
              (<span className="flex justify-center text-sm text-gray-600 pt-4">{description}</span>)
              }
              {user && user.data && open && (
                  <React.Fragment>
                    <textarea
                        placeholder="Add description here..."
                        value={description ? description : ""}
                        onChange={(e) => setDescription(e.target.value)}
                        className="rounded-lg mt-2 pl-2 pt-1 pb-1 pr-2 w-full h-20 text-gray-600 bg-gray-50 border-2 border-gray-400 border-opacity-25 focus:outline-none"
                    />
                    <button
                        className="w-full flex justify-center px-3 py-2 mt-2 space-x-2 text-white transition duration-200 transform bg-green-500 rounded-full hover:scale-90 hover:bg-green-400 focus:outline-none"
                        onClick={handleSaveCompany}>
                      Save
                    </button>
                  </React.Fragment>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
