import React, { forwardRef } from "react";
import Modal from "react-modal";
import { CrossIcon, EmailIcon, CopyIcon } from "icons";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("body");

const QRCodeModal = forwardRef(({ isOpen, setIsOpen, afterOpenModal }, ref) => {
  function openModal() {
    setIsOpen(true);
  }

  function afterOpen() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";

    afterOpenModal();
  }

  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="qr-code-modal"
      >
        <div className="qr-code-modal__qr-code" ref={ref}></div>
        <h2 className="header-s-1 qr-code-modal__title">QR код</h2>

        <button className="qr-code-modal__close" onClick={closeModal}>
          <CrossIcon className="qr-code-modal__close-icon" />
        </button>

        <div className="qr-code-modal__actions">
          <button className="qr-code-modal__action" onClick={() => {}}>
            <EmailIcon className="qr-code-modal__action-icon" />
            <span className="qr-code-modal__action-text">
              Відправити на електронну пошту
            </span>
          </button>
          <button className="qr-code-modal__action" onClick={() => {}}>
            <CopyIcon className="qr-code-modal__action-icon" />
            <span className="qr-code-modal__action-text">Роздрукувати</span>
          </button>
        </div>
      </Modal>
    </div>
  );
});

QRCodeModal.displayName = "QR Code Modal";

export default QRCodeModal;
