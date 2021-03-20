export const PROFILE_TEMPLATE_TYPES = {
  SIMPLE: "simple",
  BOOK: "book",
  ARTICLE: "article",
};

// const TEMPLATE = "TEMPLATE";
// const PHOTOS = "PHOTOS";
// const MEDIA = "MEDIA";
// const MAIN_INFORMATION = "MAIN_INFORMATION";
// const DESCRIPTION = "DESCRIPTION";
// const ADDITIONAL_INFORMATION = "ADDITIONAL_INFORMATION";

export const ADD_PROFILE_STEPS_NAME = {
  TEMPLATE: "TEMPLATE",
  PHOTOS: "PHOTOS",
  MEDIA: "MEDIA",
  MAIN_INFORMATION: "MAIN_INFORMATION",
  DESCRIPTION: "DESCRIPTION",
  ADDITIONAL_INFORMATION: "ADDITIONAL_INFORMATION",
  PROFILE_CREATED: "PROFILE_CREATED",
};

export const ADD_PROFILE_STEPS = [
  ADD_PROFILE_STEPS_NAME.TEMPLATE,
  ADD_PROFILE_STEPS_NAME.MAIN_INFORMATION,
  // ADD_PROFILE_STEPS_NAME.DESCRIPTION,
  ADD_PROFILE_STEPS_NAME.PHOTOS,
  // ADD_PROFILE_STEPS_NAME.MEDIA,
  ADD_PROFILE_STEPS_NAME.ADDITIONAL_INFORMATION,
  ADD_PROFILE_STEPS_NAME.PROFILE_CREATED,
];
