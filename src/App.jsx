import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import theme from './theme'


import Header from './components/header'
import PhotoAlbum from './view/photo-album'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        <PhotoAlbum />
      </main>
    </ThemeProvider>
  )
}

export default App
