"use client";

import { useState } from "react";
import WelcomeCard from "./WelcomeCard";
import ProgressStepper from "./ProgressStepper";

export default function OnboardingWizard() {
  const [step, setStep] = useState(1);

  return (
    <div className="space-y-6">

      <ProgressStepper currentStep={step} totalSteps={10} />

      {step === 1 && (
        <WelcomeCard
          onNext={() => setStep(2)}
        />
      )}

    </div>
  );
}