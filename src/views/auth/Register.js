import React, { Fragment, useState, useEffect } from 'react';
// @material-ui/core components
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import { useLocation, Route, Switch, Redirect, Link} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Checkbox from "@material-ui/core/Checkbox";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons components
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/Lock";
import School from "@material-ui/icons/School";
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthHeader from "components/Headers/AuthHeader.js";
import AuthFooter from "components/Footers/AuthFooter.js";
import snacbarStyles from "assets/theme/components/snackbar.js";
import SnackbarContent from "@material-ui/core/SnackbarContent";
// core components
import componentStyles from "assets/theme/views/auth/login.js";
import bg from 'assets/img/bg.jpg';

const useStyles = makeStyles(componentStyles);
const useSnackBarStyles = makeStyles(snacbarStyles);
function Register({ setAlert, register, isAuthenticated, alertText }) {
  const classes = useStyles();
  const classes_snackBar = useSnackBarStyles();
  const theme = useTheme();
  const mainContent = React.useRef(null);
  const location = useLocation();
  const errorSnackbarRootClasses = { root: classes_snackBar.errorSnackbar }
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });
  useEffect(() => {
    document.body.classList.add(classes.bgDefault);
    return () => {
      document.body.classList.remove(classes.bgDefault);
    };
  });
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    // if (password !== password2) {
    //   setAlert('Passwords do not match', 'danger');
    // } else {
      register({ name, email, password });
    // }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  
  return (
    <>
    <div className="main-content" ref={mainContent}
       style={{backgroundImage: `url(${bg})`, backgroundSize: "100% 100%"}}>
        <AuthHeader />
        {/* Page content */}
        <Container
          component={Box}
          maxWidth="xl"
          marginTop="-8rem"
          paddingBottom="3rem"
          position="relative"
          zIndex="101">
          <Box component={Grid} container justifyContent="center">
              <Grid item xs={12} lg={6} md={8}>
                <Card classes={{ root: classes.cardRoot }}>
                  <CardHeader
                    className={classes.cardHeader}
                    title={
                      <Box fontSize="100%" fontWeight="400" component="small" color={theme.palette.gray[600]} style={{fontSize:"30px"}}>
                      <b>Sign Up</b>
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
                    <Box
                      color={theme.palette.gray[600]}
                      textAlign="center"
                      marginBottom="1.5rem"
                      marginTop=".5rem"
                      fontSize="1rem"
                    >
                    {alertText.length > 0 ?(
                      <SnackbarContent
                      elevation={0}
                      classes={errorSnackbarRootClasses}
                      message={
                        <>
                          <strong>Error! &nbsp;&nbsp;</strong> {alertText[alertText.length-1].msg}!
                        </>
                      }/>) : (<div />)}
                    </Box>
                    <FormControl
                      variant="filled"
                      component={Box}
                      width="100%"
                      marginBottom="1.5rem!important"
                    >
                      <FilledInput
                        autoComplete="off"
                        type="text"
                        placeholder="UserName"
                        startAdornment={
                          <InputAdornment position="start">
                            <School />
                          </InputAdornment>
                        }
                        name="name"
                        value={name}
                        onChange={onChange}
                        required
                      />
                    </FormControl>
                    <FormControl
                      variant="filled"
                      component={Box}
                      width="100%"
                      marginBottom="1.5rem!important"
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
                      marginBottom="1.5rem!important"
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
                        required
                      />
                    </FormControl>
                    <Box textAlign="center" marginTop="1.5rem" marginBottom="1.5rem">
                      <Button color="primary" variant="contained" onClick={onSubmit}>
                        Create account
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
          </Box>
        </Container>
      </div>
      {/* <AuthFooter /> */}
    </>
  );
}
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  alertText: state.alert
});
export default connect(mapStateToProps, { setAlert, register })(Register);
