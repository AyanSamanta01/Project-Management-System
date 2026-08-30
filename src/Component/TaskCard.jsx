import React from "react";

function TaskCard({ task }) {
  return task ? (
    <li
      key={task.id}
      className="flex items-center justify-between border-b p-4 last:border-b-0"
    >
      <div className="flex items-center gap-3">
        <input type="checkbox" checked={task.completed} readOnly />

        <span
          className={
            task.completed ? "text-gray-400 line-through" : "font-medium"
          }
        >
          {task.title}
        </span>
      </div>

      <div className="flex items-center gap-6 text-sm">
        <span className="text-gray-500">{task.priority}</span>

        <span className="text-gray-500">{task.due}</span>
      </div>
    </li>
  ) : null;
}

export default TaskCard;