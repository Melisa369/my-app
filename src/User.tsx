import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Style.css'
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  table: {
    maxWidth: '650%',  
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function createData(username: string, comment: string) {
  return { username, comment };
}

const rows = [
  createData('mel200','I know quite a few writers whose abandoned personal blogs are languishing in some dark corner of the Internet. These writers launched their blogs with joy and enthusiasm, but their momentum fizzled because they found it too hard to keep coming up with inspiring topics. Don’t let this happen to you. Here are some great ways to choose a topic that will resonate with your audience.'),
  createData('Ice60','You’ve got a topic. Awesome! Now, what’s your angle? Avoid a broad approach—get specific. You’ll get overwhelmed if you pick a huge subject like organic vegetable gardening and try to cover it all. Instead, go with “10 Budget-Friendly Ways to Start an Organic Vegetable Garden.”'),
  createData('air1','Whenever my dad had a disagreement with someone, he’d make his case and then storm off, but inevitably come back minutes later, one finger raised in proclamation, saying, “And another thing!” He did this so often that it became a running family joke.'),
 
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <br></br>
          <h2 className="h2">Admin Panel</h2>
          <br></br>
          <br></br>
          <br></br>
          <TableRow>
            <TableCell>User Name</TableCell>
            <TableCell align="left">Comment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.username}>
              <TableCell component="th" scope="row">
                {row.username}
              </TableCell>
              <TableCell >{row.comment}</TableCell>
              <Button
            type="submit"
            fullWidth
            color="secondary"
            size="medium"
            className={classes.submit}
          >
           DELETE
          </Button>
          <Button
            type="submit"
            fullWidth
            color="primary"
            size="medium"
            className={classes.submit}
          >
           EDIT
          </Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
