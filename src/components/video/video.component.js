import React from "react";
import Plyr from "plyr-react";
import clsx from "clsx";

import { getVideoSource } from "utils/video.utils";

import "plyr-react/dist/plyr.css";

const Video = ({ url, className }) => {
  console.log("url", url);
  return (
    <div className={clsx("video-component", className)}>
      <Plyr source={getVideoSource(url)} />
    </div>
  );
};

export default Video;
