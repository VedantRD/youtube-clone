import { CircularProgress, Grid } from '@material-ui/core'
import React, { useContext } from 'react'
import Navbar from '../main/common/Navbar'
import Content from '../main/content/Content'
import ThemeContext from './ThemeContext'

const Layout = () => {

    const { videos, currentVideo } = useContext(ThemeContext)

    return (
        <Grid justify='center' container spacing={0} style={{ height: '100%' }}>

            {/* header */}
            <Grid item xs={12} style={{ height: '5%' }}>
                <Navbar />
            </Grid>

            {/* body */}
            <Grid container style={{ paddingLeft: 50, paddingRight: 50, height: '85%', marginTop: 30 }} spacing={0}>
                {videos !== [] && currentVideo !== null ?
                    <Content />
                    :
                    <div style={{ position: 'fixed', left: '50%', top: '50%' }}>
                        <CircularProgress />
                    </div>
                }
            </Grid>

            {/* footer */}

        </Grid>
    )
}

export default Layout
