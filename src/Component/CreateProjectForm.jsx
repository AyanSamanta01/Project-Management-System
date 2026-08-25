import React from 'react'
import {Input,Button} from "./index"

function CreateProjectForm() {
  const [project, setProject] = useState({
    name: "",
    description: "",
    startDate: "",
    deadline: "",
  })


  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-2xl">
        <form
          className="rounded-xl bg-white p-6 shadow-sm"
        >
          <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Create a Project
          </h1>

          <p className="mt-2 text-gray-500">
            Create a new project and start managing your tasks
          </p>
        </div>
          {/* Project Name */}
          <div className="mb-5">
            <Input
              label="Project Name"
              labelClassname="mb-2 block text-sm font-medium text-gray-700"
              type="text"
              value={project.name}
              placeholder="e.g. Portfolio Website"
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
              placeholder="Describe your project..."
              rows="5"
              className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
            />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <Input
              label="Start Date"
              labelClassname="mb-2 block text-sm font-medium text-gray-700"
              type="date"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
            />
            </div>

            <div>
              <Input
              label="Deadline"
              labelClassname="mb-2 block text-sm font-medium text-gray-700"
              type="date"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
            />
            </div>
          </div>

          <div className="mt-8 flex justify-end gap-3">
            <Button
              name="Cancel"
              className="rounded-lg border border-gray-300 px-5 py-3 font-medium text-gray-700 hover:bg-gray-50"
            />

            <Button
              type="submit"
              name="Create Project"
              className="rounded-lg bg-green-700 px-5 py-3 font-medium text-white active:bg-green-600"
            />
          </div>
        </form>
      </div>
    </main>
  );

}

export default CreateProjectForm