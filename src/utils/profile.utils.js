export const getNextStep = (steps, activeStep) => {
  const activeIndex = steps.indexOf(activeStep);
  const nextStep = steps[activeIndex + 1];
  if (
    activeIndex + 1 > steps.length ||
    !nextStep ||
    activeIndex + 1 === steps.length
  ) {
    return steps[0];
  }

  return nextStep;
};

export const getPreviousStep = (steps, activeStep) => {
  const activeIndex = steps.indexOf(activeStep);
  const previousStep = steps[activeIndex - 1];

  if (activeIndex === 0 || !previousStep) {
    return { previousStep, shouldRedirect: true };
  }

  return { previousStep, shouldRedirect: false };
};

export const transfromDate = (date) => {
  const dateObject = new Date(date);
  let day = dateObject.getDate();
  let month = dateObject.getMonth();
  const year = dateObject.getFullYear();

  if (String(month).length === 1) month = `0${month}`;
  if (String(day).length === 1) day = `0${day}`;

  return `${day}.${month}.${year}`;
};
