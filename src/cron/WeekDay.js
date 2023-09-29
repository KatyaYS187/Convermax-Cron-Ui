import React , { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';



const currencies = [
  {
    value: "*",
    label: 'Не выбрано',
    
  },
  {
    value: "Mon",
    label: 'Monday',
    
  },
  {
    value: "Tue",
    label: 'Thuesday',
  },
  {
    value: "Wed",
    label: 'Wadnesday',
  },
  {
    value: "Thu",
    label: 'Thursday',
  },
  {
    value: "Fri",
    label: 'Friday',
  },
  {
    value: "Sat",
    label: 'Saturday',
  },
  
  {
    value: "Sun",
    label: 'Sunday',
  },
  
];


export default function SelectTextFields() {
  
  return (
  <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
       width: 'fit-content'
    }}
      noValidate
      autoComplete="off"
  >
    <div>
      <TextField
        id="WeekDay"
        label="Select WeekDay"
        select
        SelectProps={{
          native: true,
        }}  
      >
        {currencies.map(option => (
        <option key={option.value} value={option.value} >
          {option.label} </option>
          ))}
        
        
      </TextField>
       
    </div>
  </Box>
)}


 
 
 
