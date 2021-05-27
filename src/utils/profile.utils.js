import QRCodeStyling from "qr-code-styling";
import { QRCodeSettings } from "constants/profile.constants";
import { IMMORTAL_URL } from "constants/api.constants";
import { PROFILE } from "constants/routes.constants";
import { getProfileDataFromBucket } from "./image.utils";

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

export const transfromDate = (date, dateInput = false) => {
  const dateObject = new Date(date);
  let day = dateObject.getDate();
  let month = dateObject.getMonth();
  const year = dateObject.getFullYear();

  if (!day || !month || !year) return date;

  if (String(month).length === 1) month = `0${month}`;
  if (String(day).length === 1) day = `0${day}`;

  if (dateInput) return `${year}-${month}-${day}`;

  return `${day}.${month}.${year}`;
};

export const getQRProfileUrl = (id) => `${IMMORTAL_URL}/${PROFILE}}/${id}`;

export const getProfileQrCodeImage = (data) => {
  const {
    _canvas: { _canvas },
  } = new QRCodeStyling({
    ...QRCodeSettings,
    width: 300,
    height: 300,
    data,
  });

  const dataUrl = _canvas.toDataURL();
  return dataUrl;
};

export const isImage = (file) => file.mimeType.includes("image/");

export const filterUploadedContent = (files) => {
  return files.reduce(
    (acc, file) => {
      if (file.status && file.status !== "fulfilled") {
        acc.rejected.push(file.value || file);
        return acc;
      }
      if (isImage(file.value || file)) {
        acc.otherPhotos.push(file.value || file);
      } else {
        acc.otherFiles.push(file.value || file);
      }

      return acc;
    },
    { otherPhotos: [], otherFiles: [], rejected: [] }
  );
};

export const filter = (files) => {
  return files.reduce(
    (acc, file) => {
      if (file.status !== "fulfilled") return acc;
      if (isImage(file.value)) {
        acc.otherPhotos.push(file.value);
      } else {
        acc.otherFiles.push(file.value);
      }

      return acc;
    },
    { otherPhotos: [], otherFiles: [] }
  );
};

export const getUpdatedFiles = (data) => {
  // If file has preview property, it need to be uploaded file and needs to be updated in Db
  return data.reduce(
    (acc, cur) => {
      if (cur.preview) {
        acc.toUpload.push(cur);
      } else {
        acc.uploaded.push(cur);
      }

      return acc;
    },
    { uploaded: [], toUpload: [] }
  );
};

export const getFilePreview = (file) => {
  if (file.key) return getProfileDataFromBucket(file.key);
  return file.preview || file;
};

export const clearUserId = (id) => id.split("|")?.[1] || "";

export const getFullName = (profile) =>
  `${profile?.firstName || ""} ${profile?.lastName || ""} ${
    profile?.surName || ""
  }`.trim();
