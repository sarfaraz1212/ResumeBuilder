import { ACCENT } from "./constants";

const SectionHeading = ({ title }) => (
  <h2
    className="mb-3 mt-6 border-b-2 pb-1 text-lg font-bold"
    style={{ color: ACCENT, borderColor: ACCENT }}
  >
    {title}
  </h2>
);

export default SectionHeading;
