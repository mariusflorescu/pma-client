import React from 'react';
import axios from 'axios';
import {useAuthState} from "../utils/authContext";
import useRouter from "../utils/useRouter";

function ViewProject(){
    const router = useRouter()
    const {user} = useAuthState();

    const [projects,setProjects] = React.useState({});
    const [errors,setErrors] = React.useState("");

    React.useEffect(() => {
        if(user && user.type){
            if(user.type !== "STUDENT") router.push('/')
        }
    },[user,router])

    React.useEffect(() => {
        const fetchProjects = async () => {
            try{
                const res = await axios.get('/projects/all');

                if(res && res.data) {
                    setProjects(res.data);
                }
            }catch(e){
                setErrors(e.response.data);
            }
        }

        fetchProjects().then(() => console.log('Projects get'));
    },[]);

    const handleApplyToProject = (id) => {
        console.log(id);
        axios.get(`/projects/${id}/apply`)
            .then((res) => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err.response.data.error);
                setErrors(err.response.data.error)
            });
    }


    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Company
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Project name
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th scope="col" className="relative px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {projects && projects.length && projects.map((project) => (
                                <tr key={project.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10">
                                                <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt=""/>
                                            </div>
                                            <div className="ml-4 font-medium text-sm">
                                                {project.username}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-600 text-sm">
                                        {project.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {project.status === "open" ? (
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                              Open
                                            </span>
                                        ) : (
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                              Closed
                                            </span>
                                        )}
                                    </td>
                                    {project.status === "open" && (
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a className="transition duration-100 text-green-600 hover:text-green-900 cursor-pointer" onClick={(e) => {
                                                e.preventDefault();
                                                handleApplyToProject(project.id)
                                            }}>APPLY</a>
                                        </td>
                                    )}
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewProject;