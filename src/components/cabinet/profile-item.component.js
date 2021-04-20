import React, { useEffect, useState, useRef } from "react";
import { renderEmail, Email, Item, Image } from "react-html-email";
import { useHistory } from "react-router";
import QRCodeStyling from "qr-code-styling";
import { Button, Checkbox } from "components/common";
import { getProfilefromBucket } from "utils/image.utils";
import { getQRProfileUrl } from "utils/profile.utils";
import { sendEmail } from "services/api/email.service";
import { PROFILE } from "constants/routes.constants";
import { QRCodeSettings } from "constants/profile.constants";

import QRCodeModal from "./qrcode-modal.component";

import "./style.scss";

const MyEmail = ({ name, imageSrc }) => (
  <Email title="link">
    <Item>Hello {name}</Item>
    <Image alt="Qr Code Image" width="300" height="300" src={imageSrc} />
  </Email>
);

const ProfileItem = ({ profile }) => {
  const qrCodeRef = useRef(null);
  const modalQRCodeRef = useRef(null);
  const history = useHistory();
  const { name, description, profileType } = profile;
  const [isPublic, setIsPublic] = useState(true);
  const [isModalOpen, setIsOpen] = useState(false);

  const handleChange = () => setIsPublic(!isPublic);
  const goToProfilePage = () => history.push(`${PROFILE}/${profile.id}`);

  useEffect(() => {
    const qrCode = new QRCodeStyling({
      ...QRCodeSettings,
      data: getQRProfileUrl(profile.id),
    });

    qrCode.append(qrCodeRef.current);
  }, []);

  const afterOpenModal = () => {
    const qrCode = new QRCodeStyling({
      ...QRCodeSettings,
      width: 150,
      height: 150,
      data: getQRProfileUrl(profile.id),
    });

    qrCode.append(modalQRCodeRef.current);
  };

  const downloadQrCode = () => {
    const qrCode = new QRCodeStyling({
      ...QRCodeSettings,
      width: 300,
      height: 300,
      data: getQRProfileUrl(profile.id),
    });

    qrCode.download({ name: "immortal" });
  };

  const sendEm = () => {
    const {
      _canvas: { _canvas },
    } = new QRCodeStyling({
      ...QRCodeSettings,
      width: 300,
      height: 300,
      data: getQRProfileUrl(profile.id),
    });

    const dataUrl = _canvas.toDataURL();
    const messageHtml = renderEmail(
      <MyEmail name={"Name!!!!!!!!"} imageSrc={dataUrl} />
    );

    console.log("htmlBody", messageHtml);
    sendEmail(["immortall.lv.mail@gmail.com"], null, messageHtml);
  };

  return (
    <>
      <div className="profile-item">
        <img
          onClick={goToProfilePage}
          src={getProfilefromBucket(profile.mainPhoto)}
          className="profile-item__img"
          alt="profile picture"
        />
        <div className="profile-item__info">
          <h4 className="profile-item__name">{name}</h4>
          <p className="profile-item__description">{description}</p>
          <div className="profile-item__type-container">
            <span className="profile-item__type">{profileType}</span>
            <Checkbox checked={isPublic} onChange={handleChange} />
          </div>

          <Button type="secondary" className="profile-item__btn">
            Редагувати
          </Button>
        </div>
        <div className="qr-code__container">
          <div
            className="qr-code"
            ref={qrCodeRef}
            onClick={() => setIsOpen(true)}
          ></div>
          <span className="qr-code__label">QR код</span>
        </div>
      </div>
      {isModalOpen && (
        <QRCodeModal
          ref={modalQRCodeRef}
          download={downloadQrCode}
          sendEmail={sendEm}
          qrCodeData={getQRProfileUrl(profile.id)}
          isOpen={isModalOpen}
          setIsOpen={setIsOpen}
          afterOpenModal={afterOpenModal}
        />
      )}
    </>
  );
};

export default ProfileItem;
