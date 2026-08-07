import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import useEducationStore from "../../stores/education"
import Accordion from "../form/Accordion";
import Input from "../form/Input"
import RichTextEditor from "../form/RichTextEditor"
import Modal from "../form/Modal"


const AddForm = ({ allowedFields, addEducation, onAdded }) => {

  const [form,setForm] = useState({});

  function onChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function onSubmit(e)
  {
    e.preventDefault();
    addEducation(form)
    setForm({});
    onAdded?.();
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-4">
        {allowedFields.map((allowedField, fieldIndex) =>
          allowedField.type === "editor" ? (
            <RichTextEditor
              key={fieldIndex}
              label={allowedField.label}
              value={form[allowedField.name] ?? ""}
              onChange={(html) =>
                setForm((prev) => ({ ...prev, [allowedField.name]: html }))
              }
            />
          ) : (
            <Input
              key={fieldIndex}
              name={allowedField.name}
              label={allowedField.label}
              placeholder={allowedField.label}
              value={form[allowedField.name] ?? ""}
              onChange={onChange}
            />
          )
        )}
        <button
          type="submit"
          className="inline-flex items-center gap-1.5 self-start rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          <Plus size={16} />
          Add
        </button>
      </div>
    </form>
  )
}


const EducationForm = ({ allowedFields }) => {

  const { educations, updateEducation ,addEducation,removeEducation} = useEducationStore();
  const [isAddOpen, setIsAddOpen] = useState(false);

  function onChange(e) {
    const index = Number(e.target.dataset.index);
    updateEducation(index, e.target.name, e.target.value);
  }

  function confirmDelete(eduIndex) {
    Swal.fire({
      title: "Delete this education entry?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it",
    }).then((result) => {
      if (result.isConfirmed) {
        removeEducation(eduIndex);
        Swal.fire({
          title: "Deleted",
          text: "The education entry has been removed.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  }

  return (
    <div className="flex flex-col gap-4">
      {educations.map((education, eduIndex) => (
        <Accordion key={eduIndex} title={education.degree}>
          <div className="flex flex-col gap-4">
            {allowedFields.map((allowedField, fieldIndex) =>
              allowedField.type === "editor" ? (
                <RichTextEditor
                  key={fieldIndex}
                  label={allowedField.label}
                  value={education[allowedField.name] ?? ""}
                  onChange={(html) =>
                    updateEducation(eduIndex, allowedField.name, html)
                  }
                />
              ) : (
                <Input
                  key={fieldIndex}
                  name={allowedField.name}
                  label={allowedField.label}
                  placeholder={allowedField.label}
                  value={education[allowedField.name] ?? ""}
                  data-index={eduIndex}
                  onChange={onChange}
                />
              )
            )}
          </div>

          <button
            type="button"
            onClick={() => confirmDelete(eduIndex)}
            className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-red-200 px-3 py-1.5 text-sm font-medium text-red-600 transition hover:bg-red-50"
          >
            <Trash2 size={16} />
            Delete Education
          </button>
        </Accordion>

      ))}

      <button
        type="button"
        onClick={() => setIsAddOpen(true)}
        className="inline-flex items-center justify-center gap-1.5 self-start rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
      >
        <Plus size={16} />
        Add Education
      </button>

      <Modal open={isAddOpen} onClose={() => setIsAddOpen(false)} title="Add Education">
        <AddForm
          allowedFields={allowedFields}
          addEducation={addEducation}
          onAdded={() => setIsAddOpen(false)}
        />
      </Modal>
    </div>
  )
}

export default EducationForm