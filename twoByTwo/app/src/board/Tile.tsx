import { Paper, TextField } from "@material-ui/core";
import React from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    textField: {
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }
  }),
);

interface tileProps {
  value: number
}

const Tile = (props: tileProps) => {
  const classes = useStyles();

  return props.value === 0
    ? <TextField className={classes.textField} variant="outlined">{props.value}</TextField>
    : <Paper className={classes.paper}>{props.value}</Paper>
};

export default Tile;