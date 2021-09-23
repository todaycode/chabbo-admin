import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Box, Button, Card, CardContent, CardHeader, Container, Grid, LinearProgress, FormControl, Select,
        Table, TableBody, TableContainer, TableCell, TableHead, TableRow, Typography, MenuItem, CardActions} from "@material-ui/core";
import {Pagination} from '@material-ui/lab'
import {ArrowDownward, ArrowUpward} from "@material-ui/icons";

import Header from "components/Headers/Header.js";
import componentStyles from "assets/theme/views/admin/dashboard.js";

const useStyles = makeStyles(componentStyles);

function Creators() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeNav, setActiveNav] = React.useState(1);
  return (
    <>
      {/* Page content */}
      <Container maxWidth={false} component={Box}marginTop="-6rem" classes={{ root: classes.containerRoot }}>
        <Grid container>
          <Grid item xs={12} xl={12} component={Box} marginBottom="3rem!important" classes={{ root: classes.gridItemRoot }} >
          </Grid>
        </Grid>

      </Container>
    </>
  );
}

export default Creators;
