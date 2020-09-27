import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import { PropsType } from './TableContainer';
import { TableType } from '../../types/types';

const useStyles = makeStyles({
    table: {
        maxHeight: 440
    },
    grid: {
        flexBasis: 0
    },
    root: {
        height: '100vh'
    },
    tableBody: {
        height: '400px'
    },
    container: {
        maxHeight: 440,
    }
});


const Tables: React.FC<PropsType> = ({asks, bids}) => {
    const classes = useStyles();

    return (
        <Grid container spacing={2} direction='row' justify='center' alignItems='center' className={ classes.root }>
            <Grid item xs={12} className={ classes.grid }>
                <TableItem data={ bids } />
            </Grid>
            <Grid item xs={12} className={ classes.grid }>
                <TableItem data={ asks } />
            </Grid>
        </Grid>
    );
}

type TableProps = {
    data: Array<TableType>
}

const TableItem: React.FC<TableProps> = ({data}) => {
    const classes = useStyles();

    return (
        <TableContainer className={classes.container}>
          <Table stickyHeader className={classes.table} size="small" aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>Amount</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={ classes.tableBody }>
              {data.map((tableItem) => (
                <TableRow key={tableItem.id}>
                  <TableCell component="th" scope="row">
                    {tableItem.amount}
                  </TableCell>
                  <TableCell align="right">{tableItem.price}</TableCell>
                  <TableCell align="right">{tableItem.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    );
}

export default Tables;