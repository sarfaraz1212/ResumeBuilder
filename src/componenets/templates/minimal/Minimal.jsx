import useAboutStore from "../../../stores/about"
import useSkillsStore from "../../../stores/skills"
import useExperienceStore from "../../../stores/experience"
import useEducationStore from "../../../stores/education"
import useAwardsStore from "../../../stores/awards"
import useLanguagesStore from "../../../stores/languages"

/* ----------------------------- atoms ----------------------------- */

const SectionHeading = ({ title }) => (
  <div className="mb-3 mt-5 rounded-full bg-gray-200 px-4 py-1.5">
    <h2 className="text-sm font-semibold italic uppercase tracking-wide text-gray-700">
      {title}
    </h2>
  </div>
)

const EntryHeader = ({ title, date }) => (
  <div className="flex items-baseline justify-between">
    <h3 className="font-bold text-gray-900">{title}</h3>
    {date && <span className="text-sm font-semibold text-gray-900">{date}</span>}
  </div>
)

/* ---------------------------- sections ---------------------------- */

const HeaderSection = () => {
  const { name, title, email, location, url } = useAboutStore()
  const contact = [location, email, url].filter(Boolean)

  return (
    <header>
      <h1 className="text-4xl font-extrabold uppercase tracking-tight text-gray-900">
        {name}
      </h1>
      <p className="mt-1 text-xl font-bold uppercase tracking-wide text-gray-800">
        {title}
      </p>
      {contact.length > 0 && (
        <p className="mt-2 text-sm text-gray-600">{contact.join(" | ")}</p>
      )}
    </header>
  )
}

const SummarySection = () => {
  const { description } = useAboutStore()
  if (!description) return null
  return (
    <section>
      <SectionHeading title="Summary" />
      <p className="text-justify text-gray-700">{description}</p>
    </section>
  )
}

const SkillsSection = () => {
  const store = useSkillsStore()
  const keys = ["languages", "frameworks", "libraries", "apis", "databases", "realtime", "versionControl"]
  const skills = keys.flatMap((key) => store[key] ?? [])

  if (skills.length === 0) return null

  return (
    <section>
      <SectionHeading title="Technical Skills" />
      <div className="grid grid-cols-3 gap-x-6 gap-y-1 text-gray-700">
        {skills.map((skill, index) => (
          <div key={index}>{skill}</div>
        ))}
      </div>
    </section>
  )
}

const ExperienceSection = () => {
  const { experiences } = useExperienceStore()
  if (!experiences || experiences.length === 0) return null

  return (
    <section>
      <SectionHeading title="Professional Experience" />
      {experiences.map((job, index) => (
        <div key={index} className="mb-4">
          <EntryHeader
            title={`${job.title}${job.company ? `, ${job.company}` : ""}`}
            date={`${job.startedAt} - ${job.endedAt}`}
          />
          <div
            className="mt-1 text-gray-700 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5"
            dangerouslySetInnerHTML={{ __html: job.description || "" }}
          />
        </div>
      ))}
    </section>
  )
}

const EducationSection = () => {
  const { educations } = useEducationStore()
  if (!educations || educations.length === 0) return null

  return (
    <section>
      <SectionHeading title="Education" />
      {educations.map((edu, index) => (
        <div key={index} className="mb-3">
          <EntryHeader
            title={edu.degree}
            date={`${edu.startedAt} - ${edu.endedAt}`}
          />
          {edu.school && <p className="text-gray-700">{edu.school}</p>}
          {edu.description && (
            <ul className="mt-1 list-disc pl-5 text-gray-700">
              <li>{edu.description}</li>
            </ul>
          )}
        </div>
      ))}
    </section>
  )
}

const AdditionalInfoSection = () => {
  const { languages } = useLanguagesStore()
  const { awards } = useAwardsStore()

  const languageText = languages?.map((l) => l.name).filter(Boolean).join(", ")
  const certificationText = awards?.map((a) => a.title).filter(Boolean).join(", ")

  if (!languageText && !certificationText) return null

  return (
    <section>
      <SectionHeading title="Additional Information" />
      <ul className="list-disc space-y-1 pl-5 text-gray-700">
        {languageText && (
          <li>
            <span className="font-bold text-gray-900">Languages: </span>
            {languageText}
          </li>
        )}
        {certificationText && (
          <li>
            <span className="font-bold text-gray-900">Certifications: </span>
            {certificationText}
          </li>
        )}
      </ul>
    </section>
  )
}

/* ---------------------------- template ---------------------------- */

const Minimal = () => {
  return (
    <div className="mx-auto w-full max-w-[800px] bg-white px-12 py-10 text-[13px] leading-relaxed text-gray-800 shadow-md">
      <HeaderSection />
      <SummarySection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <AdditionalInfoSection />
    </div>
  )
}

export default Minimal