import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  buttonText: {
    color: theme.palette.secondary.dark,
  },
  button: {
    zIndex: 1,
    position: 'absolute',
    paddingTop: 2,
    color: 'gray',
    textAlign: 'center'
  },
  iconButton: {
    fontSize: 'medium',
    color: 'gray'
  },
  container: {
    margin: 10,
    borderSpacing: 1,
  },
  paper: {
    padding: 20,
    textAlign: 'center',
    backgroundColor: 'aqua',
  },
  textField: {
    textAlign: 'center',
    border: 2,
    borderColor: '#212121',
    backgroundColor: 'aqua',
  },
}));
