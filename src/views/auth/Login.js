import React, { Fragment, useState, useRef } from "react";
import { connect } from 'react-redux';
// @material-ui/core components
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Checkbox from "@material-ui/core/Checkbox";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import CircularProgress from '@material-ui/core/CircularProgress';
// @material-ui/icons components
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/Lock";
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthHeader from "components/Headers/AuthHeader.js";
import AuthFooter from "components/Footers/AuthFooter.js";
import PropTypes from 'prop-types';
import { setAlert } from 'actions/alert';

import snacbarStyles from "assets/theme/components/snackbar.js";
import SnackbarContent from "@material-ui/core/SnackbarContent";

// core components
import componentStyles from "assets/theme/views/auth/login.js";
import { login } from '../../actions/auth';
import bg from 'assets/img/bg.jpg';

const useStyles = makeStyles(componentStyles);
const useSnackBarStyles = makeStyles(snacbarStyles);
function Login({ login, isAuthenticated, alertText }) {
  const classes           = useStyles();
  const classes_snackBar  = useSnackBarStyles();

  const [loading, setLoading]   = useState(false);
  const [formData, setFormData] = useState({email: '', password: ''});
  const { email, password }     = formData;

  const theme       = useTheme();
  const mainContent = useRef(null);
  const location    = useLocation();

  const errorSnackbarRootClasses = { root: classes_snackBar.errorSnackbar }

  React.useEffect(() => {
    document.body.classList.add(classes.bgDefault);
    return () => {
      document.body.classList.remove(classes.bgDefault);
    };
  });
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);
  React.useEffect(() => {
    if(loading && alertText.length != 0) setLoading(false)
  }, [alertText]);
  
  const onChange = e =>{
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const onSubmit = e => {
    e.preventDefault();
    login(email, password);
    setLoading(true)
  };

  if (isAuthenticated)  return <Redirect to="admin/index" />;

  return (
    <>
    <div className="main-content" ref={mainContent}
    style={{backgroundImage: `url(${bg})`, backgroundSize: "100% 100%"}}>
        <AuthHeader />
        <Container
          component={Box}
          maxWidth="xl"
          marginTop="-8rem"
          paddingBottom="3rem"
          position="relative"
          zIndex="101"
        >
          <Box component={Grid} container justifyContent="center">
            <Grid item xs={12} lg={5} md={7}>
              <Card classes={{ root: classes.cardRoot }}>
                <CardHeader
                  className={classes.cardHeader}
                  title={
                    <Box fontSize="100%" fontWeight="400" component="small" color={theme.palette.gray[600]} style={{fontSize:"30px"}}>
                      <b>Sign In</b>
                    </Box>
                  }
                  titleTypographyProps={{
                    component: Box,
                    textAlign: "center",
                    marginBottom: "1rem!important",
                    marginTop: ".5rem!important",
                    fontSize: "1rem!important",
                  }}
                  
                ></CardHeader>
                <CardContent classes={{ root: classes.cardContent }}>
                  <Box color={theme.palette.gray[600]} textAlign="center" marginBottom="1rem" marginTop=".5rem" fontSize="1rem" >
                  {alertText.length > 0 ?(
                    <SnackbarContent
                    elevation={0}
                    classes={errorSnackbarRootClasses}
                    message={
                      <div>
                        <strong>Error! &nbsp;&nbsp;</strong> {alertText[alertText.length-1].msg}!
                      </div>
                    }/>) : (<div />)}
                  
                    {/* <Box fontSize="80%" fontWeight="400" component="small">
                      Or sign in with credentials
                    </Box> */}
                  </Box>
                  <FormControl
                    variant="filled"
                    component={Box}
                    width="100%"
                    marginBottom="1rem!important"
                  >
                    <FilledInput
                      autoComplete="off"
                      type="email"
                      placeholder="Email"
                      startAdornment={
                        <InputAdornment position="start">
                          <Email />
                        </InputAdornment>
                      }
                      name="email"
                      value={email}
                      onChange={onChange}
                      required
                    />
                  </FormControl>
                  <FormControl
                    variant="filled"
                    component={Box}
                    width="100%"
                    marginBottom="1rem!important"
                  >
                    <FilledInput
                      autoComplete="off"
                      type="password"
                      placeholder="Password"
                      startAdornment={
                        <InputAdornment position="start">
                          <Lock />
                        </InputAdornment>
                      }
                      name="password"
                      value={password}
                      onChange={onChange}
                      minLength="6"
                    />
                  </FormControl>
                  {/* <FormControlLabel
                    value="end"
                    control={<Checkbox color="primary" />}
                    label="Remeber me"
                    labelPlacement="end"
                    classes={{
                      root: classes.formControlLabelRoot,
                      label: classes.formControlLabelLabel,
                    }}
                  /> */}
                  <Box textAlign="center" marginTop="1.5rem" marginBottom="1.5rem">
                    <Button color="primary" variant="contained" onClick={onSubmit}>
                      {loading ? (<CircularProgress size={20} style={{color: "white",marginRight:"10px"}}/>) : (<></>)}
                      Sign in
                    </Button>
                  </Box>
                </CardContent>
              </Card>
              <Grid container component={Box} marginTop="1rem">
                <Grid item xs={6} component={Box} textAlign="left">
                </Grid>
                {/* <Grid item xs={6} component={Box} textAlign="right">
                  <a href="/register" className={classes.footerLinks} >
                    <b>Create new account</b>
                  </a>
                </Grid> */}
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
      {/* <AuthFooter /> */}
    </>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  alertText: state.alert
});

export default connect(mapStateToProps, { login, setAlert })(Login);

