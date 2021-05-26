import React from "react";
import { ToastContainer as Container, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let toastId;

const toastConfig = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

export const showErrorToast = (msg) => {
  if (!toast.isActive(toastId)) {
    toastId = toast.error(msg, {
      toastId,
      preventDuplicates: true,
      ...toastConfig,
    });
  }
};

export const showSuccessToast = (msg) => toast.success(msg, toastConfig);
export const showInfoToast = (msg) => toast.info(msg, toastConfig);
export const showWarningToast = (msg) => toast.warning(msg, toastConfig);

export const ToastContainer = () => (
  <Container
    position="top-right"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop
    closeOnClick
    rtl={false}
    pauseOnVisibilityChange
    draggable
    preventDuplicates
    transition={Flip}
  />
);
