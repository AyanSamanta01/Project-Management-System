import React, { useEffect, useState } from "react";
import Container from "../Container/Container";
import { Project } from "../Component";
import { data, useNavigate, useParams } from "react-router";
import configure from "../appwrite/configure";
import { Loader } from "../Component";

function ProjectOverview() {
  const [loader, setLoader] = useState(true);
  const { slug } = useParams();
  const [projectData, setProjectData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    configure.getProject(slug).then((data) => {
      if (data) {
        setProjectData(data);
        setLoader(false);
      } else {
        navigate("/");
      }
    });
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return loader ? (
    <Loader />
  ) : (
    <Container>
      <Project projectData={projectData} />
    </Container>
  );
}

export default ProjectOverview;
