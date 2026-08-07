import useEducationStore from "../../../stores/education";
import SectionHeading from "./SectionHeading";

const Education = () => {
  const { educations } = useEducationStore();

  return (
    <section>
      <SectionHeading title="Education" />
      {educations.map((edu, i) => (
        <div key={i} className="mb-2">
          <div className="flex items-baseline justify-between">
            <h3 className="font-bold text-gray-900">{edu.degree}</h3>
            <span className="text-sm text-gray-600">
              {edu.startedAt} – {edu.endedAt}
            </span>
          </div>
          {edu.school && <p className="italic text-gray-700">{edu.school}</p>}
          {edu.description && <p className="text-gray-700">{edu.description}</p>}
        </div>
      ))}
    </section>
  );
};

export default Education;
