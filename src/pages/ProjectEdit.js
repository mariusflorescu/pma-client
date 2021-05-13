import axios from "axios";
import React from "react";
import { useParams } from "react-router";

function ProjectEdit() {
  let { id } = useParams();
  const [project, setProject] = React.useState();
  const [errors, setErrors] = React.useState("");
  React.useEffect(() => {
    try {
      axios.get(`/projects/${id}`).then((res) => {
        if (res && res.data) {
          console.log(res.data);
          setProject(res.data);
        }
      });
    } catch (e) {
      setErrors(e.response.data);
    }
  }, [id]);
  console.log("edit");
  return <div>EDIT HERE</div>;
}

export default ProjectEdit;
