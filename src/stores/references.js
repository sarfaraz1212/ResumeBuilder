import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialState = {
    references: [
        {
            name: "Estelle Darcy",
            role: "Wardiere Inc. / CTO",
            phone: "123-456-7890",
            email: "hello@reallygreatsite.com",
        },
    ],
};

const useReferencesStore = create(
    persist(
        (set) => ({
            ...initialState,
            reset: () => set(initialState),
        }),
        { name: "rb-references" }
    )
);

export default useReferencesStore;
