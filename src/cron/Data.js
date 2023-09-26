import React , { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import makeStyles from '@emotion/styled'
import datepickers from 'js-datepicker'


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',  
    flexWrap: 'wrap',
    width: 'fit-content',
    bottom: '50px'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));


export default function DatePickers() {
  const classes = useStyles();
 
  return (
    
    <form className={classes.container} noValidate>
      <TextField
     
        id="date"
        label="Date"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
       
       
      />
  
    </form>
       
  );}