import React from 'react'
import { AppBar, Toolbar, Grid } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ShareIcon from '@material-ui/icons/Share';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles'

const Header = () => {
  const styles = useStyles()

  return (
    <AppBar position="relative">
      <Toolbar>
        <MenuIcon />
        <Grid container justify="flex-end" spacing={3}>
          <Grid item>
            <NotificationsIcon />
          </Grid>
          <Grid item>
            <ShareIcon />
          </Grid>
          <Grid item>
            <SearchIcon />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
