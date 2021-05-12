import React from "react";
import Plyr from 'plyr-react'
import 'plyr-react/dist/plyr.css'

import { getVideoSource } from 'utils/video.utils'

import './style.scss';

const Video = ({ url }) => {
  return (
    <Plyr source={getVideoSource(url)} />
  )
}

export default Video;