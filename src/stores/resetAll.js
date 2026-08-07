import useAboutStore from "./about";
import useSkillsStore from "./skills";
import useExperienceStore from "./experience";
import useProjectsStore from "./projects";
import useEducationStore from "./education";
import useAwardsStore from "./awards";
import useLanguagesStore from "./languages";
import useReferencesStore from "./references";
import useVolunteerStore from "./volunteer";

// Resets every persisted resume store back to its default seed data.
// Does NOT reset the selected template — the user stays on their chosen design.
const resetAllStores = () => {
    useAboutStore.getState().reset();
    useSkillsStore.getState().reset();
    useExperienceStore.getState().reset();
    useProjectsStore.getState().reset();
    useEducationStore.getState().reset();
    useAwardsStore.getState().reset();
    useLanguagesStore.getState().reset();
    useReferencesStore.getState().reset();
    useVolunteerStore.getState().reset();
};

export default resetAllStores;