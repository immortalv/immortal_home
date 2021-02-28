import { ADD_PROFILE_STEPS } from "constants/profile.constants";

class BuildProfileService {
  constructor() {
    this.steps = ADD_PROFILE_STEPS;
    this.activeIndex = 0;
  }

  nextStep() {
    if (this.activeIndex < this.steps.length - 1) return this.activeIndex++;
  }

  prevStep() {
    if (this.activeIndex > 0) return this.activeIndex--;
  }

  getActiveStep() {
    return this.steps[this.activeIndex];
  }
}

export default BuildProfileService;
