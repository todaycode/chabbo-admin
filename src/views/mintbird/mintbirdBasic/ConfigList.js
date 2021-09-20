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
import img_mintBirdPC from 'assets/img/mintBirdProfileComplete.png'
import ConfigCard from 'components/Cards/ConfigCard'
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

function ConfigList() {
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
                      <div id="stepper-mark"><svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="CheckCircleIcon" style={{height: "25px", width: "unset",color: "rgb(25, 118, 210)",fill: "currentColor"}}><path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"></path></svg></div>
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
                      <div id="stepper-mark"><svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="CheckCircleIcon" style={{height: "25px", width: "unset",color: "rgb(25, 118, 210)",fill: "currentColor"}}><path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"></path></svg></div>
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
                      <div id="stepper-mark"><svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="CheckCircleIcon" style={{height: "25px", width: "unset",color: "rgb(25, 118, 210)",fill: "currentColor"}}><path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"></path></svg></div>
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
                  <div style={{display:"flex", flexDirection: "row"}}>
                    <Typography variant="subtitle2" component="div">Configurations, Level 1 is complete</Typography>
                    <div className={classes.grow} />
                    <Typography variant="h5" component="div">My Points: 80</Typography>
                  </div>
                  <ConfigCard goalNum = "01" title="Complete Your Profile" content="You need this for your MintBird Badge" isChecked={true} childComp={"<center><h3 style='color:blue'>You Completed This Goal</h3><div>6 Points were issued</div><img src={img_mintBirdPC} /></center>"} />
                  <ConfigCard goalNum = "02" title="Complete Your Profile" content="You need this for your MintBird Badge" isChecked={true} />
                  <ConfigCard goalNum = "03" title="Complete Your Profile" content="You need this for your MintBird Badge" isChecked={true} />
                  <ConfigCard goalNum = "04" title="Complete Your Profile" content="You need this for your MintBird Badge" isChecked={true} />
                  <ConfigCard goalNum = "05" title="Complete Your Profile" content="You need this for your MintBird Badge" isChecked={true} />
                  <ConfigCard goalNum = "06" title="Complete Your Profile" content="You need this for your MintBird Badge" isChecked={true} />
                  <ConfigCard goalNum = "07" title="Complete Your Profile" content="You need this for your MintBird Badge" isChecked={true} />
                  <ConfigCard goalNum = "08" title="Complete Your Profile" content="You need this for your MintBird Badge" isChecked={true} />
                  <ConfigCard goalNum = "09" title="Complete Your Profile" content="You need this for your MintBird Badge" isChecked={true} />
                  <ConfigCard goalNum = "10" title="Complete Your Profile" content="You need this for your MintBird Badge" isChecked={true} />

                </Grid>
            </Grid>
            
    
        </div>
    )
}

export default ConfigList
