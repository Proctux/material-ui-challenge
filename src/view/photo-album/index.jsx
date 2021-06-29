import React from 'react'
import { Container, Typography, Grid, Button } from '@material-ui/core'

import useStyles from './styles'

const PhotoAlbum = () => {
  const styles = useStyles()

  return (
    <Container maxWidth="sm" className={styles.container}>
      <Typography variant="h2" align="center" gutterBottom>
        Album layout
      </Typography>

      <Typography variant="body2" align="center" className={styles.description}>
        Something short and leading about the collection below—its contents, the creator, etc.
        Make it short and sweet, but not too short so folks don't simply skip over it entirely.
      </Typography>

      <Grid container spacing={2} justify="center" className={styles.buttons}>
        <Grid item>
          <Button color="primary" variant="contained">
            MAIN CALL TO ACTION
          </Button>
        </Grid>

        <Grid item>
          <Button color="primary" variant="outlined" className={styles.secondaryButton}>
            secondary action
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default PhotoAlbum
