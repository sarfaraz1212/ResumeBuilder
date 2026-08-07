import useAwardsStore from "../../../stores/awards";
import SectionHeading from "./SectionHeading";

const Certifications = () => {
  const { awards } = useAwardsStore();

  if (!awards || awards.length === 0) return null;

  return (
    <section>
      <SectionHeading title="Certifications" />
      <ul className="list-disc space-y-1 pl-6">
        {awards.map((award, i) => (
          <li key={i}>
            {award.title}
            {award.awarder && (
              <span className="text-gray-600"> — {award.awarder}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
