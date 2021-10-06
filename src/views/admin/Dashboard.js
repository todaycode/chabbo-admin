import React from "react";
import { Line, Bar } from "react-chartjs-2";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Box, Button, Card, CardContent, CardHeader, Container, Grid, LinearProgress, FormControl, Select,
        Table, TableBody, TableContainer, TableCell, TableHead, TableRow, Typography, MenuItem} from "@material-ui/core";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ArrowUpward from "@material-ui/icons/ArrowUpward";

import Header from "components/Headers/Header.js";

import componentStyles from "assets/theme/views/admin/dashboard.js";

const useStyles = makeStyles(componentStyles);

function Dashboard() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeNav, setActiveNav] = React.useState(1);
  const [chartExample1Data, setChartExample1Data] = React.useState("data1");

  const toggleNavs = (index) => {
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
      {/* Page content */}
      <Container maxWidth={false} component={Box} marginTop="100px" classes={{ root: classes.containerRoot }}>
        <Grid container>
          <Grid item xs={12} xl={8} component={Box} marginBottom="3rem!important" classes={{ root: classes.gridItemRoot }} >
            This is comming!
          </Grid>
        </Grid>

      </Container>
    </>
  );
}

export default Dashboard;
