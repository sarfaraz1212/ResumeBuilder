import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialState = {
    languages: [
        {
            name: "English",
            level: "Native",
        },
        {
            name: "Spanish",
            level: "Professional",
        },
    ],
};

const useLanguagesStore = create(
    persist(
        (set) => ({
            ...initialState,
            reset: () => set(initialState),
        }),
        { name: "rb-languages" }
    )
);

export default useLanguagesStore;
