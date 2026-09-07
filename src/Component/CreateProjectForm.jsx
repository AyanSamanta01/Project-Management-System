import React, { useCallback, useEffect } from "react";
import { Input, Button, Textarea } from "./index";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import configure from "../appwrite/configure";
import { createTodo } from "../store/projectSlice";

function ProjectForm({ project }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userFetchedData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const { register, handleSubmit, setValue, watch } = useForm({
    projectTitle: project?.projectTitle || "",
    slug: project?.slug || "",
    projectDescription: project?.projectDescription || "",
    startDate: project?.startDate || "",
    deadline: project?.deadline || "",
  });

  const submit = async (data) => {
    if (project) {
      const updateProjectData = await configure.updateProject(project.$id, {
        ...data,
      });
      if (updateProjectData) {
        dispatch(createTodo(updateProjectData.docments));
        navigate(`/${updateProjectData.$id}`);
      }
    } else {
      const createProjectData = await configure.createProject({
        ...data,
        userId: userFetchedData.$id,
      });
      if (createProjectData) {
        const newProjectData = await configure.getAllProject();
        dispatch(createTodo(newProjectData.documents));
        navigate(`/${createProjectData.$id}`);
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value)
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "projectTitle") {
        setValue("slug", slugTransform(value.projectTitle), {
          shouldValidate: true,
        });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, slugTransform]);

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-2xl">
        <form
          className="rounded-xl bg-white p-6 shadow-sm"
          onSubmit={handleSubmit(submit)}
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
              placeholder="e.g. Portfolio Website"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
              {...register("projectTitle", { required: true })}
            />
          </div>
          {/* Project slug */}
          <div className="mb-5">
            <Input
              label="Project Slug"
              labelClassname="mb-2 block text-sm font-medium text-gray-700"
              type="text"
              placeholder="e.g. Portfolio Website"
              {...register("slug", { required: true })}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
              onInput={(e) =>
                setValue("slug", slugTransform(e.target.value), {
                  shouldValidate: true,
                })
              }
            />
          </div>

          {/* Description */}
          <div className="mb-5">
            <Textarea
              label="Description"
              placeholder="Describe your project..."
              rows="5"
              className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
              {...register("projectDescription", { required: true })}
            />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <Input
                label="Start Date"
                labelClassname="mb-2 block text-sm font-medium text-gray-700"
                type="date"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                {...register("startDate", { required: true })}
              />
            </div>

            <div>
              <Input
                label="Deadline"
                labelClassname="mb-2 block text-sm font-medium text-gray-700"
                type="date"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                {...register("deadline", { required: true })}
              />
            </div>
          </div>

          <div className="mt-8 flex justify-end gap-3">
            <Button
              name="Cancel"
              onClick={() => navigate("/")}
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

export default ProjectForm;
