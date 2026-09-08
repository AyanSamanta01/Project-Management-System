import React, { useEffect, useState } from "react";
import Container from "../Container/Container";
import { Project } from "../Component";
import { data, useNavigate, useParams } from "react-router";
import configure from "../appwrite/configure";
import { Loader } from "../Component";

function ProjectOverview() {
  const [loader, setLoader] = useState(true);
  const { slug } = useParams();
  const [projectData, setProjectData] = useState([]);
  const [taskData,setTaskData]=useState([])
  const navigate = useNavigate();

    useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    configure.getProject(slug).then((data) => {
      if (data) {
        configure.getAllTaskbyProject(slug).then((taskData)=>setTaskData(taskData.documents))
        setProjectData(data);
        setLoader(false);
      } else {
        navigate("/");
      }
    });
  }, []);


  return loader ? (
    <Loader />
  ) : (
    <Container>
      <Project projectData={projectData} taskData={taskData}  />
    </Container>
  );
}

export default ProjectOverview;
