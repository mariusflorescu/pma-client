import axios from "axios";
import React from "react";
import useRouter from "../utils/useRouter";
import { useParams } from "react-router-dom";
import Menu from "./../components/Menu";

function ViewTasks() {
  const { id } = useParams();
  const router = useRouter();

  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    try {
      axios.get(`/tasks?projectId=${id}`).then((res) => {
        setTasks(res.data);
      });
    } catch (e) {
      console.log(e);
    }
  }, [id]);

  const handleBackButton = () => {
    router.push("/projects/");
  };

  const handleStatusChange = async (task, status) => {
    console.log(task, status);
    try {
      await axios.put("tasks/change", { id: task.id, status });
      setTasks((prevTasks) =>
        prevTasks.map((el) => (el.id === task.id ? { ...el, status } : el))
      );
    } catch (e) {
      console.log(e);
    }
  };

  const getLabelColor = (status) => {
    if (status === "To do") return "text-red-500";
    if (status === "In progress") return "text-yellow-500";
    if (status === "Done") return "text-green-500";
  };

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          {tasks.length ? (
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Task Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Task Description
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Student
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {tasks &&
                    tasks.map((task) => (
                      <tr key={task.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4 font-medium text-sm">
                              {task.name}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4 font-medium text-sm">
                              {task.description}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            {/* <div className="ml-4 font-medium text-sm">
                              {task.status}
                            </div> */}
                            <Menu
                              data={["To do", "In progress", "Done"]}
                              onSelect={(status) =>
                                handleStatusChange(task, status)
                              }
                              title={task.status}
                              labelColor={getLabelColor(task.status)}
                              position="absolute"
                            />
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                                alt=""
                              />
                            </div>
                            <div className="ml-4 font-medium text-sm">
                              {task.student.firstname +
                                " " +
                                task.student.lastname}
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          ) : (
            <span className="font-semibold text-medium text-gray-600">
              There are no tasks
            </span>
          )}
          <div className="flex justify-center pt-6 ">
            <button
              className="px-3 py-1 leading-5 text-xs font-semibold rounded-full bg-green-100 text-green-800 focus:outline-none cursor:pointer"
              onClick={(e) => {
                handleBackButton();
              }}
            >
              EXIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewTasks;
