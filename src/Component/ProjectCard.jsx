import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import configure from "../appwrite/configure";

function ProjectCard({ project }) {
  const [taskbyProject,settaskbyProject]=useState([])
  const navigate=useNavigate()
  useEffect(() => {
        configure.getAllTaskbyProject(project.$id)
            .then((data) => {
                settaskbyProject(data.documents)
            })
    
}, [project])

  
  const totalTask=taskbyProject.length
  const completedTask= taskbyProject.filter((task)=>{return task.status==="completed"}).length
  const progress=Math.floor((completedTask/totalTask)*100)
  
  return project ? (
    
    <div> 
      <h3 className="text-xl font-semibold">{project.projectTitle}</h3>

      <p className="mt-2 text-sm text-gray-500">{project.projectDescription}</p>

      <div className="mt-5">
        <div className="mb-2 flex justify-between text-sm">
          <span className="text-gray-500">Progress</span>
          
          <span className="font-medium"> {taskbyProject.length>0 ? <p>{progress}%</p>: "No Tasks Declared"}</span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-black"
            style={{ width: `${progress || 0}%` }}
          />
        </div>
      </div>

      <button className="mt-5 text-sm font-medium text-blue-600 hover:cursor-pointer active:text-blue-400"
      onClick={()=>navigate(`${project.$id}`)}
      >
        Open Project →
      </button>
      </div>
    
  ) : null;
}
export default ProjectCard;
