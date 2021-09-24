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
import MaterialTable from 'material-table';

const useStyles = makeStyles(componentStyles);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
function Requests() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeNav, setActiveNav] = React.useState(1);

  const columns = [
    { title: language.first_name, field: 'firstName', initialEditValue: '' },
    { title: language.last_name, field: 'lastName', initialEditValue: '' },
    { title: language.email, field: 'email'},
    { title: language.mobile, field: 'mobile'},
    { title: 'Photo',  field: 'image', render: rowData => rowData.image?<img alt='Profile' src={rowData.image} style={{width: 50,borderRadius:'50%'}}/>:null, editable:'never'},
    { title: 'CreatedAt', field: 'created_on', editable:'never', defaultSort:'desc',render: rowData => rowData.createdAt?new Date(rowData.createdAt).toLocaleString(dateStyle):null},
    { title: "Username", field: 'username', initialEditValue: '' },
    { title: "Email", field: 'email', initialEditValue: '' },
    { title: "Category", field: 'vehicleNumber', initialEditValue: '' },
    { title: language.other_info, field: 'other_info', initialEditValue: '' },
    { title: language.car_type, field: 'carType',lookup: cars},
    { title: language.account_approve,  field: 'approved', type:'boolean', initialEditValue: true },
    { title: language.driver_active,  field: 'driverActiveStatus', type:'boolean', initialEditValue: true},
    { title: language.lisence_image,  field: 'licenseImage',render: rowData => rowData.licenseImage?<img alt='License' src={rowData.licenseImage} style={{width: 100}}/>:null, editable:'never'},
    { title: language.wallet_balance,  field: 'walletBalance', type:'numeric' , editable:'never', initialEditValue: 0},
    { title: language.signup_via_referral, field: 'signupViaReferral', editable:'never' },
    { title: language.referralId,  field: 'referralId', editable:'never', initialEditValue: '' },
    { title: language.bankName,  field: 'bankName', initialEditValue: '' },
    { title: language.bankCode,  field: 'bankCode', initialEditValue: '' },
    { title: language.bankAccount,  field: 'bankAccount', initialEditValue: '' },
    { title: language.queue,  field: 'queue', type:'boolean', initialEditValue: false },
];
  return (
    <>
      <Container maxWidth={false} component={Box}marginTop="100px" classes={{ root: classes.containerRoot }}>
        <Grid container>
          <Grid item xs={12} xl={12} component={Box} marginBottom="3rem!important" classes={{ root: classes.gridItemRoot }} >
            This is request
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Requests;
