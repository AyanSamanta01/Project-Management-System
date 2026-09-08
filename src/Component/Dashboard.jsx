import { useNavigate } from "react-router";
import { TaskCard, ProjectCard } from "./index";


function Dashboard({userCredentials,projects,tasks}) {
 
  const navigate=useNavigate()

  

  const totalTasks = projects.reduce(
    (total, project) => total + project.tasks,
    0,
  );

  const completedTasks = projects.reduce(
    (total, project) => total + project.completed,
    0,
  );

  const pendingTasks = totalTasks - completedTasks;

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {userCredentials.name} 👋
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
          <h2 className="mt-2 text-3xl font-bold">{totalTasks || "NA"} </h2>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Completed</p>
          <h2 className="mt-2 text-3xl font-bold">{completedTasks || "NA"}</h2>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Pending</p>
          <h2 className="mt-2 text-3xl font-bold">{pendingTasks|| "NA"}</h2>
        </div>
      </div>
      {/* Projects */}
      <section className="mt-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold">My Projects</h2>

          <button className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white" onClick={()=>navigate("/create-project")}>
            + New Project
          </button>
        </div>

        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects?.map((project) => (
            <li key={project.$id} className="rounded-xl bg-white p-5 shadow-sm">
            <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </section>

      {/* Tasks */}
      <section className="mt-8">
        <h2 className="mb-4 text-2xl font-bold">My Tasks</h2>

        <div className="overflow-hidden rounded-xl bg-white shadow-sm">
          {tasks.map((task) => (
            <TaskCard task={task} key={task.id}/>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
