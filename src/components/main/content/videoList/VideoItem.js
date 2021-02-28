import { Grid, Typography } from '@material-ui/core'
import React from 'react'

const VideoItem = ({ video, setCurrentVideo }) => {
    return (
        <Grid container style={{ marginBottom: 5, cursor: 'pointer' }} onClick={() => setCurrentVideo(video)}>
            <Grid item xs={6}>
                <img src={video.snippet.thumbnails.medium.url} style={{ height: 120, width: '100%' }} alt='thumbnail'></img>
            </Grid>
            <Grid item xs={6} style={{ paddingLeft: 10 }}>
                <Typography variant='h6' style={{ marginBottom: 4, lineHeight: 1.3 }}>{video.snippet.title}</Typography>
                <Typography variant='subtitle1'>{video.snippet.channelTitle}</Typography>
            </Grid>
        </Grid>
    )
}

export default VideoItem
