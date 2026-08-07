import { useState } from "react";

const Accordion = ({ title, children, defaultOpen = false }) => {
    const [open, setOpen] = useState(defaultOpen);

    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                aria-expanded={open}
                className={`flex w-full items-center justify-between px-5 py-4 text-left text-base font-semibold text-gray-800 transition ${
                    open ? "bg-blue-50/60" : "hover:bg-gray-50"
                }`}
            >
                {title}
                <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full text-xs text-gray-500 transition-transform duration-200 ${
                        open ? "rotate-180 bg-blue-100 text-blue-600" : "bg-gray-100"
                    }`}
                    aria-hidden="true"
                >
                    ▾
                </span>
            </button>

            {open && (
                <div className="border-t border-gray-100 px-5 py-4">{children}</div>
            )}
        </div>
    );
};

export default Accordion;