import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { YouTube as YoutubeIcon, Brightness6 as ChangeThemeIcon } from '@material-ui/icons'
import ThemeContext from '../../layout/ThemeContext'
import CustomSearchBar from './SearchBar'

const Navbar = () => {

    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <AppBar position="static" style={theme}>
            <Toolbar>
                {/* logo */}
                <IconButton color='inherit' style={{ padding: 5 }}>
                    <YoutubeIcon fontSize='large' style={{ color: '#FF0000' }} />
                </IconButton>
                <Typography variant="h6" style={{ flex: 1 }}>
                    YourTube
                </Typography>

                {/* serchbar */}
                <CustomSearchBar />

                {/* change theme button */}
                <span style={{ flex: 1, textAlign: 'right' }}>
                    <IconButton color='inherit' onClick={toggleTheme}>
                        <ChangeThemeIcon color='inherit' />
                    </IconButton>
                </span>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
