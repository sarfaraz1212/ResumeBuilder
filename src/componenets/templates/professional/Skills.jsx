import useSkillsStore from "../../../stores/skills";
import SectionHeading from "./SectionHeading";

const SKILL_CATEGORIES = [
  { key: "languages", label: "Languages" },
  { key: "frameworks", label: "Frameworks" },
  { key: "libraries", label: "Libraries" },
  { key: "apis", label: "APIs" },
  { key: "databases", label: "Databases" },
  { key: "realtime", label: "Real-Time" },
  { key: "versionControl", label: "Version Control" },
];

const Skills = () => {
  const store = useSkillsStore();
  const { designPatterns } = store;

  return (
    <section>
      <SectionHeading title="Skills" />
      <div className="space-y-1.5">
        {SKILL_CATEGORIES.map(({ key, label }) => {
          const items = store[key];
          if (!items || items.length === 0) return null;
          return (
            <p key={key}>
              <span className="font-bold">{label}:</span> {items.join(" | ")}
            </p>
          );
        })}

        {designPatterns && designPatterns.length > 0 && (
          <>
            <p className="font-bold">Design Patterns:</p>
            <ul className="list-disc space-y-1 pl-6">
              {designPatterns.map((dp, i) => (
                <li key={i}>
                  <span className="font-bold">{dp.label}:</span> {dp.value}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
};

export default Skills;
