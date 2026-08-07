import { useEffect, useRef } from "react"
import { useNavigate } from "react-router"
import { useReactToPrint } from "react-to-print"
import { Download, RotateCcw } from "lucide-react"
import Swal from "sweetalert2"
import BuilderOptions from "../componenets/builder/BuilderOptions"
import TemplateRenderer from "../componenets/builder/templateRenderer"
import useTemplateStore from "../stores/template"
import resetAllStores from "../stores/resetAll"

const Builder = () => {

  const { selectedTemplate } = useTemplateStore();
  const resumeRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const downloadAsPdf = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: "resume",
    pageStyle: `
      @page {
        size: A4;
        margin: 14mm;
      }
      @media print {
        /* Let the resume flow and break wherever it exceeds A4 */
        #resume-print-area > * {
          max-width: none !important;
          margin: 0 !important;
          padding: 0 !important;
          box-shadow: none !important;
        }
      }
    `,
  });

  function handleReset() {
    Swal.fire({
      title: "Reset everything?",
      text: "This will restore all sections to the default content. This cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, reset all",
    }).then((result) => {
      if (result.isConfirmed) {
        resetAllStores();
        Swal.fire({
          title: "Reset",
          text: "All sections have been restored to defaults.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  }

  return (
    <div className="flex min-h-screen w-full flex-col">

      {/* ---------- Top bar ---------- */}
      <header className="flex items-center justify-between gap-3 bg-[#2c3e50] px-6 py-3">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-lg font-bold text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
            R
          </span>
          ResumeForge
        </button>
        <div className="flex items-center gap-3">
        <button
          onClick={handleReset}
          className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white/80 transition hover:bg-white/10 hover:text-white"
        >
          <RotateCcw size={16} />
          Reset
        </button>
        <button
          onClick={downloadAsPdf}
          className="inline-flex items-center gap-2 rounded-md border border-white/40 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white/10"
        >
          <Download size={16} />
          Download as PDF
        </button>
        </div>
      </header>

      {/* ---------- Workspace ---------- */}
      <div className="grid w-full flex-1 grid-cols-12">

        <div className="col-span-8 bg-[#e5e5e5] p-4">
          <div id="resume-print-area" ref={resumeRef}>
            <TemplateRenderer selectedTemplate={selectedTemplate}/>
          </div>
        </div>

        <div className="col-span-4 bg-[#e7eefa] p-4 border-l border-gray-400">
          <BuilderOptions/>
        </div>

      </div>
    </div>
  )
}

export default Builder