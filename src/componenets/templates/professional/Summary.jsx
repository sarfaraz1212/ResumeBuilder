import useAboutStore from "../../../stores/about";
import SectionHeading from "./SectionHeading";

const Summary = () => {
  const { description } = useAboutStore();

  return (
    <section>
      <SectionHeading title="Summary" />
      <p>{description}</p>
    </section>
  );
};

export default Summary;
