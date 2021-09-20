import React from 'react'
import { 
  Paper, 
  makeStyles, 
  Typography, 
  Grid,
  Icon
} from '@material-ui/core'
import LockIcon from '@material-ui/icons/Lock';
import img from 'assets/img/img1.png'
import img_certify from 'assets/img/certify.png'
import img_avatar from 'assets/img/avatar.png'
import unlock from 'assets/img/unlock.png'
const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    page: {
      display:'flex',
      flexDirection: 'row',
      paddingLeft: "25px",
      paddingTop: "9px",
      paddingRight: "9px",
    },
    paper: {
      width: "264px",
      float: "right",
      margin: "5px"
    },
    pageIcon: {
        width: "40px",
        alignItems: "center",
        display: "flex",
    },
    pageContent: {
        padding:theme.spacing(1 )
    },
    lockIcon: {
      fontSize: "20px"
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
}));

function GetStart() {
    const classes = useStyles();
  
      
    return (
        <div style={{ padding:"25px", backgroundColor: "#effef4" }} name="main">
            <Grid container id="header">
                <Grid item xs={6}>
                    <Typography variant="h2">
                      Level1-MintBird Basic
                    </Typography>
                    <Typography variant="h5">
                      We're going to reward you for using or platform! The rewards below will be added to your account when you complete these steps.
                    </Typography>
                    <div className={classes.grow} />
                    <Typography variant="h3">
                      <b>Congratulations,</b> Level 1 is complete
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                  <div style={{display: "flex",flexDirection: "column",float: "right"}}>
                    <div name="step">
                      <div id="stepper-mark"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="CheckCircleIcon" style={{height: "25px", width: "unset",color: "rgb(25, 118, 210)",fill: "currentColor"}}><path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"></path></svg></div>
                      <div  style={{display: "flex",flexDirection: "row"}}>
                        <div id="stepper-bar" style={{display: "block",borderColor: "rgb(189, 189, 189)",borderLeftStyle: "solid",borderLeftWidth: "1px",minHeight: "24px", marginRight: "20px", marginLeft: "12px"}}
                        ></div>
                        <Paper elevation={3} square className={classes.paper}>
                          <div className={classes.page}>
                            <div className={classes.pageContent}>
                                <Typography
                                    variant="h3"
                                    component="div"
                                >
                                Mobile App Access   
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    component="div"
                                >
                                Click here to Access    
                                </Typography>
                            </div>
                            <div className={classes.pageIcon}>
                              <img src={unlock} />
                            </div>
                          </div>
                        </Paper>
                      </div>
                    </div>
                    <div name="step">
                      <div id="stepper-mark"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="CheckCircleIcon" style={{height: "25px", width: "unset",color: "rgb(25, 118, 210)",fill: "currentColor"}}><path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"></path></svg></div>
                      <div  style={{display: "flex",flexDirection: "row"}}>
                        <div id="stepper-bar" style={{display: "block",borderColor: "rgb(189, 189, 189)",borderLeftStyle: "solid",borderLeftWidth: "1px",minHeight: "24px", marginRight: "20px", marginLeft: "12px"}}></div>
                        <Paper elevation={3} square className={classes.paper}>
                          <div className={classes.page}>
                            <div className={classes.pageContent}>
                                <Typography
                                    variant="h3"
                                    component="div"
                                >
                                Mobile App Access   
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    component="div"
                                >
                                Click here to Access    
                                </Typography>
                            </div>
                            <div className={classes.pageIcon}>
                              <img src={unlock} />
                            </div>
                          </div>
                        </Paper>
                      </div>
                    </div>
                    <div name="step">
                      <div id="stepper-mark"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="CheckCircleIcon" style={{height: "25px", width: "unset",color: "rgb(25, 118, 210)",fill: "currentColor"}}><path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"></path></svg></div>
                      <div  style={{display: "flex",flexDirection: "row"}}>
                        <div id="stepper-bar" style={{display: "block",borderColor: "rgb(189, 189, 189)",borderLeftStyle: "solid",borderLeftWidth: "1px",minHeight: "24px", marginRight: "20px", marginLeft: "12px"}}
                        ></div>
                        <Paper elevation={3} square className={classes.paper}>
                          <div className={classes.page}>
                            <div className={classes.pageContent}>
                                <Typography
                                    variant="h3"
                                    component="div"
                                >
                                Mobile App Access   
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    component="div"
                                >
                                Click here to Access    
                                </Typography>
                            </div>
                            <div className={classes.pageIcon}>
                              <img src={unlock} />
                            </div>
                          </div>
                        </Paper>
                      </div>
                    </div>
                  </div>
                </Grid>
            </Grid>
            <Grid container id="content">
                <Grid item xs={12}>
                  <Paper elevation={3} square variant ='outlined' style={{borderRadius: "15px"}}>
                    <div className={classes.page}>
                      <div className={classes.pageContent} style={{display:"flex", justifyContent:"center", width: "100%"}}>
                          <img src={img} />
                      </div>
                    </div>
                  </Paper>
                </Grid>
            </Grid>
            <Grid container id="footerbar">
                <Grid item xs={3}>
                  <img src={img_certify} style={{width: "unset"}}/>
                </Grid>
                <Grid item xs={9} style={{display:'flex',flexDirection: 'column',alignItems: "center"}}>
                  <Typography
                    variant="h3"
                    component="div"
                  >
                  3300 people have claimed this badge
                  </Typography>
                  <div>
                    <img src={img_avatar}  style={{width: "unset"}}/>
                    <img src={img_avatar}  style={{width: "unset"}}/>
                    <img src={img_avatar}  style={{width: "unset"}}/>
                    <img src={img_avatar}  style={{width: "unset"}}/>
                    <img src={img_avatar}  style={{width: "unset"}}/>
                  </div>
                </Grid>
            </Grid>
    
        </div>
    )
}

export default GetStart
