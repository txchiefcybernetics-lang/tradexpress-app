interface DepartmentCardProps {
  title: string;
  description: string;
  href: string;
}

export default function DepartmentCard({
  title,
  description,
  href,
}: DepartmentCardProps) {
  return (
    <a
      href={href}
      className="block rounded-xl bg-white shadow hover:shadow-lg transition p-6"
    >
      <h3 className="text-xl font-bold">{title}</h3>

      <p className="text-gray-500 mt-2">
        {description}
      </p>
    </a>
  );
}