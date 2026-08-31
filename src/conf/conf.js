const conf={
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteProjectsCollectionId: String(import.meta.env.VITE_APPWRITE_PROJECT_COLLECTION_ID),
    appwriteTasksCollectionId: String(import.meta.env.VITE_APPWRITE_TASK_COLLECTION_ID)
}

export default conf