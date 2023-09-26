import React , { useEffect, useState } from 'react';
import DatePickers from './cron/Data';
import Time from './cron/Time';
import SetTime from './cron/Load';
import SelectTextFields from './cron/WeekDay';

import './App.css';
	
import { CookiesProvider, useCookies } from 'react-cookie';
import { Loader } from 'rsuite';

 

  const App = () => {
    
  return (
    <div className="container">  
 
    <Time />  
    
    <DatePickers />
   
    <SelectTextFields />
    
   
    <button onClick={Save} > Save </button> 
   
    <button onClick={Load} > Load </button> 
    
  </div>
    
  )};


  function Save() {
    
      var element = document.getElementById('date').value
      var spliter = element.split('-')
      var years = spliter[0]
      var months = spliter[1]
      var day = spliter[2]

      var weekDay = document.getElementById('WeekDay').value;
      var min = document.getElementById('min').value;
      var hour = document.getElementById('hour').value;

      let string  ="{0} {1} {2} {3} {4}".format(min,hour,day,months,weekDay);
      console.log(string);
      
// Сохранение в Cookie
      document.cookie ="Hour="+ hour;
      document.cookie ="Min="+ min;     
      document.cookie ="Data="+ element;
      document.cookie ="WeekDay="+ weekDay;
      
   
    };
   

   function Load() {
      var cookieValue = document.cookie.replace(
        /(?:(?:^|.*;\s*)Hour\s*\=\s*([^;]*).*$)|^.*$/,
        "$1",
      );

      var cookieMin = document.cookie.replace(
        /(?:(?:^|.*;\s*)Min\s*\=\s*([^;]*).*$)|^.*$/,
        "$1",
      );

      var cookieData = document.cookie.replace(
        /(?:(?:^|.*;\s*)Data\s*\=\s*([^;]*).*$)|^.*$/,
        "$1",
      );
      var cookieWeekDay = document.cookie.replace(
        /(?:(?:^|.*;\s*)WeekDay\s*\=\s*([^;]*).*$)|^.*$/,
        "$1",
      );

     SetTime(cookieValue,cookieMin,cookieData,cookieWeekDay) 

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
