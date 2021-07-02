import logo from './logo.svg'
import './App.css'
import TracksContainer from './components/TracksContainer'
import React from 'react'
import styled from '@emotion/styled'

const theme = {
  background: '#0a2239ff',
  primary: '#53a2beff',
  secundary: '#1d84b5ff',
  accent: '#8b1e3fff',
}

export const ThemeContext = React.createContext()

const Base = styled.div``

function App() {
  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <TracksContainer />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
