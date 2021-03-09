import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Button, AddFile } from "components/common";

import "./style.scss";

const AddMedia = ({ onSubmit, onSkip, profile }) => {
  const [videos, setVideos] = useState([]);
  const [audios, setAutdio] = useState([]);

  useEffect(() => {
    const { video, audio } = profile;

    if (video) setVideos(video);
    if (audio) setAutdio(audio);
  }, []);

  const setPhotos = () => {
    onSubmit({
      videos: videos,
      audio: audios,
    });
  };

  return (
    <>
      <h1 className="title add-profile__title">Додайте відео та аудіо</h1>

      <div className="add-profile__media-container">
        <span className="add-file__label">Відео</span>
        <div className="add-file-block add-file-video">
          <AddFile
            files={videos}
            setFiles={setVideos}
            multipleFiles={true}
            maxFiles={15}
            accept="video/*"
          />
        </div>
        <span className="add-file__label">Аудіо</span>
        <div className="add-file-block add-file-audio">
          <AddFile
            files={audios}
            setFiles={setAutdio}
            multipleFiles={true}
            maxFiles={15}
            accept="audio/*"
          />
        </div>
      </div>

      <Button onClick={onSkip} className="add-profile__btn btn--skip">
        Пропустити
      </Button>

      <Button onClick={setPhotos} type="secondary" className="add-profile__btn">
        Далі
      </Button>
    </>
  );
};

export default AddMedia;
