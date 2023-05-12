import React, { useState } from 'react';
import Icon from '../assets/images/icon-arrow.svg';

const Main = () => {
  const [age, setAge] = useState({
    day: '',
    month: '',
    year: '',
  });
  // console.log(age);

  const handleChangeForm = (e) => {
    e.preventDefault();
    setAge({
        ...age, [e.target.name]: e.target.value
    });
    document.getElementById('dispYear').innerHTML = '--';
    document.getElementById('dispMonth').innerHTML = '--';
    document.getElementById('dispDay').innerHTML = '--';
    document.getElementById('Day').parentNode.classList.remove('section-error');
  }

// Picking system date and storing them in variables as regards year, month and day
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth()+1;
  const currentDay = new Date().getDate();
  // console.log(currentDay);

//  function to calculate the number of years a person has lived
  function handleNewYear(){

    if(age.year < currentYear ){
      if(age.month > currentMonth){
          const newYear = currentYear-1;
    
          const presentYear = newYear-age.year;
          document.getElementById('dispYear').innerHTML = presentYear;
          return;
      } else if(age.month < currentMonth){
          const presentYear = currentYear-age.year;
          document.getElementById('dispYear').innerHTML = presentYear;
          return;
      } else{
        if(age.day <= currentDay){
          const presentYear = currentYear-age.year;
          document.getElementById('dispYear').innerHTML = presentYear;
          return;
        } else{
          const newYear = currentYear-1;
          const presentYear = newYear-age.year;
          document.getElementById('dispYear').innerHTML = presentYear;
          return;
        }
      }
    } else {
        const presentYear = age.year-currentYear;
        document.getElementById('dispYear').innerHTML = presentYear;
        return;
      }
  }

  // function to calculate the number of months a person has lived
  function handleNewMonth(){
    if(currentMonth < age.month){
      if(currentDay < age.day){
        const newMonth =11 + currentMonth;

        const presentMonth = newMonth - age.month;
        document.getElementById('dispMonth').innerHTML = presentMonth;
        return;
      } else {
        const newMonth =12 + currentMonth;

        const presentMonth = newMonth - age.month;
        document.getElementById('dispMonth').innerHTML = presentMonth;
        return;
      }
    } else if(currentMonth > age.month){
      const presentMonth = currentMonth - age.month;
      document.getElementById('dispMonth').innerHTML = presentMonth;
      return;
    } else {
      if(currentDay >= age.day){
        const presentMonth = currentMonth - age.month;
        document.getElementById('dispMonth').innerHTML = presentMonth;
        return;
      } else{
        const presentMonth = 11;
        document.getElementById('dispMonth').innerHTML = presentMonth;
        return;
      }
    }
  }

  // function to calculate the number of days a person has lived
  function handleNewDay(){
    if(age.day <= currentDay){
      const presentDay = currentDay - age.day;
      document.getElementById('dispDay').innerHTML = presentDay;
      return;
    } else{
      // eslint-disable-next-line
      if(currentMonth == 12 || currentMonth == 10 || currentMonth == 7 || currentMonth == 5){
        const preM = 30-age.day;
        const preD = currentDay-0;

        const presentDay = preM + preD;
        document.getElementById('dispDay').innerHTML = presentDay;
        return;
        // eslint-disable-next-line
      } else if(currentMonth == 11 || currentMonth == 9 || currentMonth == 8 || currentMonth == 6 || currentMonth == 4 || currentMonth == 2 || currentMonth == 1){
        const preM = 31-age.day;
        const preD = currentDay-0;

        const presentDay = preM + preD;
        document.getElementById('dispDay').innerHTML = presentDay;
        return;
        // eslint-disable-next-line
      } else if(currentMonth == 3) {
        const preM = 29-age.day;
        const preD = currentDay-0;

        const presentDay = preM + preD;
        document.getElementById('dispDay').innerHTML = presentDay;
        return;
      }
      
    }
  }

  // error handler as regards empty inputs and invalid number
  function handleErrorMessage(){
    if(age.year === ''){
      const errMessage = document.getElementById('Year').parentNode;
      const sentMsg = document.getElementById('sentMsg3');
  
      sentMsg.innerHTML='This field is required';
      errMessage.classList.add('section-error');
      document.getElementById('dispYear').innerHTML = '--';
    } else if(age.year > currentYear){
      const errMessage = document.getElementById('Year').parentNode;
      const sentMsg = document.getElementById('sentMsg3');
  
      sentMsg.innerHTML='Must be in the past';
      errMessage.classList.add('section-error');
      document.getElementById('dispYear').innerHTML = '--';
    } else{
      const errMessage = document.getElementById('Year').parentNode;
  
      errMessage.classList.remove('section-error');
    }

    if(age.month === ''){
      const errMessage = document.getElementById('Month').parentNode;
      const sentMsg = document.getElementById('sentMsg2');
  
      sentMsg.innerHTML='This field is required';
      errMessage.classList.add('section-error');
      document.getElementById('dispMonth').innerHTML = '--';
    } else if(age.month > 12){
      const errMessage = document.getElementById('Month').parentNode;
      const sentMsg = document.getElementById('sentMsg2');
  
      sentMsg.innerHTML='Must be a valid month';
      errMessage.classList.add('section-error');
      document.getElementById('dispMonth').innerHTML = '--';
    } else{
      const errMessage = document.getElementById('Month').parentNode;
  
      errMessage.classList.remove('section-error');
    }

    if(age.day === ''){
      const errMessage = document.getElementById('Day').parentNode;
      const sentMsg = document.getElementById('sentMsg1');
  
      sentMsg.innerHTML='This field is required';
      errMessage.classList.add('section-error');
      document.getElementById('dispDay').innerHTML = '--';
    } else if(age.day > 31){
      const errMessage = document.getElementById('Day').parentNode;
      const sentMsg = document.getElementById('sentMsg1');
  
      sentMsg.innerHTML='Must be a valid day';
      errMessage.classList.add('section-error');
      document.getElementById('dispDay').innerHTML = '--';
    } else{
      const errMessage = document.getElementById('Day').parentNode;
  
      errMessage.classList.remove('section-error');
    }
  }

  // error handler as regards non-existing date of birth
  function handleInvalidNumber(){
    // eslint-disable-next-line
    if(age.month == 2 && age.day > 29){
      const errMessage = document.getElementById('Day').parentNode;
      const sentMsg = document.getElementById('sentMsg1');
  
      sentMsg.innerHTML='Must be a valid day';
      errMessage.classList.add('section-error');
      document.getElementById('dispYear').innerHTML = '--';
      document.getElementById('dispMonth').innerHTML = '--';
      document.getElementById('dispDay').innerHTML = '--';
      // eslint-disable-next-line
    } else if((age.month == 4 || age.month == 6 || age.month == 9 || age.month == 11) && age.day > 30){
      const errMessage = document.getElementById('Day').parentNode;
      const sentMsg = document.getElementById('sentMsg1');
  
      sentMsg.innerHTML='Must be a valid day';
      errMessage.classList.add('section-error');
      document.getElementById('dispYear').innerHTML = '--';
      document.getElementById('dispMonth').innerHTML = '--';
      document.getElementById('dispDay').innerHTML = '--';
      // eslint-disable-next-line
    } else if((age.month == 1 || age.month == 3 || age.month == 5 || age.month == 7 || age.month == 8 || age.month == 10 || age.month == 12) && age.day > 31){
      const errMessage = document.getElementById('Day').parentNode;
      const sentMsg = document.getElementById('sentMsg1');
  
      sentMsg.innerHTML='Must be a valid day';
      errMessage.classList.add('section-error');
      document.getElementById('dispYear').innerHTML = '--';
      document.getElementById('dispMonth').innerHTML = '--';
      document.getElementById('dispDay').innerHTML = '--';
    }

    if(age.year >= currentYear && age.month > currentMonth){
      const errMessage = document.getElementById('Year').parentNode;
      const sentMsg = document.getElementById('sentMsg3');
      const errorMessage = document.getElementById('Month').parentNode;
      const sendMsg = document.getElementById('sentMsg2');
  
      sendMsg.innerHTML='Must be a valid month';
      errorMessage.classList.add('section-error');
      sentMsg.innerHTML='Must be in the past';
      errMessage.classList.add('section-error');
      document.getElementById('dispYear').innerHTML = '--';
      document.getElementById('dispMonth').innerHTML = '--';
      document.getElementById('dispDay').innerHTML = '--';
    }
  }
 

  return (
    <main>
      <form className='user-input'>
        <div className='user-input_field'>
          <label htmlFor="Day" className='user-input_field-label'>day</label>
          <input type="tel" id='Day' name='day' placeholder='DD' 
          onChange={handleChangeForm} maxLength={2} />
          <p id='sentMsg1'></p>
        </div>
        <div className='user-input_field'>
          <label htmlFor="Month" className='user-input_field-label'>month</label>
          <input type="tel" id='Month' name='month' placeholder='MM' 
          onChange={handleChangeForm} maxLength={2} />
          <p id='sentMsg2'></p>
        </div>
        <div className='user-input_field'>
          <label htmlFor="Year" className='user-input_field-label'>year</label>
          <input type="tel" id='Year' name='year' placeholder='YYYY' 
          onChange={handleChangeForm} maxLength={4} />
          <p id='sentMsg3'></p>
        </div>
      </form>

      <div className="age-display">
        <div className="age-display_each">
          <span id='dispYear'>--</span>
          <strong>years</strong>
        </div>
        <div className="age-display_each">
          <span id='dispMonth'>--</span>
          <strong>months</strong>
        </div>
        <div className="age-display_each">
          <span id='dispDay'>--</span>
          <strong>days</strong>
        </div>
      </div>
      <img src={Icon} alt="mode icon" onClick={() => 
        {handleNewYear(); handleNewMonth(); handleNewDay(); 
          handleErrorMessage(); handleInvalidNumber();}} 
        className='mode-toggle' />
    </main>
  )
}

export default Main