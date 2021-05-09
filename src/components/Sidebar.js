import React from 'react';
import {Link} from "react-router-dom";
import {useAuthState} from '../utils/authContext'

const Sidebar = () => {
    const {user} = useAuthState();
    const [namePic,setNamePic] = React.useState("");

    React.useEffect(() => {
        if(user && user.type==="STUDENT" && user.data){
            setNamePic(user.data.firstname[0]+user.data.lastname[0]);
        }
    },[user])

    return (
        <div className="flex-shrink-0 w-64 py-1 pl-1">
            <div className="p-2 bg-gray-50 rounded-l-xl">
                {/* USER INFO */}
                <div className="flex pt-4 pl-4 space-x-2">
                    <span className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center font-bold text-white">{user && namePic}</span>
                    <div className="flex flex-col">
                        <span className="font-semibold text-gray-600">{user && user.type === 'STUDENT' ? (user.data.firstname +" "+ user.data.lastname) : (user.data.name)}</span>
                        <small className="text-gray-500">{user && user.type === 'STUDENT' ? ("Student") : ("Company")}</small>
                    </div>
                </div>

                {/* MENU */}
                <ul className="flex flex-col pl-2 mt-6 space-y-32 font-semibold text-gray-400 space-between">

                    <div className="flex flex-col space-y-3">

                        <Link to="/">
                            <li className="flex items-center px-2 py-1 space-x-2 transition duration-200 border border-transparent rounded-lg hover:bg-white hover:text-green-700">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                <span>Home</span>
                            </li>
                        </Link>

                        <Link to="/projects">
                            <li className="flex items-center px-2 py-1 space-x-2 transition duration-200 border border-transparent rounded-lg hover:bg-white hover:text-green-700">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>Projects</span>
                            </li>
                        </Link>

                        <Link to="/tasks">
                            <li className="flex items-center px-2 py-1 space-x-2 transition duration-200 border border-transparent rounded-lg hover:bg-white hover:text-green-700">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                                <span>Tasks</span>
                            </li>
                        </Link>

                    </div>


                    <Link to="/profile">
                        <li className="flex items-center px-2 py-1 space-x-2 transition duration-200 border border-transparent rounded-md hover:bg-green-700 hover:text-white">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span>My profile</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;