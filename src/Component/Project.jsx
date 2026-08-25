import React from 'react'

function Project() {
  const project = {
    name: "Portfolio Website",
    description:
      "My personal portfolio website where I showcase my projects and skills.",
    startDate: "25 Aug 2026",
    deadline: "30 Sep 2026",
  };

  const tasks = [
    {
      id: 1,
      title: "Create Navbar",
      description: "Create responsive navigation bar",
      status: "Todo",
      priority: "High",
      assignedTo: "Ayan",
    },
    {
      id: 2,
      title: "Create Homepage",
      description: "Build the main homepage",
      status: "In Progress",
      priority: "High",
      assignedTo: "Rahul",
    },
    {
      id: 3,
      title: "Create About Page",
      description: "Create the about section",
      status: "Completed",
      priority: "Medium",
      assignedTo: "Ayan",
    },
    {
      id: 4,
      title: "Make Responsive",
      description: "Make the website responsive",
      status: "Todo",
      priority: "Medium",
      assignedTo: "Sayan",
    },
  ];

  const members = [
    {
      id: 1,
      name: "Ayan Samanta",
      role: "Owner",
    },
    {
      id: 2,
      name: "Rahul",
      role: "Member",
    },
    {
      id: 3,
      name: "Sayan",
      role: "Member",
    },
  ];

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed",
  ).length;

  const inProgressTasks = tasks.filter(
    (task) => task.status === "In Progress",
  ).length;

  const todoTasks = tasks.filter((task) => task.status === "Todo").length;

  const progress =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-7xl">
        <section className="rounded-xl bg-white p-6 shadow-sm">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
            <div>
              <p className="mb-2 text-sm font-medium text-gray-500">Project</p>

              <h1 className="text-3xl font-bold text-gray-900">
                {project.name}
              </h1>

              <p className="mt-3 max-w-2xl text-gray-500">
                {project.description}
              </p>
            </div>

            <button className="rounded-lg bg-black px-5 py-3 font-medium text-white hover:bg-gray-800">
              + Add Task
            </button>
          </div>

          {/* Project Dates */}
          <div className="mt-6 flex flex-wrap gap-8 border-t pt-5">
            <div>
              <p className="text-sm text-gray-500">Start Date</p>

              <p className="mt-1 font-medium">{project.startDate}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Deadline</p>

              <p className="mt-1 font-medium">{project.deadline}</p>
            </div>
          </div>
        </section>

        {/* Progress */}
        <section className="mt-6 rounded-xl bg-white p-6 shadow-sm">
          <div className="flex justify-between">
            <div>
              <h2 className="text-lg font-semibold">Project Progress</h2>

              <p className="mt-1 text-sm text-gray-500">
                {completedTasks} of {totalTasks} tasks completed
              </p>
            </div>

            <span className="text-2xl font-bold">{progress}%</span>
          </div>

          <div className="mt-4 h-3 overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-black"
              style={{ width: `${progress}%` }}
            />
          </div>
        </section>

        {/* Statistics */}
        <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Todo</p>

            <p className="mt-2 text-3xl font-bold">{todoTasks}</p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">In Progress</p>

            <p className="mt-2 text-3xl font-bold">{inProgressTasks}</p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Completed</p>

            <p className="mt-2 text-3xl font-bold">{completedTasks}</p>
          </div>
        </section>

        {/* Tasks */}
        <section className="mt-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Tasks</h2>

            <button className="text-sm font-medium text-blue-600">
              View All
            </button>
          </div>

          <div className="overflow-hidden rounded-xl bg-white shadow-sm">
            {tasks.map((task) => (
              <div key={task.id} className="border-b p-5 last:border-b-0">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                  {/* Task Information */}
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {task.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {task.description}
                    </p>
                  </div>

                  {/* Task Details */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
                      {task.priority}
                    </span>

                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
                      {task.status}
                    </span>

                    <span className="text-sm text-gray-500">
                      {task.assignedTo}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Members */}
        <section className="mt-6">
          <h2 className="mb-4 text-2xl font-bold">Project Members</h2>

          <div className="rounded-xl bg-white shadow-sm">
            {members.map((member) => (
              <div
                key={member.id}
                className="flex items-center justify-between border-b p-5 last:border-b-0"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 font-semibold">
                    {member.name.charAt(0)}
                  </div>

                  <div>
                    <p className="font-medium">{member.name}</p>

                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                </div>

                <button className="text-sm font-medium text-blue-600">
                  View
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Project