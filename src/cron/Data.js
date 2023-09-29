import React , { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';



const month = [
  {
    value: "*",
    label: 'Не выбрано',
  },
  {
    value: "1",
    label: 'January',
  },
  {
    value: "2",
    label: 'February',
  },
  {
    value: "3",
    label: 'March',
  },
  {
    value: "4",
    label: 'April',
  },
  {
    value: "5",
    label: 'May',
  },
  {
    value: "6",
    label: 'June',
  },
  
  {
    value: "7",
    label: 'July',
  },
  {
    value: "8",
    label: 'August',
  },
  {
    value: "9",
    label: 'September',
  },
  {
    value: "10",
    label: 'October',
  },
  {
    value: "11",
    label: 'November ',
  },
  {
    value: "12",
    label: 'December',
  },
];


export default function SelectTextFields() {
  
  const [day, setDay] = React.useState('*');
  const handleDayChange = (event) => {
      setDay(!Number.isNaN(Number(event.target.value)) ? event.target.value : day);     
    };

return (
    <div style={{
      margin: 'auto',
      display: 'block',
      width: 'fit-content',
      bottom: '50px'
    }}>

  <div>
    <TextField
  
      id="month"
      label="Select month"
      select
        SelectProps={{
            native: true,
        }}         
        >
          
          {month.map(option => (
            <option key={option.value} value={option.value} > 
            {option.label}</option>
          ))}
       
    </TextField>
           
    <TextField
    
      label="Day"
      id="day"
      value={day}
      onChange={handleDayChange}
      error={day < 1 || day > 31 }
      helperText={day < 1 || day > 31  ? "Значение должно быть от 1 до 31!" : " "}
      InputLabelProps={{
        shrink: true,
      }}
               
      />
       
  </div>
  </div>
)};


 
 
 
