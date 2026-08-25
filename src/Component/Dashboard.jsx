import React from 'react'

function Dashboard() {
 const projects = [
    {
      id: 1,
      name: "Portfolio Website",
      tasks: 12,
      completed: 8,
    },
    {
      id: 2,
      name: "E-Commerce",
      tasks: 20,
      completed: 10,
    },
    {
      id: 3,
      name: "Chat Application",
      tasks: 15,
      completed: 5,
    },
  ];

  const tasks = [
    {
      id: 1,
      title: "Create Navbar",
      priority: "High",
      due: "Today",
      completed: false,
    },
    {
      id: 2,
      title: "Build Login Page",
      priority: "Medium",
      due: "Tomorrow",
      completed: false,
    },
    {
      id: 3,
      title: "Setup Database",
      priority: "Low",
      due: "Completed",
      completed: true,
    },
  ];

  const totalTasks = projects.reduce(
    (total, project) => total + project.tasks,
    0
  );

  const completedTasks = projects.reduce(
    (total, project) => total + project.completed,
    0
  );

  const pendingTasks = totalTasks - completedTasks;

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, Ayan 👋
        </h1>

        <p className="mt-2 text-gray-500">
          Here's what's happening with your projects today.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Projects</p>
          <h2 className="mt-2 text-3xl font-bold">{projects.length}</h2>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Total Tasks</p>
          <h2 className="mt-2 text-3xl font-bold">{totalTasks}</h2>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Completed</p>
          <h2 className="mt-2 text-3xl font-bold">{completedTasks}</h2>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Pending</p>
          <h2 className="mt-2 text-3xl font-bold">{pendingTasks}</h2>
        </div>
      </div>

      {/* Projects */}
      <section className="mt-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold">My Projects</h2>

          <button className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white">
            + New Project
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const progress =
              project.tasks === 0
                ? 0
                : Math.round((project.completed / project.tasks) * 100);

            return (
              <div
                key={project.id}
                className="rounded-xl bg-white p-5 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{project.name}</h3>

                <p className="mt-2 text-sm text-gray-500">
                  {project.tasks} Tasks
                </p>

                {/* Progress */}
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
              </div>
            );
          })}
        </div>
      </section>

      {/* Tasks */}
      <section className="mt-8">
        <h2 className="mb-4 text-2xl font-bold">My Tasks</h2>

        <div className="overflow-hidden rounded-xl bg-white shadow-sm">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between border-b p-4 last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={task.completed}
                  readOnly
                />

                <span
                  className={
                    task.completed
                      ? "text-gray-400 line-through"
                      : "font-medium"
                  }
                >
                  {task.title}
                </span>
              </div>

              <div className="flex items-center gap-6 text-sm">
                <span className="text-gray-500">{task.priority}</span>

                <span className="text-gray-500">{task.due}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Dashboard