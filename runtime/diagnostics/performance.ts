type Step = {
  name: string;
  started: number;
  ended?: number;
};

export class PerformanceTracker {
  private readonly started = performance.now();
  private readonly steps: Step[] = [];

  startStep(name: string) {
    this.steps.push({
      name,
      started: performance.now(),
    });
  }

  endStep(name: string) {
    const step = this.steps.find(
      s => s.name === name && s.ended === undefined
    );

    if (step) {
      step.ended = performance.now();
    }
  }

  report() {
    const total = performance.now() - this.started;

    return {
      totalMs: Number(total.toFixed(2)),
      steps: this.steps.map(step => ({
        name: step.name,
        durationMs:
          step.ended !== undefined
            ? Number((step.ended - step.started).toFixed(2))
            : null,
      })),
    };
  }
}

