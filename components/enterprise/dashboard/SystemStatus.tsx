"use client";

type ServiceStatus = "online" | "warning" | "offline";

interface Service {
  name: string;
  status: ServiceStatus;
}

interface SystemStatusProps {
  services?: Service[];
}

const defaultServices: Service[] = [
  { name: "Database", status: "offline" },
  { name: "AI Engine", status: "offline" },
  { name: "API Gateway", status: "offline" },
  { name: "Authentication", status: "offline" },
  { name: "Storage", status: "offline" },
  { name: "Background Jobs", status: "offline" },
  { name: "Network", status: "offline" },
  { name: "Notifications", status: "offline" },
];

function score(status: ServiceStatus): number {
  switch (status) {
    case "online":
      return 100;
    case "warning":
      return 50;
    case "offline":
    default:
      return 0;
  }
}

export default function SystemStatus({
  services = defaultServices,
}: SystemStatusProps) {
  const total = services.reduce((sum, service) => sum + score(service.status), 0);

  const health = Math.round(total / services.length);

  let overall = "Critical";
  let badge = "bg-red-100 text-red-700";

  if (health >= 95) {
    overall = "Operational";
    badge = "bg-green-100 text-green-700";
  } else if (health >= 75) {
    overall = "Degraded";
    badge = "bg-yellow-100 text-yellow-700";
  } else if (health >= 40) {
    overall = "Warning";
    badge = "bg-orange-100 text-orange-700";
  }

  return (
    <div className="rounded-xl bg-white dark:bg-slate-900 shadow p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          System Status
        </h2>

        <span className={`rounded-full px-3 py-1 text-sm font-medium ${badge}`}>
          {overall}
        </span>
      </div>

      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm text-slate-500">Overall Health</span>
          <span className="font-bold">{health}%</span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-blue-600 transition-all"
            style={{ width: `${health}%` }}
          />
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {services.map((service) => (
          <div
            key={service.name}
            className="flex items-center justify-between"
          >
            <span>{service.name}</span>

            <span className="text-sm font-medium capitalize">
              {service.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
