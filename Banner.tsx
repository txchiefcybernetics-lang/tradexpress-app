type BannerProps = {
  title: string;
  description: string;
  badge?: string;
};

export default function Banner({
  title,
  description,
  badge,
}: BannerProps) {
  return (
    <div className="rounded-2xl bg-gradient-to-r from-slate-900 to-slate-700 p-8 text-white shadow-lg">
      {badge && (
        <div className="mb-3 inline-flex rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
          {badge}
        </div>
      )}

      <h1 className="text-4xl font-bold">
        {title}
      </h1>

      <p className="mt-3 max-w-3xl text-slate-200">
        {description}
      </p>
    </div>
  );
}
