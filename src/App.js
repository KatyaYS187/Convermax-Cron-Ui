import React , { useEffect, useState } from 'react';
import DatePickers from './cron/Data';
import Time from './cron/Time';
import SetTime from './cron/Load';
import SelectTextFields from './cron/WeekDay';
import './App.css';


const App = () => {

  return (

  <div className="container">

      <Time />
      <DatePickers />
      <SelectTextFields />
    

    <div className="radio">

      <input type="radio" name="topping" id="Empty" />
      <label htmlFor="Empty">Empty</label>
      
      <input type="radio" name="topping" id="EveryDay"/>
      <label htmlFor="EveryDay">EveryDay</label>
      
      <input type="radio" name="topping" id="EveryWeek"/>
      <label htmlFor="EveryWeek">EveryWeek</label>

      <input type="radio" name="topping" id="EveryMonth"/>
      <label htmlFor="EveryMonth">EveryMonth</label>

      <input type="radio" name="topping" id="EveryNMin"/>
      <label htmlFor="EveryNMin">Every-N-Min</label>

    </div>

    <button onClick={Save} > Save </button> 
    
    <button onClick={Load} > Load </button> 

  Результат ввода:
  <form>
     <input type="text" id="cron"/> 
  </form>

</div>
)};


function Save() {
  
  var month = document.getElementById('month').value
  var day = document.getElementById('day').value
  var weekDay = document.getElementById('WeekDay').value
  var min = document.getElementById('min').value
  var hour = document.getElementById('hour').value
  
  
    if (min < 1 || min > 59) {
      alert("Значение должно быть от 1 до 59");
      return false;
    }
    
    if (hour < 1 ||hour > 24) {
      alert("Значение должно быть от 1 до 24");
      return false;
    }

    if (day < 1 ||day > 31) {
      alert("Значение должно быть от 1 до 31");
      return false;
    }
       
  var op1="";
// Получить значение true/false из radio

  var EveryMonth =document.getElementById('EveryMonth').checked;
  var EveryWeek =document.getElementById('EveryWeek').checked;
  var EveryDay =document.getElementById('EveryDay').checked;
  var EveryNMin =document.getElementById('EveryNMin').checked;
    if(EveryDay==true){
      var weekDay = "?"
      var month = "*"
      var day = "*"
    }
    else 
    {
      var weekDay = document.getElementById('WeekDay').value;
    }
    
    if(EveryWeek==true){
      var day = "?"
    }
    else
    {
      var day =document.getElementById('day').value;
    }
    
    if(EveryMonth==true){
      var weekDay = "?"
      var month = "*"
    }
    else
    {
      var weekDay =document.getElementById('WeekDay').value;
    }
    
    if(EveryNMin==true){
      var mins = document.getElementById('nMin').value;
      op1="/"+mins
    }
    else
    {
  op1=""
     
    }

  let string  ="{0} {1} {2} {3} {4} ".format(min+op1,hour,day,month,weekDay);
    
  let inputElement = document.querySelector('#cron')
  inputElement.value = string;
   
};
   

function Load() {
  
  const input = document.getElementById('cron'); // Извлекаем элемент input
  const value = input.value;
    var split = value.split(' ')
    var min = split[0]  
    var op1 = split[0]  
    var hour = split[1]
    var day = split[2]
    var month = split[3]   
    var weekDay = split[4]
 

     if (min < 1 || min > 59 || /[^* /\d]/g.test(min)) {
        alert('Вводить только значения от 1 до 59')
        return false;
      }
      
   
      if (hour < 1 ||hour > 24 || /[^*\d]/.test(hour)) {
        alert('Вводить только значения от 1 до 24')
        return false;
      }
    
      
      if (day < 1 ||day > 31 || /[^*\d]/g.test(day)) {
        alert('Вводить только значения от 1 до 31')
        return false;
      }
   

    SetTime(min,op1,hour,day,month,weekDay)
  }
 
    
    String.prototype.format = function() {
    let formatted = this;
      for (let i = 0; i < arguments.length; i++) {
        let regexp = new RegExp('\\{'+i+'\\}', 'gi');
        formatted = formatted.replace(regexp, arguments[i]);
      }
    return formatted;
};

export default App;
