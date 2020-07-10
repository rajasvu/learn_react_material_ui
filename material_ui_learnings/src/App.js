import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Grid container spacing={0} direction='column'>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3 Item1</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3 Item2</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3 Item3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3 Item4</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3 Item5</Paper>
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
