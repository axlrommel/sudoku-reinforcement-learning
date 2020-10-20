import { Grid, IconButton, Paper, TextField } from '@material-ui/core';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import LooksOneIcon from '@material-ui/icons/LooksOne';
import LooksTwoIcon from '@material-ui/icons/LooksTwo';
import Looks3Icon from '@material-ui/icons/Looks3';
import Looks4Icon from '@material-ui/icons/Looks4';
import React from 'react';
import { TileValue } from '../types/sudokuGame';
import { useStyles } from './styles';

interface tileProps {
  board: number[][];
  row: number;
  column: number;
  onChange: React.Dispatch<TileValue>;
  getHint: React.Dispatch<TileValue>;
  hintResult?: TileValue;
}

const Tile = (props: tileProps) => {
  const classes = useStyles();
  const val = props.board[props.row][props.column];
  const hintForTile = (props?.hintResult?.col === props.column && props?.hintResult?.row === props.row) ? props?.hintResult?.value : 0;
  return (
    <Grid item xs={1}>
      {val === 0 ? (
        <div>
          {hintForTile ?
            <IconButton className={classes.button}>
              {hintForTile === 1 ? <LooksOneIcon />
                : hintForTile === 2 ? <LooksTwoIcon />
                  : hintForTile === 3 ? <Looks3Icon />
                    : <Looks4Icon />}
            </IconButton> :
            <IconButton onClick={(event) => props.getHint({ row: props.row, col: props.column, value: 0 })} className={classes.button}>
              <SystemUpdateAltIcon className={classes.iconButton} />
            </IconButton>}
          <TextField
            onChange={(event) =>
              props.onChange({ row: props.row, col: props.column, value: parseInt(event.target.value) })
            }
            className={classes.textField}
            variant="outlined"
          >
            {val}
          </TextField>
        </div>
      ) : (
          <Paper className={classes.paper}>{val}</Paper>
        )
      }
    </Grid >
  );
};

export default Tile;
