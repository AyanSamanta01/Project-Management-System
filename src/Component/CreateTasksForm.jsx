import React, { useEffect, useState } from "react";
import { Input, Textarea, Select } from "../Component";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import configure from "../appwrite/configure";
import { createTask } from "../store/taskSlice";

function CreateTasksForm({ task }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { slug } = useParams();
  const userFetchedData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const priority = [
    {
      name: "Low",
      value: "low",
    },
    {
      name: "Medium",
      value: "medium",
    },
    {
      name: "High",
      value: "high",
    },
  ];

  const status = [
    {
      name: "Todo",
      value: "todo",
    },
    {
      name: "In Progress",
      value: "inProgress",
    },
    {
      name: "Completed",
      value: "completed",
    },
  ];

  const { register, handleSubmit } = useForm({
    taskTitle: task?.taskTitle || "",
    taskDescription: task?.taskDescription || "",
    priority: task?.priority || "",
    dueDate: task?.dueDate || "",
    status: task?.status || "",
  });

  const TaskFormSubmit = async (data) => {
    if (task) {
      const updateProjectTask = await configure.updateTask(task.$id, {
        ...data,
      });
      if (updateProjectTask) {
        dispatch(createTask(updateProjectTask));
        navigate(`/${slug}`);
      }
    } else {
      const createProjectTask = await configure.createTask({
        ...data,
        projectId: slug,
        userId: userFetchedData.$id,
      });
      if (createProjectTask) {
        const TaskData = await configure.getAllTask();
        if (TaskData) {
          dispatch(createTask(TaskData));
          navigate(`/${slug}`);
        }
      }
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-2xl">
        <form
          onSubmit={handleSubmit(TaskFormSubmit)}
          className="rounded-xl bg-white p-6 shadow-sm"
        >
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900">Create Task</h1>
            <p className="mt-2 text-gray-500">
              Create a new task and assign it to a team member
            </p>
          </div>

          {/* Task Title */}
          <div className="mb-5">
            <Input
              label="Task title"
              type="text"
              placeholder="e.g. Create Login Page"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
              {...register("taskTitle", { required: true })}
            />
          </div>

          {/* Description */}
          <div className="mb-5">
            <Textarea
              label="Description"
              placeholder="Describe what needs to be done..."
              className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
              rows="5"
              {...register("taskDescription", { required: true })}
            />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* Priority */}
            <div>
              <Select
                label="Priority"
                options={priority}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
                {...register("priority", { required: true })}
              />
            </div>
            {/* Status */}
            <div>
              <Select
                label="Status"
                options={status}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
                {...register("status", { required: true })}
              />
            </div>
          </div>

          {/* Assigned To + Due Date */}
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* Assigned To */}
            {/* TODO: Later integrate */}
            {/* <div>
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
            </div> */}

            {/* Due Date */}
            <div>
              <Input
                label="Due Date"
                type="date"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                {...register("dueDate", { required: true })}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex justify-end gap-3">
            <button
              type="button"
              className="rounded-lg border border-gray-300 px-5 py-3 font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => navigate(`/${slug}`)}
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

export default CreateTasksForm;
