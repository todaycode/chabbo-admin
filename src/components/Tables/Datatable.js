import React from "react";
import { Line, Bar } from "react-chartjs-2";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Box, Button, Card, CardContent, CardHeader, Container, Grid, LinearProgress, FormControl, Select,
        Table, TableBody, TableContainer, TableCell, TableHead, TableRow, Typography, MenuItem, CardActions} from "@material-ui/core";
import {Pagination} from '@material-ui/lab'
import {ArrowDownward, ArrowUpward} from "@material-ui/icons";

import Header from "components/Headers/Header.js";
import Chart from "chart.js";
import { chartOptions, parseOptions, chartExample1, chartExample2,} from "variables/charts.js";
import componentStyles from "assets/theme/views/admin/dashboard.js";

const useStyles = makeStyles(componentStyles);

function DataTable({title, header, datas, limit, search, totalNum, render}) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeNav, setActiveNav] = React.useState(1);
  const [chartExample1Data, setChartExample1Data] = React.useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (index) => {
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  const createHeader = () => {
      return header.map((data, index) =>{
        return(
            <TableCell
                key={index}
                classes={{
                    root:classes.tableCellRoot + " " + classes.tableCellRootHead,
                }}
            >
                {data}
            </TableCell>
        )
      })
  }
  const createBody = () => {
      return datas.map((row, index) =>{
        return(
            <TableRow 
                key={index}
            >
                {createBodyRow(row)}
            </TableRow>
            
        )
      })
    }
  const createBodyRow =(row) => {
      if(Array.isArray(row))
        return row.map((data, index) =>{
            return(
                <TableCell
                    key={index}
                    classes={{
                        root:classes.tableCellRoot,
                    }}
                >
                    {data}
                </TableCell>
            )
        })
      else
        return header.map((col, index) =>{
            return(
                <TableCell
                    key={index}
                    classes={{
                        root:classes.tableCellRoot,
                    }}
                >
                    {row[col]}
                </TableCell>
            )
        })
      
   }
  return (
    <Card classes={{ root: classes.cardRoot }}>
        <CardHeader
            subheader={
            <Grid
                container
                component={Box}
                alignItems="center"
                justifyContent="space-between"
            >
                <Grid item xs="auto">
                    <Box
                        component={Typography}
                        variant="h3"
                        marginBottom="0!important"
                    >
                        {title}
                    </Box>
                </Grid>
                {render}
            </Grid>
            }
            classes={{ root: classes.cardHeaderRoot }}
        >
        </CardHeader>
        <TableContainer>
            <Box
            component={Table}
            alignItems="center"
            marginBottom="0!important"
            >
            <TableHead>
                <TableRow>
                    {createHeader()}
                </TableRow>
            </TableHead>
            <TableBody>
                    {createBody()}
            </TableBody>
            </Box>
        </TableContainer>
        <Box
            classes={{ root: classes.cardActionsRoot }}
            component={CardActions}
            justifyContent="flex-end"
        >
            <Pagination count={Math.ceil(totalNum/limit)} color="primary" variant="outlined" />
        </Box>
    </Card>
  );
}

export default DataTable;
