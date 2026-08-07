import LanguageIcon from "@mui/icons-material/Language"
import useAboutStore from "../../../stores/about"
import useSkillsStore from "../../../stores/skills"
import useExperienceStore from "../../../stores/experience"
import useEducationStore from "../../../stores/education"

/* Source theme: SYSTEM_COLORS[0] — titleColor (#1890ff) drives subtitle color */
const TITLE_COLOR = "#1890ff"

/* ----------------------------- atoms ----------------------------- */

const SectionHeading = ({ title }) => (
  <div className="relative mb-2 text-base font-medium before:absolute before:-bottom-0.5 before:w-full before:border-b-4 before:border-[#e5e7eb] before:content-['']">
    {title}
  </div>
)

const SectionTitle = ({ label, md }) => (
  <p className={`${md ? "text-md" : "text-lg"} font-normal`}>{label}</p>
)

const SectionSubtitle = ({ label }) => (
  <p className="text-base font-normal" style={{ color: TITLE_COLOR }}>
    {label}
  </p>
)

const ProfileContact = ({ text }) => (
  <p className="text-sm font-normal">{text}</p>
)

/* ---------------------------- sections ---------------------------- */

const BasicIntro = () => {
  const { name, title, photo, email, phone, location, url } = useAboutStore()
  return (
    <div className="flex items-center justify-between p-2">
      <div>
        <h3 className="max-w-[90%] overflow-hidden text-ellipsis whitespace-nowrap text-3xl font-medium">
          {name}
        </h3>
        <p className="text-base font-normal" style={{ color: TITLE_COLOR }}>
          {title}
        </p>
        <div className="flex gap-3">
          <ProfileContact text={phone} />
          <ProfileContact text={email} />
          <ProfileContact text={location} />
          {url && (
            <div className="ml-2 flex items-center gap-2">
              <LanguageIcon sx={{ fontSize: 16 }} />
              <ProfileContact text={url} />
            </div>
          )}
        </div>
      </div>
      {photo && (
        <img
          src={photo}
          alt={name}
          className="h-[100px] w-[100px] rounded-full object-cover"
        />
      )}
    </div>
  )
}

const SummarySection = () => {
  const { description } = useAboutStore()
  return (
    <div className="mb-3">
      <SectionHeading title="Summary" />
      <div className="py-1.5 text-sm">{description}</div>
    </div>
  )
}

const WorkSection = () => {
  const { experiences } = useExperienceStore()
  return (
    <div className="mb-3">
      <SectionHeading title="Experience" />
      {experiences.map((item, index) => (
        <div key={index} className="py-2">
          <SectionTitle label={item.company} />
          <div className="flex items-center justify-between">
            <SectionSubtitle label={item.title} />
            <p className="text-xs">
              {item.startedAt} - {item.endedAt}
            </p>
          </div>
          <div
            className="mt-0.5 text-xs [&_ul]:list-disc [&_ul]:pl-4 [&_ol]:list-decimal [&_ol]:pl-4"
            dangerouslySetInnerHTML={{ __html: item.description || "" }}
          />
        </div>
      ))}
    </div>
  )
}

const EducationSection = () => {
  const { educations } = useEducationStore()
  return (
    <div className="mb-3">
      <SectionHeading title="Education" />
      {educations.map((item, index) => (
        <div key={index} className="py-2">
          <SectionTitle label={item.degree} md />
          <SectionSubtitle label={item.school} />
          <p className="text-xs">
            {item.startedAt} - {item.endedAt}
          </p>
        </div>
      ))}
    </div>
  )
}

const SkillsSection = ({ title, list = [] }) => (
  <div className="my-3">
    <SectionHeading title={title} />
    <div className="flex flex-wrap items-center gap-2.5 py-2">
      {list.map((item, index) => (
        <div
          key={index}
          className="border-b-2 border-[#e5e7eb] px-2 py-1 text-sm font-medium"
        >
          {item}
        </div>
      ))}
    </div>
  </div>
)

/* ---------------------------- template ---------------------------- */

const Modern = () => {
  const { languages, frameworks, libraries, apis, databases, realtime, versionControl } = useSkillsStore()

  return (
    <div className="mx-auto w-full max-w-[800px] bg-white p-2 text-gray-800 shadow-md">
      <BasicIntro />
      <div className="flex">
        {/* Left region (60%) */}
        <div className="basis-[60%] p-3">
          <SummarySection />
          <WorkSection />
          <EducationSection />
        </div>
        {/* Right region (40%) */}
        <div className="basis-[40%] p-3">
          <SkillsSection title="Languages" list={languages} />
          <SkillsSection title="Frameworks" list={frameworks} />
          <SkillsSection title="Libraries" list={libraries} />
          <SkillsSection title="APIs" list={apis} />
          <SkillsSection title="Databases" list={databases} />
          <SkillsSection title="Real-Time" list={realtime} />
          <SkillsSection title="Version Control" list={versionControl} />
        </div>
      </div>
    </div>
  )
}

export default Modern
