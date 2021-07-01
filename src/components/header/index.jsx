import React from 'react'
import { AppBar, Toolbar, Grid, IconButton } from '@material-ui/core'
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
        <IconButton>
          <MenuIcon className={styles.icon}/>
        </IconButton>
        <Grid container justify="flex-end" spacing={3}>
          <Grid item>
            <IconButton>
              <NotificationsIcon className={styles.icon}/>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <ShareIcon className={styles.icon}/>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <SearchIcon className={styles.icon}/>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
