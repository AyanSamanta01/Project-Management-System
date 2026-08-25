import React, { useState } from "react";

function CreateTasks() {
    const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Create Navbar",
      description: "Create responsive navigation bar",
      priority: "High",
      status: "Todo",
      assignedTo: "Ayan",
      dueDate: "28 Aug 2026",
    },
    {
      id: 2,
      title: "Create Homepage",
      description: "Build the main homepage",
      priority: "High",
      status: "In Progress",
      assignedTo: "Rahul",
      dueDate: "29 Aug 2026",
    },
    {
      id: 3,
      title: "Create About Page",
      description: "Create the about section",
      priority: "Medium",
      status: "Completed",
      assignedTo: "Ayan",
      dueDate: "25 Aug 2026",
    },
    {
      id: 4,
      title: "Make Website Responsive",
      description: "Make all pages responsive",
      priority: "Medium",
      status: "Todo",
      assignedTo: "Sayan",
      dueDate: "30 Aug 2026",
    },
    {
      id: 5,
      title: "Setup Database",
      description: "Create Appwrite database",
      priority: "High",
      status: "In Progress",
      assignedTo: "Ayan",
      dueDate: "27 Aug 2026",
    },
  ]);

  const columns = [
    {
      title: "Todo",
      status: "Todo",
    },
    {
      title: "In Progress",
      status: "In Progress",
    },
    {
      title: "Completed",
      status: "Completed",
    },
  ];

  const changeStatus = (taskId, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, status: newStatus }
          : task
      )
    );
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Tasks
            </h1>

            <p className="mt-2 text-gray-500">
              Manage and track your project tasks.
            </p>
          </div>

          <button className="rounded-lg bg-black px-5 py-3 font-medium text-white hover:bg-gray-800">
            + Add Task
          </button>
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-wrap gap-3">

          <input
            type="text"
            placeholder="Search tasks..."
            className="rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
          />

          <select className="rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none">
            <option>All Priorities</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

          <select className="rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none">
            <option>All Members</option>
            <option>Ayan</option>
            <option>Rahul</option>
            <option>Sayan</option>
          </select>

        </div>

        {/* Kanban Board */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          {columns.map((column) => {
            const columnTasks = tasks.filter(
              (task) => task.status === column.status
            );

            return (
              <div key={column.status}>

                {/* Column Header */}
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-semibold">
                    {column.title}
                  </h2>

                  <span className="rounded-full bg-gray-200 px-3 py-1 text-sm font-medium">
                    {columnTasks.length}
                  </span>
                </div>

                {/* Tasks */}
                <div className="space-y-4">

                  {columnTasks.length === 0 && (
                    <div className="rounded-xl border-2 border-dashed border-gray-300 p-8 text-center text-sm text-gray-400">
                      No tasks
                    </div>
                  )}

                  {columnTasks.map((task) => (
                    <div
                      key={task.id}
                      className="rounded-xl bg-white p-5 shadow-sm"
                    >

                      {/* Task Title */}
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-semibold text-gray-900">
                          {task.title}
                        </h3>

                        <button className="text-gray-400 hover:text-black">
                          ⋮
                        </button>
                      </div>

                      {/* Description */}
                      <p className="mt-2 text-sm text-gray-500">
                        {task.description}
                      </p>

                      {/* Priority */}
                      <div className="mt-4">
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
                          {task.priority}
                        </span>
                      </div>

                      {/* Due Date */}
                      <p className="mt-4 text-sm text-gray-500">
                        Due: {task.dueDate}
                      </p>

                      {/* Assigned User */}
                      <div className="mt-4 flex items-center justify-between">

                        <div className="flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-sm font-semibold">
                            {task.assignedTo.charAt(0)}
                          </div>

                          <span className="text-sm text-gray-600">
                            {task.assignedTo}
                          </span>
                        </div>

                        {/* Status Buttons */}
                        {task.status === "Todo" && (
                          <button
                            onClick={() =>
                              changeStatus(task.id, "In Progress")
                            }
                            className="text-xs font-medium text-blue-600"
                          >
                            Start →
                          </button>
                        )}

                        {task.status === "In Progress" && (
                          <button
                            onClick={() =>
                              changeStatus(task.id, "Completed")
                            }
                            className="text-xs font-medium text-green-600"
                          >
                            Complete →
                          </button>
                        )}

                        {task.status === "Completed" && (
                          <button
                            onClick={() =>
                              changeStatus(task.id, "Todo")
                            }
                            className="text-xs font-medium text-gray-500"
                          >
                            Reopen
                          </button>
                        )}

                      </div>
                    </div>
                  ))}

                </div>
              </div>
            );
          })}

        </div>
      </div>
    </main>
  );
}

export default CreateTasks