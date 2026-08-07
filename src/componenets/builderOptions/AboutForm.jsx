import useAboutStore from "../../stores/about";
import Input from "../form/Input";
import Textarea from "../form/Textarea";

const AboutForm = ({allowedFields}) => {
  const about = useAboutStore();
  const { setAboutField } = about;

  function onChange(e) {
    setAboutField(e.target.name, e.target.value);
  }

  return (
    <form className="flex flex-col gap-4">

      {allowedFields.map((field) => {
        const commonProps = {
          name: field.name,
          label: field.name,
          placeholder: field.name,
          value: about[field.name],
          onChange,
        };

        switch (field.type) {
          case "text":
          case "email":
          case "tel":
            return <Input key={field.name} {...commonProps} type={field.type} />;
          case "textarea":
            return <Textarea key={field.name} {...commonProps} />;
          default:
            return null;
        }
      })}

    </form>
  );
};

export default AboutForm;