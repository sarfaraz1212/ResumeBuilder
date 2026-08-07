import useProjectsStore from "../../../stores/projects";
import SectionHeading from "./SectionHeading";
import { ACCENT } from "./constants";

const Projects = () => {
  const { projects } = useProjectsStore();

  if (!projects || projects.length === 0) return null;

  return (
    <section>
      <SectionHeading title="Projects" />
      {projects.map((proj, i) => (
        <div key={i} className="mb-4">
          <div className="flex items-baseline justify-between">
            <h3 className="font-bold text-gray-900">{proj.title}</h3>
            <span className="text-sm text-gray-600">
              {proj.startedAt} – {proj.endedAt}
            </span>
          </div>
          {proj.link && (
            <a
              href={proj.link}
              className="text-sm underline"
              style={{ color: ACCENT }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {proj.link}
            </a>
          )}
          <div
            className="prose prose-sm mt-1 max-w-none pl-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6"
            dangerouslySetInnerHTML={{ __html: proj.description || "" }}
          />
        </div>
      ))}
    </section>
  );
};

export default Projects;
