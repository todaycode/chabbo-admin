import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Box, Button, Card, CardContent, CardHeader, Container, Grid, LinearProgress, FormControl, Select,
        Table, TableBody, TableContainer, TableCell, TableHead, TableRow, Typography, MenuItem, CardActions} from "@material-ui/core";
import {Pagination} from '@material-ui/lab'
import {ArrowDownward, ArrowUpward} from "@material-ui/icons";

import Header from "components/Headers/Header.js";
import componentStyles from "assets/theme/views/admin/dashboard.js";

const useStyles = makeStyles(componentStyles);

function StaffManagement() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeNav, setActiveNav] = React.useState(1);
  return (
    <>
      <Header />
      {/* Page content */}
      <Container maxWidth={false} component={Box}marginTop="-6rem" classes={{ root: classes.containerRoot }}>
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
                                Staff Member
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
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                style={{width: "30%"}}
                            >
                            Add Member
                            </Button>
                            </Box>
                        </Grid>
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
                            <TableCell
                                classes={{
                                root:
                                    classes.tableCellRoot + " " + classes.tableCellRootHead,
                                }}
                            >
                                No
                            </TableCell>
                            <TableCell
                                classes={{
                                root:
                                    classes.tableCellRoot + " " + classes.tableCellRootHead,
                                }}
                            >
                                User Name
                            </TableCell>
                            <TableCell
                                classes={{
                                root:
                                    classes.tableCellRoot + " " + classes.tableCellRootHead,
                                }}
                            >
                                Date Added
                            </TableCell>
                            <TableCell
                                classes={{
                                root:
                                    classes.tableCellRoot + " " + classes.tableCellRootHead,
                                }}
                            >
                                User Type
                            </TableCell>
                            <TableCell
                                classes={{
                                root:
                                    classes.tableCellRoot + " " + classes.tableCellRootHead,
                                }}
                            >
                                Assigned Projects
                            </TableCell>
                            <TableCell
                                classes={{
                                root:
                                    classes.tableCellRoot + " " + classes.tableCellRootHead,
                                }}
                            >
                                # Logins
                            </TableCell>
                            <TableCell
                                classes={{
                                root:
                                    classes.tableCellRoot + " " + classes.tableCellRootHead,
                                }}
                            >
                                Last Login
                            </TableCell>
                            <TableCell
                                classes={{
                                root:
                                    classes.tableCellRoot + " " + classes.tableCellRootHead,
                                }}
                            >
                                Activity
                            </TableCell>
                            <TableCell
                                classes={{
                                root:
                                    classes.tableCellRoot + " " + classes.tableCellRootHead,
                                }}
                            >
                                Status
                            </TableCell>
                            <TableCell
                                classes={{
                                root:
                                    classes.tableCellRoot + " " + classes.tableCellRootHead,
                                }}
                            >
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell classes={{ root: classes.tableCellRoot }}>
                                1
                            </TableCell>
                            <TableCell classes={{ root: classes.tableCellRoot }}>
                                Mooni Don
                            </TableCell>
                            <TableCell classes={{ root: classes.tableCellRoot }}>
                                2021-9-18
                            </TableCell>
                            <TableCell classes={{ root: classes.tableCellRoot }}>
                                Admin
                            </TableCell>
                            <TableCell classes={{ root: classes.tableCellRoot }}>
                                SOB
                            </TableCell>
                            <TableCell classes={{ root: classes.tableCellRoot }}>
                                TRUE
                            </TableCell>
                            <TableCell classes={{ root: classes.tableCellRoot }}>
                                2021-9-18
                            </TableCell>
                            <TableCell classes={{ root: classes.tableCellRoot }}>
                                Activate
                            </TableCell>
                            <TableCell classes={{ root: classes.tableCellRoot }}>
                                Good
                            </TableCell>
                            <TableCell classes={{ root: classes.tableCellRoot }}>
                                Action
                            </TableCell>
                        </TableRow>
                    </TableBody>
                    </Box>
                </TableContainer>
                <Box
                    classes={{ root: classes.cardActionsRoot }}
                    component={CardActions}
                    justifyContent="flex-end"
                >
                    <Pagination count={3} color="primary" variant="outlined" />
                </Box>
                </Card>
          </Grid>
        </Grid>

      </Container>
    </>
  );
}

export default StaffManagement;
