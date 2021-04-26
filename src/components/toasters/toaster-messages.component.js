import React from "react";
import { ToastContainer, toast, Flip } from "react-toastify";
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

export const ErrorHandling = (msg) => {
  if (!toast.isActive(toastId)) {
    toastId = toast.error(msg, {
      toastId,
      preventDuplicates: true,
      ...toastConfig,
    });
  }
};

export const SuccessHandling = (msg) => toast.success(msg, toastConfig);
export const InfoToaster = (msg) => toast.info(msg, toastConfig);

export const MessageContainer = () => (
  <ToastContainer
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
