import React from "react";

function ProjectCard({ project }) {
  const progress =
    project.tasks === 0
      ? 0
      : Math.round((project.completed / project.tasks) * 100);
  return project ? (
    <li key={project.id} className="rounded-xl bg-white p-5 shadow-sm">
      <h3 className="text-xl font-semibold">{project.name}</h3>

      <p className="mt-2 text-sm text-gray-500">{project.tasks} Tasks</p>

      <div className="mt-5">
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
      </div>

      <button className="mt-5 text-sm font-medium text-blue-600">
        Open Project →
      </button>
    </li>
  ) : null;
}
export default ProjectCard;
