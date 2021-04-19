import logo from "assets/logo.svg";

export const PROFILE_TEMPLATE_TYPES = {
  SIMPLE: "simple",
  BOOK: "book",
  ARTICLE: "article",
};

export const ADD_PROFILE_STEPS_NAME = {
  TEMPLATE: "TEMPLATE",
  PHOTOS: "PHOTOS",
  MEDIA: "MEDIA",
  MAIN_INFORMATION: "MAIN_INFORMATION",
  ADDITIONAL_INFORMATION: "ADDITIONAL_INFORMATION",
  PROFILE_CREATED: "PROFILE_CREATED",
};

export const ADD_PROFILE_STEPS = [
  ADD_PROFILE_STEPS_NAME.TEMPLATE,
  ADD_PROFILE_STEPS_NAME.MAIN_INFORMATION,
  ADD_PROFILE_STEPS_NAME.PHOTOS,
  // ADD_PROFILE_STEPS_NAME.MEDIA,
  ADD_PROFILE_STEPS_NAME.ADDITIONAL_INFORMATION,
  ADD_PROFILE_STEPS_NAME.PROFILE_CREATED,
];

export const QRCodeSettings = {
  width: 200,
  height: 200,
  image: logo,
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 2,
    imageSize: 0.5,
  },
};
