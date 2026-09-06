import OnboardingWizard from "@/components/onboarding/OnboardingWizard";

export default function OnboardingPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">
          Enterprise Onboarding
        </h1>

        <p className="text-gray-500 mt-2">
          Configure your TradeXpress Enterprise workspace.
        </p>
      </div>

      <OnboardingWizard />
    </div>
  );
}