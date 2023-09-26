import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import makeStyles from '@emotion/styled'



export default function Time() {

    const [min, setmin] = React.useState('*');
    const [hour, sethour] = React.useState('*');
    const handleHourChange = (event) => {
      sethour(event.target.value); 
     
    };
    const handleMinChange = (event) => {
      setmin(event.target.value); 
     
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
             InputLabelProps={{
             shrink: true,
           }}
           /> 
           <TextField

                label="Minute"
                id="min"          
                value={min}
                onChange={handleMinChange}
                InputLabelProps={{
                  shrink: true,
                }}
                
              />
  
            </div>         
    )}
      