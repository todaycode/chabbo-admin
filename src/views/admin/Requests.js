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
function Requests() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeNav, setActiveNav] = React.useState(1);
  const [openNew, setOpenNew] = React.useState(false);

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
  return (
    <>
      
    </>
  );
}

export default Requests;
