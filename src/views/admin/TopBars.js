import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Box, Button, Card, CardContent, CardHeader, Container, Grid, LinearProgress, FormControl, Select,
        Table, TableBody, TableContainer, TableCell, TableHead, TableRow, Typography, MenuItem, CardActions, 
        Switch, Paper, Tabs, Tab} from "@material-ui/core";
        
import SwipeableViews from 'react-swipeable-views';
import {Pagination} from '@material-ui/lab'
import {ArrowDownward, ArrowUpward, CloudUpload, DateRange, Notifications, LocalLibrary, Check} from "@material-ui/icons";
import {TabContext, TabPanel} from "@material-ui/lab";

import Header from "components/Headers/Header.js";
import componentStyles from "assets/theme/views/admin/dashboard.js";
const useStyles = makeStyles(componentStyles);

function TopBars() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeNav, setActiveNav] = React.useState(1);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const CampaignHeaderRender = (
    <Grid item xs="auto">
      <Box
        justifyContent="flex-end"
        display="flex"
      >
        <Box
          justifyContent="flex-end"
          alignItems="center"
          display="flex"
          marginRight="20px"
        >
          <Switch
            color="primary"
            name="checkedB"
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          size="small"
        >
          Pull In TopBar
        </Button>
      </Box>
    </Grid>)

  return (
    <>
      <Header />
      {/* Page content */}
      <Container maxWidth={false} component={Box} marginTop="-6rem" classes={{ root: classes.containerRoot }}>
        <Grid container>
            <Grid item xs={12} xl={12} component={Box} marginBottom="3rem!important" classes={{ root: classes.gridItemRoot }} >
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
                          Global Logic Screen
                        </Box>
                      </Grid>
                      
                      <Grid item xs="auto">
                        <Box
                          justifyContent="flex-end"
                          display="flex"
                          width="400px"
                        >
                          <Box
                            component={Typography}
                            variant="h3"
                            marginBottom="0!important"
                            justifyContent="center"
                            display="flex"
                            alignItems="center"
                          >
                              Project&nbsp;:
                          </Box>
                          <FormControl variant="outlined" fullWidth style={{marginRight: "20px", marginLeft:"20px", width:"60%"}}>
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
                >
                </CardHeader>
                <TabContext value={value + ""}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                  >
                    <Tab
                      icon={<Box component={CloudUpload} marginRight=".5rem" />}
                      label="Campaign"
                    />
                    <Tab
                      icon={<Box component={Check} marginRight=".5rem" />}
                      label="Projects Applied"
                    />
                    <Tab
                      icon={<Box component={LocalLibrary} marginRight=".5rem" />}
                      label="Login Library"
                    />
                  </Tabs>
                  <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                  >
                      <TabPanel value="0">
                      </TabPanel>
                      <TabPanel value="1">
                      </TabPanel>
                      <TabPanel value="2">
                      </TabPanel>
                  </SwipeableViews>
                </TabContext>
              </Card>
            </Grid>
          </Grid>
      
      
        {/*  */}
      </Container>
    </>
  );
}

export default TopBars;
