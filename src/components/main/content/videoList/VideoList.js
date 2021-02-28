import React, { useContext } from 'react'
import ThemeContext from '../../../layout/ThemeContext'
import VideoItem from './VideoItem'

const VideoList = () => {

    const { videos, setCurrentVideo } = useContext(ThemeContext)

    return (
        <div>
            {videos.slice(1).map((video, ind) => {
                return (
                    <VideoItem video={video} setCurrentVideo={setCurrentVideo} key={ind} />
                )
            })}
        </div>
    )
}

export default VideoList
