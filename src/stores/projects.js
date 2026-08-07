import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialState = {
    projects: [
        {
            title: "Resume Builder",
            link: "github.com/jane/resume-builder",
            startedAt: "2023",
            endedAt: "Present",
            description: "<ul><li>A React + Vite app for generating resumes from templates.</li></ul>",
        },
        {
            title: "Task Manager API",
            link: "github.com/jane/task-api",
            startedAt: "2022",
            endedAt: "2023",
            description: "<ul><li>Built a REST API with Node.js and PostgreSQL.</li><li>Added JWT authentication and role-based access control.</li><li>Deployed on AWS with CI/CD via GitHub Actions.</li></ul>",
        },
    ],
};

const useProjectsStore = create(
    persist(
        (set) => ({
            ...initialState,
            addProject: (entry) =>
                set((state) => ({ projects: [...state.projects, entry] })),
            updateProject: (index, field, value) =>
                set((state) => ({
                    projects: state.projects.map((item, i) =>
                        i === index ? { ...item, [field]: value } : item
                    ),
                })),
            removeProject: (index) =>
                set((state) => ({
                    projects: state.projects.filter((_, i) => i !== index),
                })),
            reset: () => set(initialState),
        }),
        { name: "rb-projects" }
    )
);

export default useProjectsStore;
