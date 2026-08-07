import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialState = {
    volunteers: [],
};

const useVolunteerStore = create(
    persist(
        (set) => ({
            ...initialState,
            setVolunteers: (volunteers) => set({ volunteers }),
            reset: () => set(initialState),
        }),
        { name: "rb-volunteer" }
    )
);

export default useVolunteerStore;
