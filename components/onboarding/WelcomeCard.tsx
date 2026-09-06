interface Props {
  onNext: () => void;
}

export default function WelcomeCard({
  onNext,
}: Props) {
  return (
    <div className="rounded-xl bg-white shadow p-10 text-center">

      <h2 className="text-3xl font-bold">
        Welcome to TradeXpress Enterprise
      </h2>

      <p className="mt-4 text-gray-500">
        This setup wizard will configure your company,
        government registrations, customs modules,
        AI assistant, and enterprise workspace.
      </p>

      <button
        onClick={onNext}
        className="mt-8 rounded-lg bg-blue-600 px-8 py-3 text-white hover:bg-blue-700"
      >
        Start Enterprise Setup
      </button>

    </div>
  );
}