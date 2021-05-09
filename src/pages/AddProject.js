import React from 'react'
import axios from "axios";
import useRouter from "../utils/useRouter";

const AddProject = () => {
    const router = useRouter();

    const [name,setName] = React.useState("");
    const [description,setDescription] = React.useState("");
    const [status,setStatus] = React.useState("");

    const [errors,setErrors] = React.useState({});

    const handleCreate = () => {
        axios.post('/projects/create',{name,description,status})
            .then((res) => {
                console.log(res.data);
                setErrors({});
                router.push('/');
            })
            .catch((e) => {
                setErrors(e)
            });
    }

    return (
        <form
            className="mt-6 grid gap-6 px-20 grid-rows-auto"
        >
            <h1 className="text-xl font-semibold text-gray-500">Create a new project</h1>
            <input
                className="px-3 py-2 text-gray-600 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Project name"
            />
            {errors.name && (
                <small className="text-xs text-red-500">
                    Must not be empty
                </small>
            )}

            <input
                className="px-3 py-2 text-gray-600 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Project Description"
            />
            {errors.description && (
                <small className="text-xs text-red-500">
                    Must not be empty
                </small>
            )}

            <input
                className="px-3 py-2 text-gray-600 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                placeholder="Status (open or closed)"
            />
            {errors.status && (
                <small className="text-xs text-red-500">
                    Must not be empty
                </small>
            )}

            <button
                type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    handleCreate()
                }}
                className="flex items-center justify-center px-3 py-2 mx-24 mt-2 space-x-2 text-white transition duration-200 transform bg-green-500 rounded-full hover:scale-105 hover:bg-green-400 focus:outline-none"
            >
                <span className="font-semibold">Create Project</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            </button>
        </form>
    );
}

export default AddProject;