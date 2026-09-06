type DesktopGridProps = {
  children: React.ReactNode;
};

export default function DesktopGrid({ children }: DesktopGridProps) {
  return (
    <div
      className="
        grid
        gap-6
        auto-rows-[minmax(220px,auto)]
        grid-cols-[repeat(auto-fit,minmax(340px,1fr))]
        items-start
      "
    >
      {children}
    </div>
  );
}