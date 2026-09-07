import { useEffect } from "react";
import { Dashboard } from "../Component";
import Container from "../Container/Container";
import { useSelector } from "react-redux";

function DashboardPage() {
  const projectList = useSelector((state) => state.projectTodo.ProjectTodos);
  const userData=useSelector((state)=>state.auth.userData)

    useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []); 

  return (
    <Container>
      <Dashboard userCredentials={userData} projects={projectList} />
    </Container>
  );
}

export default DashboardPage;
