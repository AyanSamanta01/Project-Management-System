import React from "react";
import { useNavigate } from "react-router";

function ProjectCard({ project }) {
  const navigate=useNavigate()
  // const progress =
  //   project.tasks === 0
      // /? 0
  //     : Math.round((project.completed / project.tasks) * 100);
  return project ? (
    
    <div> 
      <h3 className="text-xl font-semibold">{project.projectTitle}</h3>

      <p className="mt-2 text-sm text-gray-500">{project.projectDescription} Tasks</p>

      {/* <div className="mt-5">
        <div className="mb-2 flex justify-between text-sm">
          <span className="text-gray-500">Progress</span>
          <span className="font-medium">{progress}%</span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-black"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div> */}

      <button className="mt-5 text-sm font-medium text-blue-600 hover:cursor-pointer active:text-blue-400"
      onClick={()=>navigate(`${project.$id}`)}
      >
        Open Project →
      </button>
      </div>
    
  ) : null;
}
export default ProjectCard;
