import React from 'react'
import { Grid } from '@material-ui/core'
import VideoPlayer from './videoPlayer/VideoPlayer'
import VideoList from './videoList/VideoList'

const Content = () => {
    return (
        <>
            <Grid item xs={12} md={8} style={{ paddingLeft: 10, paddingRight: 15, height: '100%' }}>
                <VideoPlayer />
            </Grid>
            <Grid item xs={12} md={4} style={{ paddingLeft: 15, paddingRight: 10, height: '100%' }}>
                <VideoList />
            </Grid>
        </>
    )
}

export default Content
