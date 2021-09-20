import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Box, Button, Card, CardContent, CardHeader, Container, Grid, LinearProgress, FormControl, Select,
        Table, TableBody, TableContainer, TableCell, TableHead, TableRow, Typography, MenuItem, Tooltip} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CallMissedOutgoingIcon from '@material-ui/icons/CallMissedOutgoing';
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Header from "components/Headers/Header.js";
import componentStyles from "assets/theme/views/admin/dashboard.js";
import Checkbox from "@material-ui/core/Checkbox";
import FilledInput from "@material-ui/core/FilledInput";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Slide from "@material-ui/core/Slide";
// @material-ui/icons components
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/Lock";
import Datatable from "components/Tables/Datatable"

const useStyles = makeStyles(componentStyles);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
function Projects() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeNav, setActiveNav] = React.useState(1);
  const [openNew, setOpenNew] = React.useState(false);


  const handleClickNew = () => {
    setOpenNew(true);
  };

  const handleClose = () => {
    setOpenNew(false);
  };

  const handleCreate = () => {

  }
  
  const cardClasses = { root: classes.cardRoot };
  const buttonClasses = { root: classes.buttonRoot };
  const cardContentClasses = { root: classes.cardContent };
  const checkboxClasses = {
    root: classes.formControlLabelRoot,
    label: classes.formControlLabelLabel,
  };
  const titleTypographyProps = {
    component: Box,
    textAlign: "center",
    marginBottom: "1rem!important",
    marginTop: ".5rem!important",
    fontSize: "1rem!important",
  }
  const tableHeaderRender = (
    <Grid item xs="auto">
      <Box
        justifyContent="flex-end"
        display="flex"
      >
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={handleClickNew}
        >
          Create New Project
        </Button>
      </Box>
    </Grid>)
  return (
    <>
      <Dialog
          maxWidth="xs"
          open={openNew}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
         
        >
        <DialogContent style={{padding: "unset"}}>
          <Card classes={cardClasses}>
            <CardHeader
              className={classes.cardHeader}
              title={
                <Box
                  fontSize="20px"
                  fontWeight="400"
                  component="small"
                  color={theme.palette.gray[600]}
                >
                  Create New Project
                </Box>
              }
              titleTypographyProps={titleTypographyProps}
            ></CardHeader>
            <CardContent classes={cardContentClasses}>
              <Box
                color={theme.palette.gray[600]}
                textAlign="center"
                marginBottom="1rem"
                marginTop=".5rem"
                fontSize="1rem"
              >
                <Box fontSize="80%" fontWeight="400" component="small">
                  Write project name that you want to create and press Create button.
                </Box>
              </Box>
              <FormControl
                variant="filled"
                component={Box}
                width="100%"
                marginBottom="1rem!important"
              >
                <FilledInput
                  autoComplete="off"
                  placeholder="Project Name"
                />
              </FormControl>
              <Box textAlign="center" marginTop="1.5rem" marginBottom="1.5rem">
                <Button color="primary" variant="contained" onClick={handleCreate}>
                  Create
                </Button>
              </Box>
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>
      <Header />
      {/* Page content */}
      <Container maxWidth={false} component={Box}marginTop="-6rem" classes={{ root: classes.containerRoot }}>
        
        <Grid container>
          <Grid item xs={12} xl={12} component={Box} marginBottom="3rem!important" classes={{ root: classes.gridItemRoot }} >
            {/* <Card classes={{ root: classes.cardRoot }}>
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
                          onClick={handleClickNew}
                        >
                          Create New Projects
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
                        Name
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot + " " + classes.tableCellRootHead, }} align="right">
                        Action
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell classes={{ root: classes.tableCellRoot + " " + classes.tableCellRootBodyHead, }} component="th" variant="head" scope="row">
                        1
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        SOB
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }} align="right">
                        <Tooltip title="Delete" placement="bottom-start">
                            <IconButton aria-label="delete" style={{transform: "scale(1.8)", marginRight: "20px"}}>
                                <DeleteIcon fontSize="large" style={{color: "#dc3545"}}/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Enter to project" placement="bottom-start">
                            <IconButton aria-label="delete" style={{transform: "scale(1.8)"}}>
                                <CallMissedOutgoingIcon fontSize="large" style={{ color: "rgb(69 191 7 / 75%)" }}/>
                            </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell classes={{ root: classes.tableCellRoot + " " + classes.tableCellRootBodyHead, }} component="th" variant="head" scope="row">
                        2
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }} >
                        MintBird
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }} align="right">
                        <Tooltip title="Delete" placement="bottom-start">
                            <IconButton aria-label="delete" style={{transform: "scale(1.8)", marginRight: "20px"}}>
                                <DeleteIcon fontSize="large" style={{color: "#dc3545"}}/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Enter to project" placement="bottom-start">
                            <IconButton aria-label="delete" style={{transform: "scale(1.8)"}}>
                                <CallMissedOutgoingIcon fontSize="large" style={{ color: "rgb(69 191 7 / 75%)" }}/>
                            </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Box>
              </TableContainer>
            </Card> */}
            <Datatable 
              title="Total Users(All Platform)" 
              header={["Name", "Action"]} 
              datas={[["Mooni Don",""],["TodayCode",""]]} 
              limit={10} 
              search="" 
              totalNum={10}
              render={tableHeaderRender}
              />
          </Grid>
        </Grid>

      </Container>
    </>
  );
}

export default Projects;
