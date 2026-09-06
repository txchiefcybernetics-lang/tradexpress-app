export default function KPICards() {
  const cards = [
    { title: "Active Shipments", value: "128" },
    { title: "Customs Entries", value: "64" },
    { title: "Revenue", value: "₱4.2M" },
    { title: "AI Alerts", value: "12" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-xl bg-white shadow p-6"
        >
          <p className="text-sm text-gray-500">{card.title}</p>

          <h2 className="text-3xl font-bold mt-3">
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}