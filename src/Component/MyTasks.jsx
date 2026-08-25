import React,{useState} from 'react'

function MyTasks() {
   const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Create Navbar",
      description: "Create responsive navigation bar",
      project: "Portfolio Website",
      priority: "High",
      status: "Todo",
      dueDate: "Today",
    },
    {
      id: 2,
      title: "Fix Login Page",
      description: "Fix validation and authentication issues",
      project: "Project Manager",
      priority: "High",
      status: "In Progress",
      dueDate: "Today",
    },
    {
      id: 3,
      title: "Setup Appwrite",
      description: "Create database and collections",
      project: "Project Manager",
      priority: "Medium",
      status: "Todo",
      dueDate: "Tomorrow",
    },
    {
      id: 4,
      title: "Create Dashboard",
      description: "Build the project dashboard",
      project: "Project Manager",
      priority: "Medium",
      status: "Todo",
      dueDate: "30 Aug 2026",
    },
    {
      id: 5,
      title: "Create About Page",
      description: "Create the about section",
      project: "Portfolio Website",
      priority: "Low",
      status: "Completed",
      dueDate: "25 Aug 2026",
    },
  ]);

  const changeStatus = (taskId, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: newStatus,
            }
          : task
      )
    );
  };

  const todoTasks = tasks.filter(
    (task) => task.status === "Todo"
  );

  const inProgressTasks = tasks.filter(
    (task) => task.status === "In Progress"
  );

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  );

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            My Tasks
          </h1>

          <p className="mt-2 text-gray-500">
            View and manage the tasks assigned to you.
          </p>
        </div>

        {/* Statistics */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              To Do
            </p>

            <p className="mt-2 text-3xl font-bold">
              {todoTasks.length}
            </p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              In Progress
            </p>

            <p className="mt-2 text-3xl font-bold">
              {inProgressTasks.length}
            </p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              Completed
            </p>

            <p className="mt-2 text-3xl font-bold">
              {completedTasks.length}
            </p>
          </div>

        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-wrap gap-3">

          <input
            type="text"
            placeholder="Search my tasks..."
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black sm:w-72"
          />

          <select className="rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none">
            <option>All Projects</option>
            <option>Portfolio Website</option>
            <option>Project Manager</option>
          </select>

          <select className="rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none">
            <option>All Priorities</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

        </div>

        {/* Task List */}
        <div className="space-y-4">

          {tasks.map((task) => (
            <div
              key={task.id}
              className="rounded-xl bg-white p-5 shadow-sm"
            >

              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

                {/* Task Information */}
                <div className="flex items-start gap-4">

                  <input
                    type="checkbox"
                    checked={task.status === "Completed"}
                    onChange={() =>
                      changeStatus(
                        task.id,
                        task.status === "Completed"
                          ? "Todo"
                          : "Completed"
                      )
                    }
                    className="mt-1 h-5 w-5"
                  />

                  <div>
                    <h2
                      className={`text-lg font-semibold ${
                        task.status === "Completed"
                          ? "text-gray-400 line-through"
                          : "text-gray-900"
                      }`}
                    >
                      {task.title}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                      {task.description}
                    </p>

                    <p className="mt-2 text-sm text-gray-400">
                      Project: {task.project}
                    </p>
                  </div>

                </div>

                {/* Task Details */}
                <div className="flex flex-wrap items-center gap-3">

                  {/* Priority */}
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
                    {task.priority}
                  </span>

                  {/* Due Date */}
                  <span className="text-sm text-gray-500">
                    Due: {task.dueDate}
                  </span>

                  {/* Status */}
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
                    {task.status}
                  </span>

                </div>

              </div>

              {/* Action */}
              <div className="mt-4 border-t pt-4">

                {task.status === "Todo" && (
                  <button
                    onClick={() =>
                      changeStatus(task.id, "In Progress")
                    }
                    className="text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    Start Task →
                  </button>
                )}

                {task.status === "In Progress" && (
                  <button
                    onClick={() =>
                      changeStatus(task.id, "Completed")
                    }
                    className="text-sm font-medium text-green-600 hover:text-green-800"
                  >
                    Mark as Completed →
                  </button>
                )}

                {task.status === "Completed" && (
                  <button
                    onClick={() =>
                      changeStatus(task.id, "Todo")
                    }
                    className="text-sm font-medium text-gray-500 hover:text-gray-700"
                  >
                    Reopen Task
                  </button>
                )}

              </div>

            </div>
          ))}

        </div>

      </div>
    </main>
  );
}

export default MyTasks