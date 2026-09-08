import { MyTasks } from "../Component";
import Container from "../Container/Container";

import { useSelector } from "react-redux";

function MyTasksPage() {
  const taskList=useSelector((state)=>state.taskTodo.tasks)
  return (
    <Container>
      <MyTasks tasks={taskList} />
    </Container>
  );
}

export default MyTasksPage;
