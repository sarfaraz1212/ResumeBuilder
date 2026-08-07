import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const initialState = {
    selectedTemplate: "",
};

const useTemplateStore = create(
    persist(
        (set) => ({
            ...initialState,
            setSelectedTemplate: (templateId) => set({ selectedTemplate: templateId }),
            clearSelectedTemplate: () => set({ selectedTemplate: "" }),
            reset: () => set(initialState),
        }),
        { name: "rb-template" }
    )
)

export default useTemplateStore;
