import { useState } from 'react';
import useSkillsStore from '../../stores/skills';

const SkillsForm = ({ allowedSkills }) => {

    const skills = useSkillsStore();
    const addSkill = useSkillsStore((state) => state.addSkill);
    const removeSkill = useSkillsStore((state) => state.removeSkill);

    const [inputs, setInputs] = useState({});

    function handleAdd(field) {
        const value = (inputs[field] ?? "").trim();
        if (!value) return;
        addSkill(field, value);
        setInputs((prev) => ({ ...prev, [field]: "" }));
    }

    return (
        <div className="flex flex-col gap-4">
            {allowedSkills.map((allowedSkill) => {
                const values = skills[allowedSkill.name] ?? [];

                return (
                    <div key={allowedSkill.name}>
                        <h3 className="mb-1 block text-sm font-medium text-gray-700">
                            {allowedSkill.label}
                        </h3>
                        <ul className="flex flex-wrap gap-2">
                            {values.map((skill, index) => {
                                const text =
                                    typeof skill === "string"
                                        ? skill
                                        : `${skill.label}: ${skill.value}`;

                                return (
                                    <li
                                        key={index}
                                        className="flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-sm text-gray-900"
                                    >
                                        {text}
                                        <button
                                            type="button"
                                            onClick={() => removeSkill(allowedSkill.name, index)}
                                            aria-label={`Remove ${text}`}
                                            className="text-gray-400 transition hover:text-red-500"
                                        >
                                            &times;
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="mt-2 flex items-center gap-2">
                            <input
                                type="text"
                                value={inputs[allowedSkill.name] ?? ""}
                                onChange={(e) =>
                                    setInputs((prev) => ({ ...prev, [allowedSkill.name]: e.target.value }))
                                }
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        e.preventDefault();
                                        handleAdd(allowedSkill.name);
                                    }
                                }}
                                placeholder={`Add ${allowedSkill.label.toLowerCase()}...`}
                                className="flex-1 rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            />
                            <button
                                type="button"
                                onClick={() => handleAdd(allowedSkill.name)}
                                aria-label={`Add ${allowedSkill.label}`}
                                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-blue-600 text-lg leading-none text-white transition hover:bg-blue-700"
                            >
                                +
                            </button>
                        </div>

                    </div>
                );
            })}
        </div>
    );
};

export default SkillsForm;