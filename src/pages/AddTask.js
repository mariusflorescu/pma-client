import React, { useState, useEffect } from "react";
import axios from "axios";
import Menu from "./../components/Menu";
function AddTask() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState();
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState();

  useEffect(() => {
    try {
      axios.get("/users/students").then((res) => {
        setStudents(res.data);
      });
      axios.get("/projects").then((res) => {
        setProjects(res.data);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  const handleCreateTask = () => {
    axios
      .post("tasks/create", {
        name,
        description,
        id: selectedProject.id,
        studentId: selectedStudent.id,
      })
      .then((res) => {
        setName("");
        setDescription("");
        setSelectedProject();
        setSelectedStudent();
      });
  };

  return (
    <div className="mt-6 grid gap-6 px-20 grid-rows-auto">
      <input
        className="px-3 py-2 text-gray-600 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Task Name"
      />
      <input
        className="px-3 py-2 text-gray-600 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
      />
      <Menu
        title={selectedProject ? selectedProject.name : "Select projects"}
        onSelect={(project) => {
          setSelectedProject(project);
        }}
        data={projects}
        getLabel={(project) => project.name}
      />
      <Menu
        title={
          selectedStudent
            ? `${selectedStudent.firstname} ${selectedStudent.lastname}`
            : "Select students"
        }
        onSelect={(student) => {
          setSelectedStudent(student);
        }}
        data={students}
        getLabel={(student) => `${student.firstname} ${student.lastname}`}
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handleCreateTask();
        }}
        className="flex items-center justify-center px-3 py-2 mx-24 mt-2 space-x-2 text-white transition duration-200 transform bg-green-500 rounded-full hover:scale-105 hover:bg-green-400 focus:outline-none"
      >
        <span className="font-semibold">Create Task</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </button>
    </div>
  );
}

export default AddTask;
