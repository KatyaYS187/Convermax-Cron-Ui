import React , { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import makeStyles from '@emotion/styled'



export default function Time() {
  
  const [min, setmin] = React.useState('*')
  const [hour, sethour] = React.useState('*')
  const [nMin, setnMin] = React.useState('*')

  const handleHourChange = (event) => {
      sethour(!Number.isNaN(Number(event.target.value)) ? event.target.value : hour);
    };
    
  const handleMinChange = (event) => {
      setmin(!Number.isNaN(Number(event.target.value)) ? event.target.value: min ); 
    };
    
  const handlenMinChange = (event) => {
      setnMin(!Number.isNaN(Number(event.target.value)) ? event.target.value: nMin ); 
    };
    
  return (
  
    <div style={{
      margin: 'auto',
      display: 'block',
      width: 'fit-content',
      bottom: '50px'
    }}>
      
      <TextField
      
        label="Hour"
        id="hour"
        value={hour}
        onChange={handleHourChange}
        error={hour < 1 || hour > 24 }
        helperText={hour < 1 || hour > 24 ? "Значение должно быть от 1 до 24!" : " "}
        InputLabelProps={{
          shrink: true,
          }}
  
      />
      
      <TextField
      
        label="Minute"
        id="min"
        value={min}
        onChange={handleMinChange}
        error={min < 1 || min > 59 }
        helperText={min < 1 || min > 59  ? "Значение должно быть от 1 до 59!" : " "}
        InputLabelProps={{
          shrink: true,
        }}
              
      />
      
      <TextField
      
        label="Every-N-Min"
        id="nMin"
        value={nMin}
        onChange={handlenMinChange}
        error={nMin < 1 || nMin > 59 }
        helperText={nMin < 1 || nMin > 59  ? "Значение должно быть от 1 до 59!" : " "}
        InputLabelProps={{
          shrink: true,
        }}

      />
    </div>               
  )
}
