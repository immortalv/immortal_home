import React from "react";
import Plyr from 'plyr-react'
import 'plyr-react/dist/plyr.css'

import { getVideoSource } from 'utils/video.utils'

const Video = ({ url, className }) => {
  return (
    <div className={className}>
      <Plyr source={getVideoSource(url)} />
    </div>
  )
}

export default Video;