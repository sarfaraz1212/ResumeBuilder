import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
    languages: ["JavaScript", "TypeScript", "PHP", "SQL"],
    frameworks: ["React", "Next.js", "React Native", "Laravel (v8-v12)", "Node.js"],
    libraries: ["Redux", "Zustand", "Inertia.js", "Socket.IO", "Axios"],
    apis: ["RESTful APIs", "API Design & Integration", "oRPC", "Swagger", "Postman", "Authentication & Authorization"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "Supabase", "Firebase"],
    realtime: ["WebSockets", "Socket.IO", "Event-Driven Architecture"],
    versionControl: ["Git", "GitHub", "Bitbucket", "Branching Strategies"],
    designPatterns: [
        { label: "Behavioral", value: "Chain of Responsibility, Strategy, Template Method" },
        { label: "Structural", value: "Adapter, Facade" },
        { label: "Creational", value: "Factory Method, Builder, Singleton" },
    ],
};

const useSkillsStore = create(
    persist(
        (set) => ({
            ...initialState,
            setSkillField: (field, value) => set({ [field]: value }),
            addSkill: (field, value) =>
                set((state) => ({
                    [field]: [...state[field], value],
                })),
            removeSkill: (field, index) =>
                set((state) => ({
                    [field]: state[field].filter((_, i) => i !== index),
                })),
            reset: () => set(initialState),
        }),
        { name: "rb-skills" }
    )
)

export default useSkillsStore;