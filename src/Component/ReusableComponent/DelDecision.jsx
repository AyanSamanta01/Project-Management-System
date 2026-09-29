import React from "react";
import configure from "../../appwrite/configure";
import { useDispatch } from "react-redux";
import { createTodo, removeTodo } from "../../store/projectSlice";
import { createTask, removeTask } from "../../store/taskSlice";
import { useNavigate } from "react-router";

function DelDecision({ project, setDelSessionActive }) {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const deleteProject = async (project) => {
    try {
      const deleteTask = await configure.deleteAllTaskbyProject(project.$id);
        const deletePWork = await configure.deleteProject(project.$id);
       
        if (deleteTask && deletePWork) {
          const allProjectFetch = await configure.getAllProject();
          const allTaskFetch = await configure.getAllTask();
          dispatch(removeTask());
          dispatch(removeTodo());
          if (allProjectFetch && allTaskFetch) {
            dispatch(createTodo(allProjectFetch.documents));
            dispatch(createTask(allTaskFetch.documents));
            navigate('/')
          }
        }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="bg-blue-50/75 fixed inset-0 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-2xl w-8/20">
        <h2 className="text-xl font-bold mb-2">Are you sure?</h2>

        <p className="mb-4 text-red-500 font-medium">
          Deleting this project will also delete all tasks related to it, Are
          you sure that you want to delete this project?
        </p>

        <div className="flex gap-4 justify-end">
          <button
            className="px-4 py-2 bg-gray-300 active:bg-gray-200 rounded"
            onClick={() => setDelSessionActive(false)}
          >
            Cancel
          </button>

          <button
            className="px-4 py-2 bg-red-600 active:bg-red-500 text-white rounded"
            onClick={() => deleteProject(project)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DelDecision;
