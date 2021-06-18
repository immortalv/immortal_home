import React, { useRef, forwardRef } from "react";
import Modal from "react-modal";
import { CrossIcon, EmailIcon, CopyIcon } from "icons";
import GetAppIcon from '@material-ui/icons/GetApp';
import { getProfileQrCodeImage } from "utils/profile.utils";
import { uploadFile } from "services/api/profile.service";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("body");

const QRCodeModal = forwardRef(
  (
    { isOpen, setIsOpen, afterOpenModal, download, sendEmail, qrCodeData },
    ref
  ) => {
    const downloadQRCodeRef = useRef();
    function afterOpen() {
      afterOpenModal();
    }

    const closeModal = () => setIsOpen(false);

    const uploadImage = async () => {
      const dataUrl = getProfileQrCodeImage(qrCodeData);
      const formData = new FormData();
      formData.append("files", dataUrl);
      const respone = await uploadFile(formData, "testId");
      console.log("respone", respone);
    };

    return (
      <div>
        <Modal
          isOpen={isOpen}
          onAfterOpen={afterOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          className="qr-code-modal"
        >
          <div
            className="qr-code-modal__qr-code--download"
            ref={downloadQRCodeRef}
          />
          <div className="qr-code-modal__qr-code" ref={ref}></div>

          <button className="qr-code-modal__close" onClick={closeModal}>
            <CrossIcon className="qr-code-modal__close-icon" />
          </button>

          <div className="qr-code-modal__actions">
            {/* <button className="qr-code-modal__action" onClick={sendEmail}>
              <EmailIcon className="qr-code-modal__action-icon" />
              <span className="qr-code-modal__action-text">
                Відправити на електронну пошту
              </span>
            </button> */}
            <button className="qr-code-modal__action" onClick={download}>
              <GetAppIcon fontSize="large" className="qr-code-modal__action-icon" />
              <span className="qr-code-modal__action-text">Завантажити</span>
            </button>
          </div>
        </Modal>
      </div>
    );
  }
);

QRCodeModal.displayName = "QR Code Modal";

export default QRCodeModal;
