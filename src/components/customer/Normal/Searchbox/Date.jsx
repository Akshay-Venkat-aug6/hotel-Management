import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      marginLeft: '8px',
      marginTop: "40px"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 160,
    },
  }),
);

const  DatePickers = () => {
  const classes = useStyles();
  const [checkInerror, setCheckinerror] = useState('');
  const [checkOuterror, setCheckouterror] = useState('');

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + "-"+mm+"-"+dd;
  
  const handlecheckIn = (e) => {
    if(e.target.value >= today){
      setCheckinerror('')
      sessionStorage.setItem('checkIn', e.target.value)
    }
    else{
      setCheckinerror('Choose Future Date')
    }
  }

  const handlecheckOut = (e) => {
    const checkIn = sessionStorage.getItem('checkIn')
    console.log(checkIn)
    console.log(e.target.value)
    if(e.target.value < checkIn){
      console.log('No')
      setCheckouterror('Date should greter than checkin date')
    }
    else{
      console.log('Yes')
      setCheckouterror('')
      sessionStorage.setItem('checkOut', e.target.value)
    }
  }

  return (
    <div className={classes.container} noValidate>
      <div>
        <TextField
          id="date"
          label="Check In Date"
          type="date"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange = { handlecheckIn }
        />
        <span style={{fontSize: "10px", color: "red", paddingLeft: "10px"}}>{checkInerror}</span>
      </div>
      <div>
        <TextField
          id="date"
          label="Check Out Date"
          type="date"
          className={classes.textField}
          onChange = { handlecheckOut }
          InputLabelProps={{
            shrink: true,
          }}
        />
        <span style={{fontSize: "10px", color: "red", paddingLeft: "10px"}}>{checkOuterror}</span>
      </div>
    </div>
  );
}

export default DatePickers