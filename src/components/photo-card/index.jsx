import React from 'react'
import { Card, CardContent, CardMedia, CardActions, Typography, Button } from '@material-ui/core'

import useStyles from './styles'

const PhotoCard = () => {
  const styles = useStyles()

  return (
    <Card className={styles.card}>
      <CardMedia
        className={styles.cardMedia}
        title="Photo Challenge"
        image="https://source.unsplash.com/random"
      />
      <CardContent>
        <Typography variant="h5">
          Heading
        </Typography>
        <Typography variant="body1">
          This is a media card. You can use this section to describe the content.
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="primary">View</Button>
        <Button color="primary">Edit</Button>
      </CardActions>
    </Card>
  )
}

export default PhotoCard
