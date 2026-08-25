import React from 'react'

function CreateTasksForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
    project: "",
    priority: "Medium",
    status: "Todo",
    assignedTo: "",
    dueDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("New Task:", task);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-2xl">
        <form
          onSubmit={handleSubmit}
          className="rounded-xl bg-white p-6 shadow-sm"
        >
          <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Create Task
          </h1>
          <p className="mt-2 text-gray-500">
            Create a new task and assign it to a team member
          </p>
        </div>

          {/* Task Title */}
          <div className="mb-5">
            <label
              htmlFor="title"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Task Title
            </label>

            <input
              id="title"
              name="title"
              type="text"
              value={task.title}
              onChange={handleChange}
              placeholder="e.g. Create Login Page"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
            />
          </div>

          {/* Description */}
          <div className="mb-5">
            <label
              htmlFor="description"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Description
            </label>

            <textarea
              id="description"
              name="description"
              value={task.description}
              onChange={handleChange}
              placeholder="Describe what needs to be done..."
              rows="5"
              className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
            />
          </div>

          {/* Priority + Status */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

            {/* Priority */}
            <div>
              <label
                htmlFor="priority"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Priority
              </label>

              <select
                id="priority"
                name="priority"
                value={task.priority}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label
                htmlFor="status"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Status
              </label>

              <select
                id="status"
                name="status"
                value={task.status}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
              >
                <option value="Todo">Todo</option>
                <option value="In Progress">
                  In Progress
                </option>
                <option value="Completed">
                  Completed
                </option>
              </select>
            </div>

          </div>

          {/* Assigned To + Due Date */}
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">

            {/* Assigned To */}
            <div>
              <label
                htmlFor="assignedTo"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Assign To
              </label>

              <select
                id="assignedTo"
                name="assignedTo"
                value={task.assignedTo}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
              >
                <option value="">Select Member</option>
                <option value="Ayan">Ayan</option>
                <option value="Rahul">Rahul</option>
                <option value="Sayan">Sayan</option>
              </select>
            </div>

            {/* Due Date */}
            <div>
              <label
                htmlFor="dueDate"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Due Date
              </label>

              <input
                id="dueDate"
                name="dueDate"
                type="date"
                value={task.dueDate}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
              />
            </div>

          </div>

          {/* Buttons */}
          <div className="mt-8 flex justify-end gap-3">

            <button
              type="button"
              className="rounded-lg border border-gray-300 px-5 py-3 font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-black px-5 py-3 font-medium text-white hover:bg-gray-800"
            >
              Create Task
            </button>

          </div>

        </form>
      </div>
    </main>
  );
}

export default CreateTasksForm