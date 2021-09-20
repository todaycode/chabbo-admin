import React, { useState, useEffect } from 'react'

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
import parse from 'html-react-parser'
const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    paperTitle: {
      display:'block',
      paddingLeft: "25px",
      paddingTop: "9px",
      paddingRight: "9px",
    },
    paper: {
      margin: "5px",
      borderRadius: "10px",
      cursor: "pointer",
    },
    paperContent: {
        padding:theme.spacing(1 )
    },
    paperCheckMark: {
        alignItems: "center",
    },
    goalNum: {
        justifyContent: "center",
        alignItems: "center",
        display: "block",
        backgroundColor: "#8e969c",
        borderBottomLeftRadius: "10px",
        borderTopLeftRadius: "10px"
    }
}));

function ConfigCard({goalNum,title,content, isChecked, childComp}) {
    const classes = useStyles();
    const [children, setChildren] = useState('') 
    const onPaperClicked=(e) => {
        setChildren(childComp)
    }
    return (
        <Paper elevation={3} square className={classes.paper} onClick={onPaperClicked}>
            <Grid container style={{margin:"0px"}}>
                <Grid item xs={2} className={classes.goalNum}>
                    <Typography variant="subtitle2" component="div" style={{justifyContent: "center", display: "flex", color: "white", marginTop:"5px"}}>
                        Goal  
                    </Typography>
                    <Typography variant="h1" component="div" style={{justifyContent: "center", display: "flex", color: "white"}}>
                        {goalNum}  
                    </Typography>
                </Grid>
                <Grid item xs={9} className={classes.paperTitle}>
                    <Typography variant="h3" component="div" >
                        {title}  
                    </Typography>
                    <Typography variant="subtitle2" component="div">
                        {content}  
                    </Typography>
                </Grid>
                <Grid item xs={1} className={classes.paperCheckMark} style={isChecked?{display:"flex"}:{display:"none"}}>
                    <div id="stepper-mark"><svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="CheckCircleIcon" style={{height: "25px", width: "unset",color: "rgb(25, 118, 210)",fill: "currentColor"}}><path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"></path></svg></div>
                </Grid>

            </Grid>
            <div dangerouslySetInnerHTML={{ __html: children }} />
       </Paper>
    )
}

export default ConfigCard
