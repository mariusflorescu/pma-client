import React from 'react'
import useRouter from "../utils/useRouter";
import {useAuthState} from '../utils/authContext'

const ViewOneProject = () => {
    const router = useRouter();
    const {auth} = useAuthState();

    React.useEffect(() => {
        if(!auth) router.push('/');
    },[auth]);


    return (
        <></>
    )
}

export default ViewOneProject