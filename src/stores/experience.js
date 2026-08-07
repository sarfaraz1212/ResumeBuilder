import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialState = {
    experiences: [
        {
            title: "Software Engineer | Full-time",
            company: "iTechnolabs Inc.",
            startedAt: "September 2025",
            endedAt: "Present",
            description: `<ul><li>Led the project (Typely – AI Writing &amp; Productivity Platform) end-to-end, from spec to production — managed a team of 5 and owned the call on what shipped.</li><li>Built the platform on supastarter (Next.js + Supabase) with oRPC for fully type-safe client-server calls.</li><li>Wrote and tuned 50+ production prompts driving 52+ AI tools — Humanizer, Content Detector, Citation Generator, Plagiarism Checker and more.</li><li>Shipped the companion Typely Chrome Extension — every writing tool one click away on any webpage, with support for 13 languages.</li><li>Built the credit-based subscription, user dashboards, and tool-routing flows; worked closely with design and QA.</li></ul>`,
        },
        {
            title: "Laravel Developer | Full-time",
            company: "Esferasoft Solutions Pvt Ltd.",
            startedAt: "July 2023",
            endedAt: "September 2025",
            description: `<ul><li>Pristo Clone: built the survey engine with conditional logic and branching question paths.</li><li>Wired up Google Maps for custom markers, route editing, and location-based survey assignment; integrated Trackimo API with AWS SQS.</li><li>ChefTable: set up Stripe Connect onboarding and Stripe Checkout with automated chef payouts after admin commission.</li><li>Built real-time chef-customer chat with WebSockets/Socket.IO plus admin moderation, and daily/weekly/monthly subscription booking.</li></ul>`,
        },
    ],
};

const useExperienceStore = create(
    persist(
        (set) => ({
            ...initialState,
            addExperience: (entry) =>
                set((state) => ({ experiences: [...state.experiences, entry] })),
            updateExperience: (index, field, value) =>
                set((state) => ({
                    experiences: state.experiences.map((item, i) =>
                        i === index ? { ...item, [field]: value } : item
                    ),
                })),
            removeExperience: (index) =>
                set((state) => ({
                    experiences: state.experiences.filter((_, i) => i !== index),
                })),
            reset: () => set(initialState),
        }),
        { name: "rb-experience" }
    )
);

export default useExperienceStore;
