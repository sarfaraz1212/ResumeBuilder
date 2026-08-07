import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Bold, Italic, List, ListOrdered } from "lucide-react";
import { useEffect } from "react";

const ToolbarButton = ({ active, onClick, label, children }) => (
    <button
        type="button"
        onClick={onClick}
        aria-label={label}
        aria-pressed={active}
        className={`flex h-7 w-7 items-center justify-center rounded transition ${
            active ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-gray-100"
        }`}
    >
        {children}
    </button>
);

const RichTextEditor = ({ label, value, onChange }) => {
    const editor = useEditor({
        extensions: [StarterKit],
        content: value || "",
        onUpdate: ({ editor }) => onChange(editor.getHTML()),
        editorProps: {
            attributes: {
                class: "prose prose-sm max-w-none min-h-[120px] px-3 py-2 text-sm text-gray-900 focus:outline-none",
            },
        },
    });

    // Keep the editor in sync if the value is replaced from outside (e.g. reset).
    useEffect(() => {
        if (editor && value !== editor.getHTML()) {
            editor.commands.setContent(value || "", false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    if (!editor) return null;

    return (
        <div>
            {label && (
                <label className="mb-1 block text-sm font-medium text-gray-700">{label}</label>
            )}
            <div className="rounded-md border border-gray-300 transition focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200">
                <div className="flex items-center gap-1 border-b border-gray-200 px-2 py-1">
                    <ToolbarButton
                        active={editor.isActive("bold")}
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        label="Bold"
                    >
                        <Bold size={15} />
                    </ToolbarButton>
                    <ToolbarButton
                        active={editor.isActive("italic")}
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        label="Italic"
                    >
                        <Italic size={15} />
                    </ToolbarButton>
                    <ToolbarButton
                        active={editor.isActive("bulletList")}
                        onClick={() => editor.chain().focus().toggleBulletList().run()}
                        label="Bullet list"
                    >
                        <List size={15} />
                    </ToolbarButton>
                    <ToolbarButton
                        active={editor.isActive("orderedList")}
                        onClick={() => editor.chain().focus().toggleOrderedList().run()}
                        label="Numbered list"
                    >
                        <ListOrdered size={15} />
                    </ToolbarButton>
                </div>
                <EditorContent editor={editor} />
            </div>
        </div>
    );
};

export default RichTextEditor;