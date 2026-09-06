interface Props {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressStepper({
  currentStep,
  totalSteps,
}: Props) {
  const percent = (currentStep / totalSteps) * 100;

  return (
    <div className="rounded-xl bg-white shadow p-6">

      <div className="flex justify-between mb-3">
        <span className="font-medium">
          Step {currentStep} of {totalSteps}
        </span>

        <span className="text-blue-600">
          {Math.round(percent)}%
        </span>
      </div>

      <div className="h-3 rounded-full bg-slate-200 overflow-hidden">
        <div
          className="h-full bg-blue-600 transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>

    </div>
  );
}