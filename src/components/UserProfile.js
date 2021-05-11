import React from "react";
import { useAuthState } from "../utils/authContext";

const UserProfile = () => {
  const { user } = useAuthState();
  const [namePic, setNamePic] = React.useState("");

  React.useEffect(() => {
    if(!user){
      setNamePic("");
    }

    if (user && user.data) {
      if(user.type==='STUDENT'){
        setNamePic((user.data.firstname[0] + user.data.lastname[0]).toUpperCase());
      } else {
        setNamePic((user.data.name[0]+user.data.name[1]).toUpperCase());
      }
    }
  }, [user]);

  return (
    <div className="flex-shrink-0 w-64 py-1 pr-1">
      <div className="h-full p-2 bg-gray-50 rounded-r-xl">
        <div className="flex justify-center pt-8 space-x-2">
          <span className="w-28 h-28 bg-green-400 rounded-full flex items-center justify-center text-5xl text-white ">
            {user && namePic}
          </span>
        </div>
        {user && user.type === "STUDENT" ? (
          <>
            <div className="flex justify-center pt-6 space-x-1">
              <span className="font-medium text-gray-600">
                {(user && user.data )? user.data.firstname : ("")}
              </span>
              <span className="font-medium text-gray-600">
                {(user && user.data )? user.data.lastname : ("")}
              </span>
            </div>
            <div className="flex justify-center">
              <span className="text-xs font-medium text-gray-600">Student</span>
            </div>
            <div className="flex justify-center">
              <span className="text-xs font-medium text-gray-600">
                {(user && user.data )? user.data.github_username : ("")}
              </span>
            </div>
            <div className="flex-col justify-center pt-4">
              <label className="flex justify-center font-normal text-sm">
                Who am I?
              </label>
              <textarea
                placeholder="Add description here..."
                className="rounded-lg mt-2 pl-2 pt-1 pb-1 pr-2 w-full h-20 text-gray-600 bg-gray-50 border-2 border-gray-400 border-opacity-25 focus:outline-none"
              />
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-center pt-8">
              <span className="font-semibold text-gray-600">
                {(user && user.data )? user.data.name : ("")}
              </span>
            </div>
            <div className="flex justify-center">
              <span className="font-normal text-gray-600">
                {(user && user.data )? user.data.website : ("")}
              </span>
            </div>
            <div className="flex-col justify-center pt-4">
              <label className="flex justify-center font-normal text-sm">
                More about us
              </label>
              <textarea
                placeholder="Add description here..."
                className="rounded-lg mt-2 mx-2 pl-2 pt-1 pb-1 pr-2 w-full h-20 text-gray-600 bg-gray-50 border-2 border-gray-400 border-opacity-25 focus:outline-none"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
