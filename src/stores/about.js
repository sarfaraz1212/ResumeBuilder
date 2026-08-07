import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
    name: "Sarfaraz Singh",
    title: "Full Stack Developer",
    photo: "",
    email: "singhsarfaraz5507@gmail.com",
    phone: "",
    location: "",
    url: "",
    description: "Full Stack Developer with 3 years of experience building web apps end-to-end. Comfortable across the stack — Next.js and React on the front, Laravel and Node.js on the back — and focused on shipping software that's fast, secure, and actually useful to the people using it. I've led small teams, mentored newer engineers, and worked directly with stakeholders to take products from idea to production.",
    objective: "",
};

const useAboutStore = create(
    persist(
        (set) => ({
            ...initialState,
            setAboutField: (field, value) => set({ [field]: value }),
            reset: () => set(initialState),
        }),
        { name: "rb-about" }
    )
)

export default useAboutStore;
