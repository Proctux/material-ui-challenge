import { makeStyles } from '@material-ui/core/styles'

export default makeStyles (theme => ({
  container: {
    padding: theme.spacing(8, 0, 8),
  },
  description: {
    fontSize: '1.5rem',
    color: theme.palette.grey[500],
  },
  buttons: {
    marginTop: theme.spacing(2),
  },
  secondaryButton: {
    borderRadius: '1.5rem',
  },
  cardList: {
    marginTop: '6.625rem',
  }
}))
