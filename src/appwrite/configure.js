import conf from "../conf/conf";
import { Query, Databases, Client } from "appwrite";

class Configure {
  client = new Client();
  database;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.database = new Databases(this.client);
  }

  async createProject({
    slug,
    projectTitle,
    projectDescription,
    userId,
    createdAt,
    deleteAt,
  }) {
    try {
      return await this.database.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteProjectsCollectionId,
        slug,
        {
          projectTitle,
          projectDescription,
          userId,
          createdAt,
          deleteAt,
        },
      );
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async updateProject(
    slug,
    { projectTitle, projectDescription, createdAt, deleteAt },
  ) {
    try {
      return await this.database.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteProjectsCollectionId,
        slug,
        {
          projectTitle,
          projectDescription,
          createdAt,
          deleteAt,
        },
      );
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async deleteProject(slug) {
    try {
      return await this.database.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteProjectsCollectionId,
        slug,
      );
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async createTask({
    projectId,
    taskId,
    userId,
    taskTitle,
    taskDescription,
    priority,
    createdAt,
    dueDate,
  }) {
    try {
      return await this.database.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteTasksCollectionId,
        taskId,
        {
          projectId,
          userId,
          taskTitle,
          taskDescription,
          priority,
          createdAt,
          dueDate,
        },
      );
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async updateTask(
    taskId,
    { taskTitle, taskDescription, priority, createdAt, dueDate },
  ) {
    try {
      return await this.database.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteProjectsCollectionId,
        taskId,
        {
          taskTitle,
          taskDescription,
          priority,
          createdAt,
          dueDate,
        },
      );
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async deleteTask(taskId) {
    try {
      return await this.database.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteTasksCollectionId,
        taskId,
      );
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async getAllProject() {
    try {
      return await this.database.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteProjectsCollectionId,
      );
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async getAllTask() {
    try {
      return await this.database.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteTasksCollectionId,
      );
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async getAllTaskFPP(slug){
    try {
      return await this.database.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteTasksCollectionId,
        slug
      );
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
