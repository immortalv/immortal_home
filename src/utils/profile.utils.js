export const getNextStep = (steps, activeStep) => {
  const activeIndex = steps.indexOf(activeStep);
  const nextStep = steps[activeIndex + 1];
  const isFinal = activeIndex + 1 === steps.length;
  if (isFinal) {
    return { nextStep: steps[0], isFinal };
  }
  if (activeIndex + 1 > steps.length || !nextStep) {
    return { nextStep: steps[0], isFinal: false };
  }

  return { nextStep, isFinal: false };
};

export const getPreviousStep = (steps, activeStep) => {
  const activeIndex = steps.indexOf(activeStep);
  const previousStep = steps[activeIndex - 1];

  if (activeIndex === 0 || !previousStep) {
    return { previousStep, shouldRedirect: true };
  }

  return { previousStep, shouldRedirect: false };
};
