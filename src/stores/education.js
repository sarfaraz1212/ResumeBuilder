import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialState = {
    educations: [
        {
            degree: "Diploma in Computer Science & Engineering",
            school: "Three-year diploma in computer engineering and sciences.",
            startedAt: "2018",
            endedAt: "2021",
            description: "",
        },
    ],
};

const useEducationStore = create(
    persist(
        (set) => ({
            ...initialState,
            addEducation: (entry) =>
                set((state) => ({ educations: [...state.educations, entry] })),
            updateEducation: (index, field, value) =>
                set((state) => ({
                    educations: state.educations.map((item, i) =>
                        i === index ? { ...item, [field]: value } : item
                    ),
                })),
            removeEducation: (index) =>
                set((state) => ({
                    educations: state.educations.filter((_, i) => i !== index),
                })),
            reset: () => set(initialState),
        }),
        { name: "rb-education" }
    )
);

export default useEducationStore;
