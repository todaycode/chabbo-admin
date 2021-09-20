import React from "react";
import { Line, Bar } from "react-chartjs-2";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Box, Button, Card, CardContent, CardHeader, Container, Grid, LinearProgress, FormControl, Select,
        Table, TableBody, TableContainer, TableCell, TableHead, TableRow, Typography, MenuItem, CardActions, 
        Switch} from "@material-ui/core";
        
import SwipeableViews from 'react-swipeable-views';
import {Pagination} from '@material-ui/lab'
import {ArrowDownward, ArrowUpward, CloudUpload, DateRange, Notifications} from "@material-ui/icons";

import Header from "components/Headers/Header.js";
import componentStyles from "assets/theme/views/admin/dashboard.js";
import Datatable from "components/Tables/Datatable"
import CheckIcon from '@material-ui/icons/Check';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabContext from "@material-ui/lab/TabContext";
import TabPanel from "@material-ui/lab/TabPanel";
const useStyles = makeStyles(componentStyles);

function UserLoginScreen() {
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
          Pull In Ad
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
                      icon={<Box component={CheckIcon} marginRight=".5rem" />}
                      label="Projects Applied"
                    />
                    <Tab
                      icon={<Box component={LocalLibraryIcon} marginRight=".5rem" />}
                      label="Login Library"
                    />
                  </Tabs>
                  <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                  >
                      <TabPanel value="0">
                        <Datatable 
                          title="Campaign" 
                          header={["Name","Base Project","All Impressions","All Clicks","All Conv %", "Created", "Rotation", "Status", "Action"]} 
                          datas={[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]]} 
                          limit={10} 
                          search="" 
                          totalNum={10}
                          render={CampaignHeaderRender}
                           />
                      </TabPanel>
                      <TabPanel value="1">
                        <Datatable 
                          title="Projects Applied" 
                          header={["Name","Created","Include"]} 
                          datas={[{Name:"1",Created:"2",Include:"3"},[1,2,3]]} 
                          limit={10} 
                          search="" 
                          totalNum={10}
                          render={""}
                           />
                      </TabPanel>
                      <TabPanel value="2">
                        <Datatable 
                          title="Login Library" 
                          header={["Name","Base Project","Impressions","Clicks","Conv %","Created","Action"]} 
                          datas={[[1,2,3,4,5,6,7],[1,2,3,4,5,6,7]]} 
                          limit={10} 
                          search="" 
                          totalNum={10}
                          render={""}
                          />
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

export default UserLoginScreen;
