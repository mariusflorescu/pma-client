import React from "react";
import axios from "axios";
import { useAuthState } from "../utils/authContext";
import useRouter from "../utils/useRouter";
import { useParams } from "react-router-dom";

function ViewApplicants() {
  const router = useRouter();
  let { id } = useParams();

  const [applicants, setApplicants] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`/projects/${id}/applicants`)
      .then((res) => {
        setApplicants(res.data);
      })
      .catch((err) => {
        console.log(err.response.data.error);
      });
  }, [id]);

  const handleBackButton = () => {
    router.push("/projects/");
  };

  console.log(applicants);

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          {applicants && applicants.length ? (
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                  <tr>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Student
                    </th>
                  </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                  {applicants &&
                  applicants.map((applicant) => (
                      <tr key={applicant.id}>
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
                              {applicant.student.firstname +
                              applicant.student.lastname}
                            </div>
                          </div>
                        </td>
                      </tr>
                  ))}
                  </tbody>
                </table>
              </div>
          ):(
              <span className="font-semibold text-medium text-gray-600">There are no applicants</span>
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

export default ViewApplicants;
