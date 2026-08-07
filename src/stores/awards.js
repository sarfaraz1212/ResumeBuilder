import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialState = {
    awards: [
        {
            title: "General English Certification Test — 80%",
            awarder: "International Business Management Institute (IBMI)",
            date: "",
            summary: "",
        },
        {
            title: "Business English Certification Test — 87.5%",
            awarder: "myeyelevel.com",
            date: "",
            summary: "",
        },
        {
            title: "Advanced English Proficiency Course",
            awarder: "All 8 levels completed",
            date: "",
            summary: "",
        },
    ],
};

const useAwardsStore = create(
    persist(
        (set) => ({
            ...initialState,
            setAwards: (awards) => set({ awards }),
            addAward: (entry) =>
                set((state) => ({ awards: [...state.awards, entry] })),
            updateAward: (index, field, value) =>
                set((state) => ({
                    awards: state.awards.map((item, i) =>
                        i === index ? { ...item, [field]: value } : item
                    ),
                })),
            removeAward: (index) =>
                set((state) => ({
                    awards: state.awards.filter((_, i) => i !== index),
                })),
            reset: () => set(initialState),
        }),
        { name: "rb-awards" }
    )
);

export default useAwardsStore;
