
export default function SetTime(cookieValue, cookieMin, cookieData, cookieWeekDay){
    return (
     document.getElementById('hour').value=cookieValue,
     document.getElementById('min').value=cookieMin,
     document.getElementById('date').value=cookieData,
     document.getElementById('WeekDay').value=cookieWeekDay
    )
    }
