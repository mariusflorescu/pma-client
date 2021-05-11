import React from 'react'
import useRouter from "../utils/useRouter";
import {useAuthDispatch} from "../utils/authContext";
import axios from "axios";

const Logout = () => {
    const router = useRouter();
    const dispatch = useAuthDispatch();

    React.useEffect(()=>{
        axios.get('/logout')
            .then(() => {
                dispatch({ type: "LOGOUT" });
                router.push('/login');
            })
            .catch((err) => console.log(err));
    },[router]);

    return (<></>);
}

export default Logout;