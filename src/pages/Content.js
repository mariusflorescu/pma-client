import React from 'react'
import {Link} from "react-router-dom";
import {useAuthState} from "../utils/authContext";
import useRouter from "../utils/useRouter";

const CompanyMarkup = () => {
    return (
        <Link to="/project/create">
            <button
                className="p-2 mb-2 ml-6 text-gray-50 font-semibold transition duration-200 transform bg-black border border-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-black"
            >
                Create new project!
            </button>
        </Link>
    )
}

const StudentMarkup = () => {
    return (
        <h1>Hello</h1>
    )
}

const Content = () => {
    const {user} = useAuthState();
    const router = useRouter();

    const [markup,setMarkup] = React.useState("");

    React.useEffect(() => {
        console.log(user);
    },[user]);

    React.useEffect(() => {
        if(!user) router.push('/login');
    })

    React.useEffect(() => {
        if(user && user.type === 'STUDENT') setMarkup("STUDENT");
        else if(user && user.type === 'COMPANY') setMarkup("COMPANY");
    },[user])

    return (
        <React.Fragment>
            {markup === 'STUDENT' && <StudentMarkup/>}
            {markup === 'COMPANY' && <CompanyMarkup/>}
        </React.Fragment>
    );
}

export default Content;