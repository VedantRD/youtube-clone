import React, { useState, useEffect } from 'react'
import './App.css'
import Layout from './components/layout/Layout'
import ThemeContext from './components/layout/ThemeContext'
import { themes } from './components/layout/themes'
import youtube from './components/api/youtube'

const App = () => {

    const [theme, setTheme] = useState(themes.light)
    const [videos, setVideos] = useState([])
    const [currentVideo, setCurrentVideo] = useState(null)

    const toggleTheme = () => {
        setTheme(theme === themes.dark ? themes.light : themes.dark)
    }

    const onSearch = (searchInput) => {
        youtube.get('search', { params: { q: searchInput } })
            .then(res => {
                setVideos(res.data.items)
                setCurrentVideo(res.data.items[1])
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        onSearch('Reactjs TUtorial')
    }, [])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, onSearch, videos, currentVideo, setCurrentVideo }}>
            <Layout />
        </ThemeContext.Provider>
    )
}

export default App
