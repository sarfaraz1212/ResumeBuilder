

import TEMPLATES from "../../assets/templates/templates";

const TemplateRenderer = ({selectedTemplate}) => {

  const blueprint = TEMPLATES.find((t) => t.id === selectedTemplate);

  if (!blueprint) {
    return <p className="p-4 text-gray-500">No template selected.</p>;
  }

  const Component = blueprint.component;

  return (
    <Component/>
  )
}

export default TemplateRenderer