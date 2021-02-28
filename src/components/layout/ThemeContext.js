import { createContext } from 'react'
import { themes } from './themes'

const ThemeContext = createContext(themes.dark)

export default ThemeContext