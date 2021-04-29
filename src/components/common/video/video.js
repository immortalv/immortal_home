import React from "react";
import Plyr from 'plyr-react'
import 'plyr-react/dist/plyr.css'

// import ReactPlayer from 'react-player'

import './style.scss';

const getVideoSource = (src) => {
  const videoSrc = {
    type: "video",
    sources: [
      {
        src,
      }
    ]
  };

  return videoSrc
};

const Video = ({ url }) => {
  return (
    <Plyr source={getVideoSource(url)} />
  )
}

export default Video;