import { CircularProgress, Paper, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import ThemeContext from '../../../layout/ThemeContext'

const VideoPlayer = () => {

    const { currentVideo } = useContext(ThemeContext)
    console.log(currentVideo)

    let videoSrc = `https://youtube.com/embed/${currentVideo.id.videoId ? currentVideo.id.videoId : currentVideo.id.playlistId}`
    // console.log(videoSrc)

    return (
        videoSrc !== '' ?
            <>
                <Paper elevation={3} style={{ height: 500 }}>
                    <iframe height='100%' width='100%' frameBorder={0} title='Video Player' src={videoSrc} />
                </Paper>
                <Paper elevation={3} style={{ padding: 10 }}>
                    <Typography variant='h5'>{currentVideo.snippet.title}</Typography>
                    <Typography variant='subtitle1'>{currentVideo.snippet.channelTitle}</Typography>
                    <Typography variant='subtitle2'>{currentVideo.snippet.description}</Typography>
                </Paper>
            </>
            :
            <CircularProgress />
    )
}

export default VideoPlayer
