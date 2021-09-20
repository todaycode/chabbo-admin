import React from "react";
import { Line, Bar } from "react-chartjs-2";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Box, Button, Card, CardContent, CardHeader, Container, Grid, LinearProgress, FormControl, Select,
        Table, TableBody, TableContainer, TableCell, TableHead, TableRow, Typography, MenuItem} from "@material-ui/core";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ArrowUpward from "@material-ui/icons/ArrowUpward";

import Header from "components/Headers/Header.js";
import Chart from "chart.js";
import { chartOptions, parseOptions, chartExample1, chartExample2,} from "variables/charts.js";
import componentStyles from "assets/theme/views/admin/dashboard.js";

const useStyles = makeStyles(componentStyles);

function Dashboard() {
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
  return (
    <>
      <Header />
      {/* Page content */}
      <Container maxWidth={false} component={Box}marginTop="-6rem" classes={{ root: classes.containerRoot }}>
        <Grid container>
          <Grid item xs={12} xl={8} component={Box} marginBottom="3rem!important" classes={{ root: classes.gridItemRoot }} >
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
                        Total Users(All Platform)
                      </Box>
                    </Grid>
                    <Grid item xs="auto">
                      <Box
                        justifyContent="flex-end"
                        display="flex"
                        flexWrap="wrap"
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                        >
                          See all
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                }
                classes={{ root: classes.cardHeaderRoot }}
              >
              </CardHeader>
              <TableContainer>
                <Box component={Table} alignItems="center" marginBottom="0!important" >
                  <TableHead>
                    <TableRow>
                      <TableCell classes={{ root: classes.tableCellRoot + " " + classes.tableCellRootHead, }}>
                        No
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot + " " + classes.tableCellRootHead, }}>
                        User Name
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot + " " + classes.tableCellRootHead, }}>
                        Email
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot + " " + classes.tableCellRootHead, }}>
                        Project
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell classes={{ root: classes.tableCellRoot + " " + classes.tableCellRootBodyHead, }} component="th" variant="head" scope="row">
                        1
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        Mooni
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        Mooncode610@gmail.com
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        Sob
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell classes={{ root: classes.tableCellRoot + " " + classes.tableCellRootBodyHead, }} component="th" variant="head" scope="row">
                        2
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        Don
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        Mooncode610@gmail.com
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        Sob
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Box>
              </TableContainer>
            </Card>
          </Grid>
          <Grid item xs={12} xl={4}>
            <Card classes={{ root: classes.cardRoot }}>
              <CardHeader
                title={
                  <Box component="span" color={theme.palette.gray[600]}>
                    SOB 
                  </Box>
                }
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
                        Revenue
                      </Box>
                    </Grid>
                    <Grid item xs="auto">
                      <Box
                        justifyContent="flex-end"
                        display="flex"
                        flexWrap="wrap"
                        width="150px"
                      >
                        <FormControl variant="outlined" fullWidth>
                          <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              label="Project"
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>SOB</MenuItem>
                            <MenuItem value={20}>MintBird</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>
                  </Grid>
                }
                classes={{ root: classes.cardHeaderRoot }}
                titleTypographyProps={{
                  component: Box,
                  variant: "h6",
                  letterSpacing: ".0625rem",
                  marginBottom: ".25rem!important",
                  classes: {
                    root: classes.textUppercase,
                  },
                }}
                subheaderTypographyProps={{
                  component: Box,
                  variant: "h2",
                  marginBottom: "0!important",
                  color: "initial",
                }}
              ></CardHeader>
              <CardContent>
                <Box position="relative" height="350px">
                  <Bar
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

      </Container>
    </>
  );
}

export default Dashboard;
