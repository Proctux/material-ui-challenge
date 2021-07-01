import React from 'react'
import { Container, Typography, Grid, Button } from '@material-ui/core'

import PhotoCard from '../../components/photo-card'

import useStyles from './styles'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const PhotoAlbum = () => {
  const styles = useStyles()

  return (
    <>
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
      <Container maxWidth="md">
        <Grid container spacing={3} className={styles.cardList}>
          {cards.map(card => (
            <Grid key={card} item xs={12} sm={6} md={4}>
              <PhotoCard />
            </Grid>
          ))}
        </Grid>
      </Container >
    </>
  )
}

export default PhotoAlbum
