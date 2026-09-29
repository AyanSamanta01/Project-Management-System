import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import configure from "../appwrite/configure";
import { useDispatch } from "react-redux";
import { createTodo, removeTodo } from "../store/projectSlice";
import DelDecision from "./ReusableComponent/DelDecision";

function ProjectCard({ project }) {
  const [taskbyProject, settaskbyProject] = useState([]);
  const [delSessionActive, setDelSessionActive] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    configure.getAllTaskbyProject(project.$id).then((data) => {
      settaskbyProject(data.documents);
    });
  }, [project]);

  const totalTask = taskbyProject.length;
  const completedTask = taskbyProject.filter((task) => {
    return task.status === "completed";
  }).length;
  const progress = Math.floor((completedTask / totalTask) * 100);


  return project ? (
    <div>
      <div className="flex flex-row justify-between">
        <h3 className="text-xl font-semibold">{project.projectTitle}</h3>
        <button onClick={() => setDelSessionActive(true)}>
          <svg
            className="w-6 h-6 text-red-500 active:text-red-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>

      <p className="mt-2 text-sm text-gray-500">{project.projectDescription}</p>

      <div className="mt-5">
        <div className="mb-2 flex justify-between text-sm">
          <span className="text-gray-500">Progress</span>

          <span className="font-medium">
            {" "}
            {taskbyProject.length > 0 ? (
              <p>{progress}%</p>
            ) : (
              "No Tasks Declared"
            )}
          </span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-black"
            style={{ width: `${progress || 0}%` }}
          />
        </div>
      </div>

      <button
        className="mt-5 text-sm font-medium text-blue-600 hover:cursor-pointer active:text-blue-400"
        onClick={() => navigate(`${project.$id}`)}
      >
        Open Project →
      </button>
      {delSessionActive && (
        <section>
          <DelDecision project={project} setDelSessionActive={setDelSessionActive}/>
        </section>
      )}
    </div>
  ) : null;
}
export default ProjectCard;
