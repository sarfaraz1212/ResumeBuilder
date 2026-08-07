import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import useProjectsStore from "../../stores/projects"
import Accordion from "../form/Accordion";
import Input from "../form/Input"
import RichTextEditor from "../form/RichTextEditor"
import Modal from "../form/Modal"


const AddForm = ({ allowedFields, addProject, onAdded }) => {

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
    addProject(form)
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


const ProjectsForm = ({ allowedFields }) => {

  const { projects, updateProject ,addProject,removeProject} = useProjectsStore();
  const [isAddOpen, setIsAddOpen] = useState(false);

  function onChange(e) {
    const index = Number(e.target.dataset.index);
    updateProject(index, e.target.name, e.target.value);
  }

  function confirmDelete(projIndex) {
    Swal.fire({
      title: "Delete this project?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it",
    }).then((result) => {
      if (result.isConfirmed) {
        removeProject(projIndex);
        Swal.fire({
          title: "Deleted",
          text: "The project has been removed.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  }

  return (
    <div className="flex flex-col gap-4">
      {projects.map((project, projIndex) => (
        <Accordion key={projIndex} title={project.title}>
          <div className="flex flex-col gap-4">
            {allowedFields.map((allowedField, fieldIndex) =>
              allowedField.type === "editor" ? (
                <RichTextEditor
                  key={fieldIndex}
                  label={allowedField.label}
                  value={project[allowedField.name] ?? ""}
                  onChange={(html) =>
                    updateProject(projIndex, allowedField.name, html)
                  }
                />
              ) : (
                <Input
                  key={fieldIndex}
                  name={allowedField.name}
                  label={allowedField.label}
                  placeholder={allowedField.label}
                  value={project[allowedField.name] ?? ""}
                  data-index={projIndex}
                  onChange={onChange}
                />
              )
            )}
          </div>

          <button
            type="button"
            onClick={() => confirmDelete(projIndex)}
            className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-red-200 px-3 py-1.5 text-sm font-medium text-red-600 transition hover:bg-red-50"
          >
            <Trash2 size={16} />
            Delete Project
          </button>
        </Accordion>

      ))}

      <button
        type="button"
        onClick={() => setIsAddOpen(true)}
        className="inline-flex items-center justify-center gap-1.5 self-start rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
      >
        <Plus size={16} />
        Add Project
      </button>

      <Modal open={isAddOpen} onClose={() => setIsAddOpen(false)} title="Add Project">
        <AddForm
          allowedFields={allowedFields}
          addProject={addProject}
          onAdded={() => setIsAddOpen(false)}
        />
      </Modal>
    </div>
  )
}

export default ProjectsForm