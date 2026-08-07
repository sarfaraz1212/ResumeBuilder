import useExperienceStore from "../../../stores/experience";
import SectionHeading from "./SectionHeading";

const Experience = () => {
  const { experiences } = useExperienceStore();

  return (
    <section>
      <SectionHeading title="Experience" />
      {experiences.map((job, i) => (
        <div key={i} className="mb-5">
          <div className="flex items-baseline justify-between">
            <h3 className="font-bold text-gray-900">{job.company}</h3>
            <span className="text-sm text-gray-600">
              {job.startedAt} – {job.endedAt}
            </span>
          </div>
          <p className="italic text-gray-700">{job.title}</p>
          <div
            className="prose prose-sm mt-1 max-w-none pl-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6"
            dangerouslySetInnerHTML={{ __html: job.description || "" }}
          />
        </div>
      ))}
    </section>
  );
};

export default Experience;
