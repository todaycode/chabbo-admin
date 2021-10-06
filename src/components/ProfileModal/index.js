
import React, {forwardRef,useImperativeHandle}from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { Button, Popover,Whisper, Dropdown, Divider, Pagination, Checkbox, IconButton, Panel,
Tag, Avatar} from 'rsuite';
// core components
import componentStyles from "assets/theme/components/profileModal.js";
import { makeStyles } from "@material-ui/core/styles";
import defaultUser from 'assets/img/user2.jpg';
import defaultUserHeader from 'assets/img/select_image.jpg';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const useStyles = makeStyles(componentStyles);
export const ProfileModal = forwardRef((props,ref) => {
    const classes           = useStyles();
    const {isMore, data, initial} = props;
    if(data.hasOwnProperty('dob')){
        let dobDate = new Date(data.dob);
        data.dob = dobDate.toDateString();
    }
    const [open, setOpen] = React.useState(isMore);
    useImperativeHandle(ref, () => ({
            showModal(){
                setOpen(true); 
            }
    }));
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
    }

  return (
    !initial?
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        classes={{root: classes.totalWidth}}
      >
        <DialogTitle id="alert-dialog-slide-title">
            <div style={{
                fontSize: '20px',
                fontStyle: 'oblique',
                fontFamily: 'Charter',
                fontWeight: '100',
            }}><b>Name:</b> {data.name}</div>
        </DialogTitle>
        <DialogContent style={{marginTop: '-1.5rem'}}>
            <div style={{padding: '10 10 10 10'}}>
                <div style={{display: 'flex'}}>
                    <div style={{
                        width: '100px',
                        height: '100px',
                        backgroundImage: `url(${data.image? data.image: defaultUser})`,
                        backgroundSize: '100% 100%',
                        borderRadius: '50%'
                    }}/>
                    <div style={{
                        marginLeft: '10px',
                        width: '190px',
                        height: '100px',
                        backgroundImage: `url(${data.headerImage? data.headerImage: defaultUserHeader})`,
                        backgroundSize: '100% 100%',
                        backgroundRepeat: 'norepeat',
                        borderRadius: '2%'
                    }}/>
                </div>
                    <div style={{
                        marginTop: '10px',
                        fontSize: '15px',
                        fontFamily: 'Charter',
                        fontWeight: '100',
                    }}><b>UserName:</b> {data.username}</div>
                    <div style={{
                        marginTop: '10px',
                        fontSize: '15px',
                        fontFamily: 'Charter',
                        fontWeight: '100',
                    }}><b>Dob:</b> {data.dob ? data.dob: ""}</div>
                    <div style={{
                        marginTop: '10px',
                        fontSize: '15px',
                        fontFamily: 'Charter',
                        fontWeight: '100',
                    }}><b>Email:</b> {data.email}</div>
                    <div style={{
                        marginTop: '10px',
                        fontSize: '15px',
                        fontFamily: 'Charter',
                        fontWeight: '100',
                    }}><b>Category:</b> {data.category.map(item => {return Capitalize(item)+" "})}</div>
                    <div style={{
                        marginTop: '10px',
                        fontSize: '15px',
                        fontFamily: 'Charter',
                        fontWeight: '100',
                    }}><b>Bio:</b> {data.bio ? data.bio: ""}</div>
                    <div style={{
                        marginTop: '10px',
                        fontSize: '15px',
                        fontFamily: 'Charter',
                        fontWeight: '100',
                    }}><b>Website:</b> {data.website ? data.website: ""}</div>
            </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} appearance="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    :
    null
  );
})
export const AlertDialog = forwardRef((props,ref) =>{
    const classes           = useStyles();
    const {isEdit, data, deny, allow} = props;
    const [open, setOpen] = React.useState(isEdit);
    useImperativeHandle(ref, () => ({
            showModal(){
                setOpen(true); 
            }
    }));
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleDeny = () => {
        deny(data._id, data.reqCategory);
        setOpen(false);
    };
    const handleAllow = () => {
        allow(data._id, data.reqCategory);
        setOpen(false);
    };

  return (
    <div>
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        classes={{root: classes.totalWidth}}
      >
        <DialogTitle id="alert-dialog-title">
            <div style={{
                fontSize: '20px',
                fontStyle: 'oblique',
                fontFamily: 'Charter',
                fontWeight: '100',
            }}><b>To become a creator</b></div>
        </DialogTitle>
        <DialogContent style={{marginTop: '-1.5rem'}}>
           <div style={{
                marginTop: '10px',
                fontSize: '15px',
                fontFamily: 'Charter',
                fontWeight: '100',
            }}>Are you sure?</div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeny} appearance="primary" color="red">
            Deny
          </Button>
          <Button onClick={handleAllow} appearance="primary" color="green" autoFocus>
            Allow
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
})