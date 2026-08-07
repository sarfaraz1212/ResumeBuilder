import TemplatePreviewCard from "../componenets/templatePreviewCard"
import TEMPLATES from "../assets/templates/templates"
import { useNavigate } from "react-router"
import useTemplateStore from "../stores/template"

const Home = () => {
  const navigate = useNavigate()
  const { setSelectedTemplate } = useTemplateStore()

  function onClick(templateId) {
    setSelectedTemplate(templateId)
    navigate("/builder")
  }

  function startBuilding() {
    const professional = TEMPLATES.find((t) => t.id === "PROFESSIONAL")
    onClick(professional ? professional.id : TEMPLATES[0]?.id)
  }

  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-800">
      {/* ---------- Nav ---------- */}
      <header className="flex items-center justify-between px-6 py-5 lg:px-12">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-lg font-bold text-slate-900"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
            R
          </span>
          ResumeForge
        </button>
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
          <a href="#templates" className="hover:text-slate-900">Templates</a>
          <a href="#features" className="hover:text-slate-900">Features</a>
          <button
            onClick={startBuilding}
            className="rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white transition hover:bg-indigo-700"
          >
            Build Resume
          </button>
        </nav>
      </header>

      {/* ---------- Hero ---------- */}
      <section className="px-6 pb-12 pt-12 text-center sm:pt-20 lg:px-12">
        <span className="inline-block rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700">
          100% Free · No sign-up · Open for everyone
        </span>
        <h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-7xl">
          No BS <span className="text-indigo-600">free resume builder</span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
          A free, community-built resume maker. Pick a professional template,
          fill in your details, and download a polished resume in minutes — no
          account, no paywall, no watermark.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            onClick={startBuilding}
            className="w-full rounded-xl bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700 sm:w-auto"
          >
            Start building — it's free
          </button>
          <a
            href="#templates"
            className="w-full rounded-xl border border-slate-300 bg-white px-8 py-3 text-base font-semibold text-slate-700 transition hover:border-slate-400 sm:w-auto"
          >
            Browse templates
          </a>
        </div>
      </section>

      {/* ---------- Features ---------- */}
      <section id="features" className="px-6 py-12 lg:px-12">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { icon: "🎯", title: "Recruiter-ready", text: "Clean, ATS-friendly layouts designed to pass screening and impress humans." },
            { icon: "⚡", title: "Live preview", text: "See every edit update instantly. What you see is exactly what you download." },
            { icon: "🆓", title: "Free forever", text: "Built for the community. No subscriptions, no hidden fees, no watermarks." },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-3 text-lg font-bold text-slate-900">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Templates ---------- */}
      <section id="templates" className="px-6 py-12 lg:px-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">Pick a template</h2>
          <p className="mt-2 text-slate-600">
            Choose a design to start. You can edit everything in the next step.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {TEMPLATES.map((template, index) => (
            <TemplatePreviewCard
              key={index}
              template={template}
              index={index}
              onClick={onClick}
            />
          ))}
        </div>
      </section>

      {/* ---------- Why I built this ---------- */}
      <section id="why" className="px-6 py-16 lg:px-12">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          {/* Picture placeholder */}
          <div className="flex aspect-square w-full items-center justify-center rounded-3xl border-2 border-dashed border-slate-300 bg-white text-slate-400">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-3xl">
                😬
              </div>
              <p className="mt-3 max-w-[14rem] text-sm font-medium">
                Adding profile picture in 2 months — my braces getting removed :)
              </p>
            </div>
          </div>

          {/* Story */}
          <div>
            <span className="inline-block rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700">
              The backstory
            </span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Why I built this
            </h2>
            <div className="mt-4 space-y-4 text-slate-600">
              <p>
                One weekend I sat down to build my resume. I found a resume
                builder, filled in every last detail, got it looking exactly how
                I wanted — and then, right when it was time to download, they
                asked me for money. I was furious.
              </p>
              <p>
                So I tried another app. Same story — every decent template was
                locked behind a paywall. That pissed me off even more.
              </p>
              <p className="font-semibold text-slate-900">
                I thought, screw these apps — I'll build my own. And here it is:
                free, no paywall, no watermark.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="px-6 py-12 lg:px-12">
        <div className="rounded-3xl bg-indigo-600 px-8 py-14 text-center text-white">
          <h2 className="text-3xl font-bold">Your next job starts with a great resume</h2>
          <p className="mx-auto mt-3 max-w-xl text-indigo-100">
            Join thousands using ResumeForge to land interviews — completely free.
          </p>
          <button
            onClick={startBuilding}
            className="mt-8 rounded-xl bg-white px-8 py-3 font-semibold text-indigo-700 transition hover:bg-indigo-50"
          >
            Create my resume
          </button>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        <p>Made with ❤️ for the community · ResumeForge is free and open for everyone.</p>
      </footer>
    </div>
  )
}

export default Home
