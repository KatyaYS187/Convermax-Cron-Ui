
export default function SetTime(min, op1,hour,day,month,weekDay){
   
    return (       
     document.getElementById('min').value=min,
     document.getElementById('nMin').value=op1,
     document.getElementById('hour').value=hour,
     document.getElementById('day').value=day,
     document.getElementById('month').value=month,    
     document.getElementById('WeekDay').value=weekDay
    )
}
