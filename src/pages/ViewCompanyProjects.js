import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuthState } from "../utils/authContext";
import useRouter from "../utils/useRouter";

import DeleteDialog from "../components/DeleteDialog";

function ViewCompanyProjects() {
  const router = useRouter();
  const { user } = useAuthState();

  const [projects, setProjects] = React.useState([]);
  const [errors, setErrors] = React.useState("");

  React.useEffect(() => {
    if (!user) router.push("/");

    if (user && user.type) {
      if (user.type !== "COMPANY") router.push("/");
    }
  }, [user, router]);

  React.useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("/projects/");

        if (res && res.data) {
          console.log(res.data);
          setProjects(res.data);
        }
      } catch (e) {
        setErrors(e.response.data);
      }
    };

    fetchProjects().then(() => console.log("Company projects"));
  }, []);

  const handleDeleteProject = async (id) => {
    try {
      await axios.delete(`/projects/${id}/delete`);
      setProjects((prevProjects) =>
        prevProjects.filter((project) => project.id !== id)
      );
    } catch (e) {
      setErrors(e.response.data);
    }
  };
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Project name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    applicants
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Tasks
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {projects &&
                  projects.length &&
                  projects.map((project) => (
                    <tr key={project.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600 text-sm">
                        {project.name}
                      </td>
                      <td className="px-6 py-4 text-center whitespace-nowrap">
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

                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          // onClick={project}
                          className="transition duration-100 text-green-600 hover:text-green-900 cursor-pointer"
                        >
                          {project.status === "open" && (
                            <Link to={`/projects/${project.id}/applicants`}>
                              View
                            </Link>
                          )}
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          // onClick={project}
                          className="transition duration-100 text-gray-600 hover:text-green-900 cursor-pointer"
                        >
                          {project.status === "open" && (
                            <Link to={`/project/${project.id}/tasks`}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                                />
                              </svg>
                            </Link>
                          )}
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-1 flex items-center justify-center gap-2">
                        <button className="transition duration-100 text-gray-600 hover:text-green-900 cursor-pointer">
                          <Link to={`/project/info/${project.id}/edit`}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                          </Link>
                        </button>
                        <DeleteDialog onPress={() => handleDeleteProject(project.id)}/>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewCompanyProjects;
