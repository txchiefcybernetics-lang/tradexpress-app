"use client";

interface EmbeddedFrameProps {
  title: string;
  src: string;
  height?: number;
}

export default function EmbeddedFrame({
  title,
  src,
  height = 850,
}: EmbeddedFrameProps) {
  return (
    <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-6 py-4">

        <div>
          <h2 className="text-xl font-bold text-slate-900">
            {title}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Embedded Enterprise Workspace
          </p>
        </div>

        <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
          Live
        </div>

      </div>

      {/* iFrame */}

      <iframe
        title={title}
        src={src}
        className="w-full bg-white"
        style={{
          height: `${height}px`,
          border: "none",
        }}
        loading="lazy"
        allowFullScreen
      />

    </div>
  );
}