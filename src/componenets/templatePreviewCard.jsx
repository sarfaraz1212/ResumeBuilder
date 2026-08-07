function TemplatePreviewCard({ template, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick(template.id)}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl"
    >
      {/* Favourite tag */}
      {template.favourite && (
        <span className="absolute right-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-amber-950 shadow-md">
          ★ My favourite
        </span>
      )}

      {/* Thumbnail */}
      <div className="aspect-[3/4] w-full overflow-hidden bg-slate-100">
        <img
          src={template.thumbnail}
          alt={template.name}
          className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
        />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between gap-2 border-t border-slate-100 p-4">
        <div>
          <p className="font-semibold capitalize text-slate-900">{template.name}</p>
          {template.description && (
            <p className="line-clamp-1 text-xs text-slate-500">{template.description}</p>
          )}
        </div>
        <span className="shrink-0 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100">
          Use →
        </span>
      </div>
    </button>
  )
}

export default TemplatePreviewCard
