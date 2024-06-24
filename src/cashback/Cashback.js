import React from 'react'
import { useState } from 'react';
import "./Cashback.css"

import 'react-datepicker/dist/react-datepicker.css';
import { RiDeleteBin6Line } from "react-icons/ri";
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel,Grid } from '@mui/material';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { TextField } from '@mui/material';
import LazyLoad from 'react-lazyload';




const Cashback = () => {
    const [selectedDate, setSelectedDate] = useState(null);
 

  
    const [phoneNumber, setPhoneNumber] = useState('');
    const [homeNumber,setHomeNumber]=useState("")
    const [workNumber,setWorkNumber]=useState("")
    const handleChange = (e) => {
      let input = e.target.value;
      // Check if user is deleting a character
      if (phoneNumber.length > input.length) {
        // If the user is deleting, update the state with the current value
        setPhoneNumber(input);
        return;
      }
      // Remove any non-numeric characters
      input = input.replace(/\D/g, '');
      // Format the input according to the specified pattern
      const formattedNumber = formatPhoneNumber(input);
      // Update the state with the formatted number
      setPhoneNumber(formattedNumber);
    };
 
    
    const handleChangeHome = (e) => {
        let input = e.target.value;
        // Check if user is deleting a character
        if (homeNumber.length > input.length) {
          // If the user is deleting, update the state with the current value
          setHomeNumber(input);
          return;
        }
        // Remove any non-numeric characters
        input = input.replace(/\D/g, '');
        // Format the input according to the specified pattern
        const formattedNumber = formatPhoneNumber(input);
        // Update the state with the formatted number
        setHomeNumber(formattedNumber);
      };
        const handleChangeWork = (e) => {
        let input = e.target.value;
        // Check if user is deleting a character
        if (workNumber.length > input.length) {
          // If the user is deleting, update the state with the current value
          setWorkNumber(input);
          return;
        }
        // Remove any non-numeric characters
        input = input.replace(/\D/g, '');
        // Format the input according to the specified pattern
        const formattedNumber = formatPhoneNumber(input);
        // Update the state with the formatted number
        setWorkNumber(formattedNumber);
      };
       
    const formatPhoneNumber = (phoneNumber) => {
        // Apply the formatting pattern
        const formattedNumber = phoneNumber
          .slice(0, 10) // Limit to 10 characters (maximum allowed)
          .replace(/(\d{0,3})(\d{0,3})(\d{0,4})/, '($1) $2-$3');
        return formattedNumber;
      };
  

    const [selectedHome,setSelectedHome]=useState("");
    const [selectedEmp,setSelectedEmp]=useState("");
    const [selectedIncome,setSelectedIncome]=useState("");
    const [showForm, setShowForm] = useState(false);
    const [selectedEmp2,setSelectedEmp2]=useState("");
    const [selectedIncome2,setSelectedIncome2]=useState("");
    const [showOtherIncomeInput, setShowOtherIncomeInput] = useState(false);
    const [paymentOption, setPaymentOption] = useState('');
   
    const handleHouseChange=(event)=>{
        setSelectedHome(event.target.value)
    }
    const handleEmpChange = (event) => {
        setSelectedEmp(event.target.value);
      };
      const handleIncomeChange = (event) => {
        setSelectedIncome(event.target.value);
      };
      const handleClick = (event) => {
        event.preventDefault();
        setShowForm(true);
      };
      const handleDeleteClick = () => {
        setShowForm(false);
      };
      
      const [employmentType, setEmploymentType] = useState('');
      const [showAccountNumberInput, setShowAccountNumberInput] = useState(false);
    
      const handleEmploymentTypeChange = (event) => {
        const selectedValue = event.target.value;
        setEmploymentType(selectedValue);
        // If employed is selected, show the account number input
        setShowAccountNumberInput(selectedValue === 'P');
        setShowOtherIncomeInput(selectedValue === 'O');
      };
      const [payFrequency, setPayFrequency] = useState('');

 

  const handlePayFrequencyChange = (event) => {
    const value = event.target.value;
   
    setPayFrequency(value);
  };
  const getDaySuffix = (day) => {
    if (day === 1 || day === 21 || day === 31) {
      return "st";
    } else if (day === 2 || day === 22) {
      return "nd";
    } else if (day === 3 || day === 23) {
      return "rd";
    } else {
      return "th";
    }
  };
  const [selectedDay, setSelectedDay] = useState('');
  
  const [selectedDayBi, setSelectedDayBi] = useState('');

  const [firstDate, setFirstDate] = useState(null);

  const[nextPay1,setNextPay1]=useState(null);
  const[nextPay2,setNextPay2]=useState(null);
  const[monthlyResult,setMonthlyResult]=useState("");




const shouldDisableDate = (date) => {
  const date1 = dayjs(nextPay1);
  const date2 = dayjs(nextPay2);
  return !date.isSame(date1, 'day') && !date.isSame(date2, 'day');
};

const handleDayChange = (event) => {
  const selectedValue = event.target.value;
  setSelectedDay(selectedValue);
  
  const today = new Date();
  const todayDayIndex = today.getDay();
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const selectedDayIndex = daysOfWeek.indexOf(selectedValue);
  
  // Calculate the date of the selected day in the current week
  const selectedDate = new Date();
  selectedDate.setDate(today.getDate() + (selectedDayIndex - todayDayIndex));

  // console.log(`Pay day is: ${selectedValue}`);
  // console.log(`Today's date is: ${today.toDateString()}`);
  
  if (selectedDate > today) {
    // console.log(`The selected day (${selectedValue}) is after today's date.`);
    // console.log(`The date for ${selectedValue} is: ${selectedDate.toDateString()}`);
    setNextPay1(selectedDate.toDateString());
    
    // Calculate the date 7 days after the selectedDate
    const futureDate = new Date(selectedDate);
    futureDate.setDate(futureDate.getDate() + 7);
    setNextPay2(futureDate.toDateString());
    // console.log(`The date 7 days after ${selectedValue} is: ${futureDate.toDateString()}`);
  }
   else {
    // console.log(`The selected day (${selectedValue}) is before today's date.`);

    const nextOccurrence1 = new Date(selectedDate);
    nextOccurrence1.setDate(nextOccurrence1.getDate() + 7);

    const nextOccurrence2 = new Date(nextOccurrence1);
    nextOccurrence2.setDate(nextOccurrence2.getDate() + 7);

    if (nextOccurrence1.getMonth() === today.getMonth()) {
      setNextPay1(nextOccurrence1.toDateString());
      // console.log(`The next occurrence of ${selectedValue} is: ${nextOccurrence1.toDateString()}`);
    }
    if (nextOccurrence2.getMonth() === today.getMonth()) {
      setNextPay2(nextOccurrence2.toDateString());
      // console.log(`The second occurrence of ${selectedValue} is: ${nextOccurrence2.toDateString()}`);
    }
  }
};

const [checkBiWeekly,setCheckBiWeekly]=useState("");
const [formattedDate, setFormattedDate] = useState('');
const [dayOfWeek,setDayOfWeek]=useState("");
const[resultWeek,setResultWeek]=useState("");
const[allowWeek,setAllowWeek]=useState("");
const[allowMonthly,setAllowMonthly]=useState("");
const[specificDayMon,setSpecificDayMon]=useState("");
const[specificDayMon1,setSpecificDayMon1]=useState("");
const[allowSpecificDayMon,setAllowSpecificDayMon]=useState("");
const[allowTwoDay,setAllowTwoDay]=useState("");

const [firstPayWeek, setFirstPayWeek] = useState('');
const [firstPayDay, setFirstPayDay] = useState('');
const [secondPayWeek, setSecondPayWeek] = useState('');
const [secondPayDay, setSecondPayDay] = useState('');

const [selectedWeekDates, setSelectedWeekDates] = useState([]);
const [nextMonthWeekDates, setNextMonthWeekDates] = useState([]);
const [selectedWeekDates1, setSelectedWeekDates1] = useState([]);
const [nextMonthWeekDates1, setNextMonthWeekDates1] = useState([]);
const [resultTwiceMonth,setResultTwiceMonth]=useState("");
const [resultTwiceMonth1,setResultTwiceMonth1]=useState("");
const[allowTwiceMonth,setAllowTwiceMonth]=useState("");




const handleNext = () => {
  function parseDate(dateString) {
    // Assuming dateString is in the format "day.month year"
    const [dayMonth, year] = dateString.split(' ');
    const [day, month] = dayMonth.split('.');
    return new Date(`${year}-${month}-${day}`);
}
  if(formattedDate && checkBiWeekly){
    console.log("The first paydate is:", formattedDate);

    
    const date = new Date(formattedDate);
  
    
    const twoWeeksLater = new Date(date.getTime() + 14 * 24 * 60 * 60 * 1000);
    const dayOfWeek = twoWeeksLater.toLocaleString('en-US', { weekday: 'short' });
    const month = twoWeeksLater.toLocaleString('en-US', { month: 'short' });
    const day = twoWeeksLater.getDate();
    const year = twoWeeksLater.getFullYear();
  
    
    
    const formattedTwoWeeksLater = `${dayOfWeek} ${month} ${day} ${year}`;
    console.log("The second paydate is:", formattedTwoWeeksLater);
    console.log("---------------------------------------------------------------------------------------------------------");
    setCheckBiWeekly("");
  }else if(allowWeek){
    resultWeek.forEach(function(day) {
      console.log(day);});
      setAllowWeek("");
  }else if(allowMonthly){
    console.log(monthlyResult);
    setAllowMonthly("");
  }else if(allowSpecificDayMon){
  
    console.log("First pay day:",specificDayMon);
    console.log("Second pay day:",specificDayMon1);
    setAllowSpecificDayMon("");
  }
  else if (allowTwoDay){
    let date1 = new Date(formattedDate);
    let date2 = new Date(firstDate);
   
    if(date1<date2){
      console.log("First pay date:",formattedDate);
      console.log("Second pay date:",firstDate);
    } else{
      console.log("First pay date:",firstDate);
      console.log("Second pay date:",formattedDate);
    }
       
       setAllowTwoDay("");
  }else if (allowTwiceMonth) {
    // Ensure the values are Date objects if they are not already
    let date1 = new Date(resultTwiceMonth1);
    let date2 = new Date(resultTwiceMonth);
    let currentDate = new Date();
    // Compare the dates
    if (date1 < date2) {
      console.log("first pay day :",resultTwiceMonth1);
        console.log("Second pay day :",resultTwiceMonth);
    }else if (date1 && date2 > currentDate){
      console.log("First pay date :",resultTwiceMonth);
      console.log("Second pay date :",resultTwiceMonth1);
    } 
    else{
      console.log("First Pay date :",resultTwiceMonth);
      console.log("Second Pay date :",resultTwiceMonth1);
    }
}

 
}

const handleSelectDate = (newDate) => {
  setSelectedDate(newDate);
  const formatted = dayjs(newDate).format('ddd MMM D YYYY');
  setFormattedDate(formatted);
  setCheckBiWeekly("w");
};

const handleDaychangeWeek = (event) => {
  const selectedDayOfWeek = event.target.value.toLowerCase();
  setDayOfWeek(event.target.value); 

  
  const currentDate = new Date();
  const currentDayIndex = currentDate.getDay(); 
  const currentDayOfWeek = currentDate.toLocaleString('default', { weekday: 'long' }).toLowerCase();

 
  const dayOfWeekIndex = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'].indexOf(selectedDayOfWeek);

  
  let daysUntilSelectedDay = dayOfWeekIndex - currentDayIndex;
  if (daysUntilSelectedDay <= 0) {
    daysUntilSelectedDay += 7; 
  }

  
  const upcomingDates = [];
  for (let i = 0; i < 2; i++) {
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + daysUntilSelectedDay + (i * 7)); 
    const day = nextDate.toLocaleString('default', { weekday: 'long' });
    const date = nextDate.getDate();
    const month = nextDate.toLocaleString('default', { month: 'long' });
    const year = nextDate.getFullYear();
    upcomingDates.push(`${day}, ${date} ${month} ${year}`);
  }

  
  setResultWeek(['first pay :', upcomingDates[0], 'second pay :', upcomingDates[1]]);
  setAllowWeek("w");
}

const handleChangeMonthly = (event) => {
  const day = event.target.value;
  setSelectedDay(day);

  const currentDate = new Date();
 
  const currentYear = currentDate.getFullYear();

  // console.log(`Today is ${currentDayOfWeek}, ${currentMonth} ${currentDay}, ${currentYear}`);

  // Create a date object for the selected day
  const selectedDate = new Date(currentYear, currentDate.getMonth(), day);
  const selectedDayOfWeek = selectedDate.toLocaleString('default', { weekday: 'long' });
  const selectedMonth = selectedDate.toLocaleString('default', { month: 'long' });
  const selectedDay = selectedDate.getDate();

  if (selectedDate > currentDate) {
    // console.log(`Selected date is after today: ${selectedDayOfWeek}, ${selectedMonth} ${selectedDay}, ${currentYear}`);
    
    // console.log(`Selected date: ${selectedDayOfWeek}, ${selectedMonth} ${selectedDay}, ${currentYear}`);
    
   
    const nextMonth = (currentDate.getMonth() + 1) % 12; // Wrap around to handle December
    const nextMonthYear = nextMonth === 0 ? currentYear + 1 : currentYear;
    let nextMonthDate = new Date(nextMonthYear, nextMonth, day);

    
    if (nextMonthDate.getDay() === 0 /* Sunday */ || nextMonthDate.getDay() === 6 /* Saturday */) {
      nextMonthDate = new Date(nextMonthDate.getFullYear(), nextMonthDate.getMonth(), nextMonthDate.getDate() + (nextMonthDate.getDay() === 0 ? 1 : -1));
    }

    const nextMonthDayOfWeek = nextMonthDate.toLocaleString('default', { weekday: 'long' });
    const nextMonthName = nextMonthDate.toLocaleString('default', { month: 'long' });
    // console.log(`First month :  ${selectedDayOfWeek}, ${selectedMonth} ${selectedDay}, ${currentYear}`);
    
    // console.log(`Next month : ${nextMonthDayOfWeek}, ${nextMonthName} ${nextMonthDate.getDate()}, ${nextMonthYear}`);
    const firstMonthString = `First month : ${selectedDayOfWeek}, ${selectedMonth} ${selectedDay}, ${currentYear}`;
    const nextMonthString = `Next month : ${nextMonthDayOfWeek}, ${nextMonthName} ${nextMonthDate.getDate()}, ${nextMonthYear}`;
    const combinedString = `${firstMonthString}\n${nextMonthString}`;
    setMonthlyResult(combinedString);
    setAllowMonthly("w")
    console.log("---------------------------------------------------------------------------------------------------------------------");
   
    const secondNextMonth = (currentDate.getMonth() + 2) % 12; 
    const secondNextMonthYear = secondNextMonth === 0 ? currentYear + 1 : currentYear;
    let secondNextMonthDate = new Date(secondNextMonthYear, secondNextMonth, day);

    
    if (secondNextMonthDate.getDay() === 0 /* Sunday */ || secondNextMonthDate.getDay() === 6 /* Saturday */) {
      secondNextMonthDate = new Date(secondNextMonthDate.getFullYear(), secondNextMonthDate.getMonth(), secondNextMonthDate.getDate() + (secondNextMonthDate.getDay() === 0 ? 1 : -1));
    }

   
    // console.log(`Second next month (${secondNextMonthName}): ${secondNextMonthDayOfWeek}, ${secondNextMonthName} ${secondNextMonthDate.getDate()}, ${secondNextMonthYear}`);
  } else if (selectedDate < currentDate) {
    // console.log(`Selected date is before today: ${selectedDayOfWeek}, ${selectedMonth} ${selectedDay}, ${currentYear}`);
    
    
    const nextMonth = (currentDate.getMonth() + 1) % 12; // Wrap around to handle December
    const nextMonthYear = nextMonth === 0 ? currentYear + 1 : currentYear;
    let nextMonthDate = new Date(nextMonthYear, nextMonth, day);

    
    if (nextMonthDate.getDay() === 0 /* Sunday */ || nextMonthDate.getDay() === 6 /* Saturday */) {
      nextMonthDate = new Date(nextMonthDate.getFullYear(), nextMonthDate.getMonth(), nextMonthDate.getDate() + (nextMonthDate.getDay() === 0 ? 1 : -1));
    }

    const nextMonthDayOfWeek = nextMonthDate.toLocaleString('default', { weekday: 'long' });
    const nextMonthName = nextMonthDate.toLocaleString('default', { month: 'long' });
    // console.log(`Next month : ${nextMonthDayOfWeek}, ${nextMonthName} ${nextMonthDate.getDate()}, ${nextMonthYear}`);
    const firstMonth=`First month : ${nextMonthDayOfWeek}, ${nextMonthName} ${nextMonthDate.getDate()}, ${nextMonthYear}`;
    
    
    const secondNextMonth = (currentDate.getMonth() + 2) % 12; // Wrap around to handle December
    const secondNextMonthYear = secondNextMonth === 0 ? currentYear + 1 : currentYear;
    let secondNextMonthDate = new Date(secondNextMonthYear, secondNextMonth, day);

    
    if (secondNextMonthDate.getDay() === 0 /* Sunday */ || secondNextMonthDate.getDay() === 6 /* Saturday */) {
      secondNextMonthDate = new Date(secondNextMonthDate.getFullYear(), secondNextMonthDate.getMonth(), secondNextMonthDate.getDate() + (secondNextMonthDate.getDay() === 0 ? 1 : -1));
    }

    const secondNextMonthDayOfWeek = secondNextMonthDate.toLocaleString('default', { weekday: 'long' });
    const secondNextMonthName = secondNextMonthDate.toLocaleString('default', { month: 'long' });
    // console.log(`Second next month : ${secondNextMonthDayOfWeek}, ${secondNextMonthName} ${secondNextMonthDate.getDate()}, ${secondNextMonthYear}`);
    const next_Month=`Second next month : ${secondNextMonthDayOfWeek}, ${secondNextMonthName} ${secondNextMonthDate.getDate()}, ${secondNextMonthYear}`;
    const combined=`${firstMonth}\n${next_Month}`
    setMonthlyResult(combined);
    setAllowMonthly("w");
  } else {
    console.log(`Selected date is today: ${selectedDayOfWeek}, ${selectedMonth} ${selectedDay}, ${currentYear}`);
  }
}
const [checking,setChecking]=useState("");
const handleWeekChange = (event) => {
  const weekChange=event.target.value;
 
  setEmploymentType(weekChange);
  };
  const handleMonDayChange = (event) => {
    const mon_DayChange = event.target.value;
    // console.log(employmentType);
    // console.log(mon_DayChange);
  
    setSelectedDay(mon_DayChange);
  
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    const currentYear = currentDate.getFullYear();
  
    let weekStart, weekEnd;
  
    switch (employmentType) {
      case 'First':
        weekStart = 1;
        weekEnd = 7;
        break;
      case 'Second':
        weekStart = 8;
        weekEnd = 14;
        break;
      case 'Third':
        weekStart = 15;
        weekEnd = 21;
        break;
      case 'Fourth':
        weekStart = 22;
        weekEnd = new Date(currentYear, currentDate.getMonth() + 1, 0).getDate();
        break;
      case 'Last':
        const lastDayOfMonth = new Date(currentYear, currentDate.getMonth() + 1, 0).getDate();
        weekStart = lastDayOfMonth - 6;
        weekEnd = lastDayOfMonth;
        break;
      default:
        console.log('Invalid employmentType');
        return;
    }
  
    let payDate = null;
    let payDateString = null;
  
    for (let day = weekStart; day <= weekEnd; day++) {
      const date = new Date(currentYear, currentDate.getMonth(), day);
      const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
  
      if (dayOfWeek.toLowerCase() === mon_DayChange.toLowerCase()) {
        payDate = new Date(currentYear, currentDate.getMonth(), day);
        payDateString = `${dayOfWeek}, ${currentMonth} ${day}, ${currentYear}`;
        // console.log(`Pay Date: ${payDateString}`);
        break;
      }
    }
  
    if (payDateString) {
      const formattedCurrentDate = `${currentMonth} ${currentDate.getDate()}, ${currentYear}`;
  
      if (payDate > currentDate) {
       
  
        const nextMonthDate = new Date(payDate.getFullYear(), payDate.getMonth() + 1, payDate.getDate());
        const nextMonthDayOfWeek = nextMonthDate.toLocaleDateString('en-US', { weekday: 'long' });
  
        // Calculate week start and end for the next month
        let nextMonthWeekStart, nextMonthWeekEnd;
        switch (employmentType) {
          case 'First':
            nextMonthWeekStart = 1;
            nextMonthWeekEnd = 7;
            break;
          case 'Second':
            nextMonthWeekStart = 8;
            nextMonthWeekEnd = 14;
            break;
          case 'Third':
            nextMonthWeekStart = 15;
            nextMonthWeekEnd = 21;
            break;
          case 'Fourth':
            nextMonthWeekStart = 22;
            nextMonthWeekEnd = new Date(nextMonthDate.getFullYear(), nextMonthDate.getMonth() + 1, 0).getDate();
            break;
          case 'Last':
            const lastDayOfNextMonth = new Date(nextMonthDate.getFullYear(), nextMonthDate.getMonth() + 1, 0).getDate();
            nextMonthWeekStart = lastDayOfNextMonth - 6;
            nextMonthWeekEnd = lastDayOfNextMonth;
            break;
          default:
            console.log('Invalid employmentType');
            return;
        }
  
        let secondPayDate = null;
        for (let day = nextMonthWeekStart; day <= nextMonthWeekEnd; day++) {
          const date = new Date(nextMonthDate.getFullYear(), nextMonthDate.getMonth(), day);
          const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
  
          if (dayOfWeek.toLowerCase() === mon_DayChange.toLowerCase()) {
            secondPayDate = new Date(nextMonthDate.getFullYear(), nextMonthDate.getMonth(), day);
            break;
          }
        }
  
        if (secondPayDate) {
          // Check if the second pay date is a weekend
          while (secondPayDate.getDay() === 0 || secondPayDate.getDay() === 6) {
            // Move to next weekday
            secondPayDate.setDate(secondPayDate.getDate() + 1);
          }
  
          const secondPayDateString = `${secondPayDate.toLocaleDateString('en-US', { weekday: 'long' })}, ${secondPayDate.toLocaleString('default', { month: 'long' })} ${secondPayDate.getDate()}, ${secondPayDate.getFullYear()}`;
          // console.log('Next pay date is:', payDateString);
          // console.log('Second pay Date:', secondPayDateString);
          setSpecificDayMon(payDateString);
          setSpecificDayMon1(secondPayDateString);
          setAllowSpecificDayMon("w");
        }
      } else {
        // console.log('Next pay date is:', payDateString);
  
        for (let i = 1; i <= 2; i++) {
          const futurePayDate = new Date(payDate.getFullYear(), payDate.getMonth() + i, payDate.getDate());
          const futureDayOfWeek = futurePayDate.toLocaleDateString('en-US', { weekday: 'long' });
  
          // Calculate week start and end for the future month
          let futureMonthWeekStart, futureMonthWeekEnd;
          switch (employmentType) {
            case 'First':
              futureMonthWeekStart = 1;
              futureMonthWeekEnd = 7;
              break;
            case 'Second':
              futureMonthWeekStart = 8;
              futureMonthWeekEnd = 14;
              break;
            case 'Third':
              futureMonthWeekStart = 15;
              futureMonthWeekEnd = 21;
              break;
            case 'Fourth':
              futureMonthWeekStart = 22;
              futureMonthWeekEnd = new Date(futurePayDate.getFullYear(), futurePayDate.getMonth() + 1, 0).getDate();
              break;
            case 'Last':
              const lastDayOfFutureMonth = new Date(futurePayDate.getFullYear(), futurePayDate.getMonth() + 1, 0).getDate();
              futureMonthWeekStart = lastDayOfFutureMonth - 6;
              futureMonthWeekEnd = lastDayOfFutureMonth;
              break;
            default:
              console.log('Invalid employmentType');
              return;
          }
  
          let futurePayDateAdjusted = null;
          for (let day = futureMonthWeekStart; day <= futureMonthWeekEnd; day++) {
            const date = new Date(futurePayDate.getFullYear(), futurePayDate.getMonth(), day);
            const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
  
            if (dayOfWeek.toLowerCase() === mon_DayChange.toLowerCase()) {
              futurePayDateAdjusted = new Date(futurePayDate.getFullYear(), futurePayDate.getMonth(), day);
              break;
            }
          }
  
          if (futurePayDateAdjusted) {
            // Check if the future pay date is a weekend
            while (futurePayDateAdjusted.getDay() === 0 || futurePayDateAdjusted.getDay() === 6) {
              // Move to next weekday
              futurePayDateAdjusted.setDate(futurePayDateAdjusted.getDate() + 1);
            }
  
            const futurePayDateString = `${futurePayDateAdjusted.toLocaleDateString('en-US', { weekday: 'long' })}, ${futurePayDateAdjusted.toLocaleString('default', { month: 'long' })} ${futurePayDateAdjusted.getDate()}, ${futurePayDateAdjusted.getFullYear()}`;
            if (i === 1) {
              // console.log('Pay date for month 1:', futurePayDateString);
              setSpecificDayMon( futurePayDateString);
          } else if (i === 2) {
              // console.log('Pay date for month 2:', futurePayDateString);
              setSpecificDayMon1( futurePayDateString);
          }

          
          setAllowSpecificDayMon("w");
          }
        }
      }
    }
  
    // Log current date (month, year, and day)
    // console.log(`Current Date: ${currentMonth} ${currentDate.getDate()}, ${currentYear}`);
  };
  
  const [firstPayDate, setFirstPayDate] = useState('');
  const [secondPayDate, setSecondPayDate] = useState('');
  const handleFirstPayDateChange = (e) => {
    const selectedDate = parseInt(e.target.value); // Parse the selected value as an integer
    const currentDate = new Date(); // Get the current date object
  
    // Create a new date object for the selected date
    const selectedDateObject = new Date(currentDate.getFullYear(), currentDate.getMonth(), selectedDate);
  
    if (selectedDateObject > currentDate) {
      // Selected date is after current date
      // console.log(`Selected Date: ${selectedDateObject.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}`);
      setFirstDate(` ${selectedDateObject.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}`)
    } else {
      // Selected date is before or the same as current date
      // Calculate next month's date with the same day
      let nextMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, selectedDate);
  
      // Check if the calculated date falls on a weekend
      const dayOfWeek = nextMonthDate.getDay();
      if (dayOfWeek === 6) { // If Saturday
          nextMonthDate.setDate(nextMonthDate.getDate() + 2); // Move to Monday
      } else if (dayOfWeek === 0) { // If Sunday
          nextMonthDate.setDate(nextMonthDate.getDate() + 1); // Move to Monday
      }
  
      // console.log(`Next Month Date: ${nextMonthDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}`);
      setFirstDate(` ${nextMonthDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}`)
  }
  
  
    setFirstPayDate(selectedDate); // Update state with selected date
  };
  
  
  
  const handleSecondPayDateChange = (event) => {
    const selectedDay = parseInt(event.target.value);
    setSecondPayDate(event.target.value);

    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1; // getMonth is 0-indexed
    const currentYear = currentDate.getFullYear();

    const getFormattedDate = (day, month, year) => {
      const date = new Date(year, month - 1, day); // month - 1 because JavaScript months are 0-indexed
      const dayOfWeek = date.toLocaleString('default', { weekday: 'long' });
      const monthName = date.toLocaleString('default', { month: 'long' });
      return `${dayOfWeek}, ${monthName} ${day}, ${year}`;
    };

    if (selectedDay < currentDay) {
      // Date selected is before current date
      const nextMonth = currentMonth === 12 ? 1 : currentMonth + 1;
      const nextYear = currentMonth === 12 ? currentYear + 1 : currentYear;
      const formatted = getFormattedDate(selectedDay, nextMonth, nextYear);
      let date = new Date(nextYear, nextMonth - 1, selectedDay);
      
      // Adjust the date if it falls on a weekend
      let dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });
      if (dayOfWeek === 'Saturday') {
        date.setDate(date.getDate() - 1); // Shift to Friday if Saturday
      } else if (dayOfWeek === 'Sunday') {
        date.setDate(date.getDate() + 1); // Shift to Monday if Sunday
      }
    
      setFormattedDate(`${getFormattedDate(date.getDate(), date.getMonth() + 1, date.getFullYear())}`);
      setAllowTwoDay("x");
    } else {
      // Date selected is after or same as current date
      let date = new Date(currentYear, currentMonth - 1, selectedDay);
    
      // Adjust the date if it falls on a weekend
      let dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });
      if (dayOfWeek === 'Saturday') {
        date.setDate(date.getDate() - 1); // Shift to Friday if Saturday
      } else if (dayOfWeek === 'Sunday') {
        date.setDate(date.getDate() + 1); // Shift to Monday if Sunday
      }
    
      setFormattedDate(`${getFormattedDate(date.getDate(), date.getMonth() + 1, date.getFullYear())}`);
      setAllowTwoDay("x");
    }
    
  };
  const getDatesForWeek = (week) => {
    const dates = [];
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();

    const firstDay = new Date(year, month, 1);
    let dayOfWeek = firstDay.getDay(); // 0 (Sunday) to 6 (Saturday)
    if (dayOfWeek === 0) dayOfWeek = 7; // Make Sunday 7 for easier calculation

    let startDate;

   
  switch (week) {
    case 'First':
      startDate = 1;
      break;
    case 'Second':
      startDate = 8 - (dayOfWeek - 1);
      break;
    case 'Third':
      startDate = 15 - (dayOfWeek - 1);
      break;
    case 'Fourth':
      startDate = 22 - (dayOfWeek - 1);
      break;
    default:
      return [];
  }
    for (let i = 0; i < 7; i++) {
      const date = new Date(year, month, startDate + i);
      if (date.getMonth() === month) {
        dates.push(date);
      }
    }

    return dates;
  };
  const getDateForWeekAndDay = (week, day) => {
    const dayMap = {
      Monday: 1,
      Tuesday: 2,
      Wednesday: 3,
      Thursday: 4,
      Friday: 5,
    };

    const dates = [];
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();

    const firstDay = new Date(year, month, 1);
    let dayOfWeek = firstDay.getDay(); // 0 (Sunday) to 6 (Saturday)
    if (dayOfWeek === 0) dayOfWeek = 7; // Make Sunday 7 for easier calculation

    let startDate;

    switch (week) {
      case 'First':
        startDate = 1;
        break;
      case 'Second':
        startDate = 8 - (dayOfWeek - 1);
        break;
      case 'Third':
        startDate = 15 - (dayOfWeek - 1);
        break;
      case 'Fourth':
        startDate = 22 - (dayOfWeek - 1);
        break;
      case 'Last':
        const lastDayOfMonth = new Date(year, month + 1, 0).getDate(); // Last day of the current month
        startDate = lastDayOfMonth - (dayOfWeek - 1); // Calculate the last week based on last day of the month
        break;
      default:
        return [];
    }
  

    for (let i = 0; i < 7; i++) {
      const date = new Date(year, month, startDate + i);
      if (date.getMonth() === month) {
        dates.push(date);
      }
    }

    return dates.find(date => date.getDay() === dayMap[day]);
  };
  const formatDate = (date) => {
    if (!date) return ""; // Add a null check
  
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  const handleFirstPayWeekChange = (event) => {
    const selectedWeek = event.target.value;
    setFirstPayWeek(selectedWeek);
  
    // Get the current date
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const nextMonth = currentDate.getMonth() + 1;
    const firstDayOfMonth = new Date(year, month, 1);
    // Get the day of the week for the first day of the month
    const firstDayWeekDay = firstDayOfMonth.getDay();
  
    // Define the start day for the selected week in the current month
    let startDayCurrentMonth;
    switch (selectedWeek) {
      case 'First':
        startDayCurrentMonth = 1;
        break;
      case 'Second':
        startDayCurrentMonth = 8 - firstDayWeekDay;
        break;
      case 'Third':
        startDayCurrentMonth = 15 - firstDayWeekDay;
        break;
      default:
        startDayCurrentMonth = 1;
    }
  
    // Calculate the dates for the selected week in the current month
    const datesCurrentMonth = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(year, month, startDayCurrentMonth + i);
      datesCurrentMonth.push(date.toDateString());
    }
  
    // console.log(`Dates for the ${selectedWeek} week of the current month:`);
    // console.log(datesCurrentMonth.join('\n'));
  
    // Calculate the dates for the selected week in the next month
    const firstDayOfNextMonth = new Date(year, nextMonth, 1);
    const firstDayWeekDayNextMonth = firstDayOfNextMonth.getDay();
  
    let startDayNextMonth;
    switch (selectedWeek) {
      case 'First':
        startDayNextMonth = 1;
        break;
      case 'Second':
        startDayNextMonth = 8 - firstDayWeekDayNextMonth;
        break;
      case 'Third':
        startDayNextMonth = 15 - firstDayWeekDayNextMonth;
        break;
        
      default:
        startDayNextMonth = 1;
    }
  
    const datesNextMonth = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(year, nextMonth, startDayNextMonth + i);
      datesNextMonth.push(date.toDateString());
    }
  
    // console.log(`Dates for the ${selectedWeek} week of the next month:`);
    // console.log(datesNextMonth.join('\n'));
  
    setSelectedWeekDates(datesCurrentMonth);
    setNextMonthWeekDates(datesNextMonth);
  };
  
  const handleFirstPayDayChange = (event) => {
    const selectedDay = event.target.value;
    setFirstPayDay(selectedDay);
  
    const dayIndex = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].indexOf(selectedDay);
  
    if (dayIndex === -1) {
      console.error('Invalid day selected');
      return;
    }
  
    const findDateForDay = (dates) => {
      for (const dateString of dates) {
        const date = new Date(dateString);
        if (date.getDay() === dayIndex) {
          return date;
        }
      }
      return null;
    };
  
    const selectedWeekDate = findDateForDay(selectedWeekDates);
    const nextMonthDate = findDateForDay(nextMonthWeekDates);
  
    if (selectedWeekDate) {
      if (selectedWeekDate < new Date()) {
          // console.log(`Selected day in the selected week is before current date: ${selectedWeekDate.toDateString()} (${selectedWeekDate.getFullYear()})`);
      } else {
          // Check if the selected date is a weekend
          let dayOfWeek = selectedWeekDate.getDay();
          if (dayOfWeek === 6) { // Saturday
              selectedWeekDate.setDate(selectedWeekDate.getDate() + 2); // Move to Monday
          } else if (dayOfWeek === 0) { // Sunday
              selectedWeekDate.setDate(selectedWeekDate.getDate() + 1); // Move to Monday
          }
  
          // console.log(`Selected day in the selected week: ${selectedWeekDate.toDateString()} (${selectedWeekDate.getFullYear()})`);
          setResultTwiceMonth(`Second Day: ${selectedWeekDate.toDateString()} (${selectedWeekDate.getFullYear()})`);
          setAllowTwiceMonth("w");
      }
  } else {
      console.log(`Selected day not found in the selected week.`);
  }
  
    if (nextMonthDate) {
      // console.log(`Selected day in the first week of the next month: ${nextMonthDate.toDateString()} (${nextMonthDate.getFullYear()})`);
      setResultTwiceMonth(` ${nextMonthDate.toDateString()} (${nextMonthDate.getFullYear()})`);
      setAllowTwiceMonth("w");
    
      
    } else {
      console.log(`Selected day not found in the first week of the next month.`);
    }
  };
  
  
  const handleSecondPayWeekChange=(event)=>{
    const selectedWeek = event.target.value;
    setSecondPayWeek(selectedWeek);
  
    // Get the current date
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const nextMonth = currentDate.getMonth() + 1;
    const firstDayOfMonth = new Date(year, month, 1);
    // Get the day of the week for the first day of the month
    const firstDayWeekDay = firstDayOfMonth.getDay();
  
    // Define the start day for the selected week in the current month
    let startDayCurrentMonth;
    switch (selectedWeek) {
      case 'First':
        startDayCurrentMonth = 1;
        break;
      case 'Second':
        startDayCurrentMonth = 8 - firstDayWeekDay;
        break;
      case 'Third':
        startDayCurrentMonth = 15 - firstDayWeekDay;
        break;
        case 'Fourth':
          startDayCurrentMonth = 22 - firstDayWeekDay;
          break;
          case 'Last':
            startDayCurrentMonth = 29 - firstDayWeekDay;
            break;
      default:
        startDayCurrentMonth = 1;
    }
  
    // Calculate the dates for the selected week in the current month
    const datesCurrentMonth = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(year, month, startDayCurrentMonth + i);
      datesCurrentMonth.push(date.toDateString());
    }
  
    // console.log(`Dates for the ${selectedWeek} week of the current month:`);
    // console.log(datesCurrentMonth.join('\n'));
  
    // Calculate the dates for the selected week in the next month
    const firstDayOfNextMonth = new Date(year, nextMonth, 1);
    const firstDayWeekDayNextMonth = firstDayOfNextMonth.getDay();
  
    let startDayNextMonth;
    switch (selectedWeek) {
      case 'First':
        startDayNextMonth = 1;
        break;
      case 'Second':
        startDayNextMonth = 8 - firstDayWeekDayNextMonth;
        break;
      case 'Third':
        startDayNextMonth = 15 - firstDayWeekDayNextMonth;
        break;
        case 'Fourth':
          startDayNextMonth = 22 - firstDayWeekDayNextMonth;
          break;
          case 'Last':
            startDayNextMonth = 29 - firstDayWeekDayNextMonth;
            break;
      default:
        startDayNextMonth = 1;
    }
  
    const datesNextMonth = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(year, nextMonth, startDayNextMonth + i);
      datesNextMonth.push(date.toDateString());
    }
  
    // console.log(`Dates for the ${selectedWeek} week of the next month:`);
    // console.log(datesNextMonth.join('\n'));
  
    setSelectedWeekDates1(datesCurrentMonth);
    setNextMonthWeekDates1(datesNextMonth);
  }
  const handleSecondPayDayChange = (event) => {
    const selectedDay = event.target.value;
    setSecondPayDay(selectedDay);
  
    const dayIndex = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].indexOf(selectedDay);
  
    if (dayIndex === -1) {
      console.error('Invalid day selected');
      return;
    }
  
    const findDateForDay = (dates) => {
      for (const dateString of dates) {
        const date = new Date(dateString);
        if (date.getDay() === dayIndex) {
          return date;
        }
      }
      return null;
    };
  
    const selectedWeekDate = findDateForDay(selectedWeekDates1);
    const nextMonthDate = findDateForDay(nextMonthWeekDates1);
  
    if (selectedWeekDate) {
      if (selectedWeekDate > new Date()) {
        // console.log(`Selected day in the selected week: ${selectedWeekDate.toDateString()} (${selectedWeekDate.getFullYear()})`);
        setResultTwiceMonth1(` ${selectedWeekDate.toDateString()} (${selectedWeekDate.getFullYear()})`);
        setAllowTwiceMonth("w");
        
        
      } else {
        // console.log(`Selected day in the selected week is before current date: ${selectedWeekDate.toDateString()} (${selectedWeekDate.getFullYear()})`);
        if (nextMonthDate) {
          // console.log(`Selected day in the first week of the next month: ${nextMonthDate.toDateString()} (${nextMonthDate.getFullYear()})`);
          setResultTwiceMonth1(` ${nextMonthDate.toDateString()} (${nextMonthDate.getFullYear()})`);
          setAllowTwiceMonth("w");
        } else {
          console.log(`Selected day not found in the first week of the next month.`);
        }
      }
    } else {
      console.log(`Selected day not found in the selected week.`);
    }
  };
  

  return (
    <div className="container">
      <label htmlFor="stateSelector" className="label">State</label>
      <select
        id="stateSelector"
        className="selector1"
        defaultValue="California"
        disabled
      >
        <option value="California">California</option>
      </select>
      <label htmlFor="loanAmountSelector"  className="label">Please Select Loan Amount</label>
      <div className="select-wrapper">
        <select
          id="loanAmountSelector"
          className="selector"
          
        >
             <option value="" >Select</option>
          <option value="150">150</option>
          <option value="200">200</option>
          <option value="250">250</option>
          <option value="300">300</option>
        </select>
      </div>
      <label htmlFor="loanAmountSelector" className="label">Personal Information</label>
      <div className='select-wrapper'>
        <label className='label-input'>First Name*</label>
        <input
       
         className="form-input"
        required/>

      </div>
     
      <div className='select-wrapper'>
        <label className='label-input'>Last Name*</label>
        <input
       
         className="form-input"
        required/>

      </div>
      <div className='select-wrapper'>
        <label className='label-input'>SSN/ITIN*</label>
        <input
       
         className="form-input"
        required/>

      </div>
      <div className='select-wrapper'>
        <label className='label-input'>Email Address*</label>
        <input
       
         className="form-input"
        required/>

      </div>
     
       
      <div className='select-wrapper'>
        <label className='label-input'>Date of Birth*</label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['MobileDatePicker']}  sx={{marginLeft:"5%" ,width:"100%"}}>
        <DemoItem  >
        <MobileDatePicker
            
            className="form-input"
            
            renderInput={(params) => <TextField {...params} className="form-date" />}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
      </div>
      <div className='select-wrapper'>
        <label className='label-input'>Valid Driver's License or State ID Number*</label>
        <input
       
         className="form-input"
        required/>
      </div>
      <label htmlFor="loanAmountSelector" className="label-input">Driver's License State</label>
      <div className="select-wrapper">
        <select
          id="loanAmountSelector"
          className="selector"
          
        >
             <option value="" >State Issued</option>
          <option value="150">Alabama</option>
          <option value="200">Alaska</option>
          <option value="250">Arizona</option>
          <option value="300">Arkansas</option>
          <option value="300">California</option>
          <option value="300">Colorado</option>
          <option value="300">connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OK">Oklahoma</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhodelsland</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="UT">Utah</option>
          <option value="TX">Texas</option>
          <option value="VT">Vermont</option>

        </select>
      </div>
      <div className='select-wrapper'>
        <label className='label-input'>Cell Phone*</label>
        <input
      type="tel"
      value={phoneNumber}
      onChange={handleChange}
      maxLength={14} 
      placeholder="(123) 456-7890"
      className='form-date' 
    />
      </div>
      <div className='select-wrapper'>
        <label className='label-input'>Text Message Communication*</label>
        <div>
        <FormControl component="fieldset" style={{marginTop:"2%"}}>
      <Grid container alignItems="center">
       
        <Grid item style={{marginLeft:"5%"}}>
          <RadioGroup
            aria-label="home status"
            name="homeStatus"
            value={selectedHome}
            onChange={handleHouseChange}
            row 
          >
            <FormControlLabel value="own" sx={{ '.MuiFormControlLabel-label': { fontSize: '0.9rem' ,ml:-0.8,mt:0.2} }}  control={<Radio sx={{ transform: 'scale(0.7)',mt:-2.5}}/>} label=" I agree to receive notifications regarding my account via text message." />
            <FormControlLabel value="rent"  sx={{ '.MuiFormControlLabel-label': { fontSize: '0.9rem' ,ml:-0.8,mt:0.2} }} control={<Radio sx={{ transform: 'scale(0.7)',mt:-2.5 }} />} label="I do not want to receive notifications regarding my account via text" />
          </RadioGroup>
        </Grid>
      </Grid>
    </FormControl>
      </div>
      </div>
      <div className='select-wrapper'>
        <label className='label-input' >Home Phone</label>
        <input
      type="tel"
      value={homeNumber}
      onChange={handleChangeHome}
      maxLength={14} 
      placeholder="(123) 456-7890"
      className='form-date' 
    />
      </div>
      <div className='select-wrapper'>
        <label className='label-input'> Address*</label>
        <input
       
         className="form-input"
        required/>

      </div>
      <div className='select-wrapper'>
        <label className='label-input'> State*</label>
        <select
        id="stateSelector"
        className="selector1"
        defaultValue="California"
        disabled
      >
        <option value="California">California</option>
      </select>
      </div>
      <div className='select-wrapper'>
        <label className='label-input'>City*</label>
        <input
       
         className="form-input"
        required/>
      </div>
      <div className='select-wrapper'>
        <label className='label-input'>Zip*</label>
        <input
       
         className="form-input"
        required/>
      </div>
      <div className='select-wrapper'>
        <label className='label-input'>At Address Since*</label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['MobileDatePicker']}  sx={{marginLeft:"5%" ,width:"100%"}}>
        <DemoItem  >
        <MobileDatePicker
            
            className="form-input"
            
            renderInput={(params) => <TextField {...params} className="form-date" />}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
      </div>
      <FormControl component="fieldset" style={{marginTop:"2%"}}>
      <Grid container alignItems="center">
        <Grid item>
          <FormLabel component="legend" className='label-input' style={{marginLeft:"15%",fontSize:"14px"}} >Home Status*</FormLabel>
        </Grid>
        <Grid item style={{marginLeft:"10%"}}>
          <RadioGroup
            aria-label="home status"
            name="homeStatus"
            value={selectedHome}
            onChange={handleHouseChange}
            row 
          >
            <FormControlLabel value="own" sx={{ '.MuiFormControlLabel-label': { fontSize: '0.9rem' ,ml:-0.8,mt:0.2} }}  control={<Radio sx={{ transform: 'scale(0.7)' }}/>} label="Own" />
            <FormControlLabel value="rent"  sx={{ '.MuiFormControlLabel-label': { fontSize: '0.9rem' ,ml:-0.8,mt:0.2} }} control={<Radio sx={{ transform: 'scale(0.7)' }} />} label="Rent" />
          </RadioGroup>
        </Grid>
      </Grid>
    </FormControl>
      <label htmlFor="loanAmountSelector" className="label">Banking Information</label>
      <div className='select-wrapper'>
        <label className='label-input'>Bank Routing Number*</label>
        <input
       
         className="form-input"
        required/>
      </div>
      <div className='select-wrapper'>
        <label className='label-input'>Account Number*</label>
        <input
       
         className="form-input"
        required/>
      </div>
      <div className='select-wrapper'>
        <label className='label-input'>Account Opening Date*</label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['MobileDatePicker']}  sx={{marginLeft:"5%" ,width:"100%"}}>
        <DemoItem  >
        <MobileDatePicker
            
            className="form-input"
            
            renderInput={(params) => <TextField {...params} className="form-date" />}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
      </div>
      <label htmlFor="loanAmountSelector" className="label">Income And Employment Information (primary)</label>
      <div className='select-wrapper'>
      <FormControl component="fieldset" style={{marginTop:"2%"}}>
      <Grid container alignItems="center">
        <Grid item>
          <FormLabel component="legend" style={{marginLeft:"15%",fontSize:"14px"}} >Employment Status*</FormLabel>
        </Grid>
        {/* <Grid item style={{marginLeft:"10%"}}> */}
          <RadioGroup
            aria-label="home status"
            name="homeStatus"
            value={selectedHome}
            onChange={handleHouseChange}
            row 
            style={{marginLeft:"5%",fontSize:"10px"}}
          >
            <FormControlLabel value="Full Time"  sx={{ '.MuiFormControlLabel-label': { fontSize: '0.9rem' ,ml:-0.8,mt:0.2} }} control={<Radio sx={{ transform: 'scale(0.7)' }} />}  label="Full Time" />
            <FormControlLabel value="Part Time"  sx={{ '.MuiFormControlLabel-label': { fontSize: '0.9rem' ,ml:-0.8,mt:0.2} }}  control={<Radio sx={{ transform: 'scale(0.7)' }} />}  label="Part Time" />
            <FormControlLabel value="Others"  sx={{ '.MuiFormControlLabel-label': { fontSize: '0.9rem' ,ml:-0.8,mt:0.2} }}   control={<Radio sx={{ transform: 'scale(0.7)' }} />}  label="Others" />
          </RadioGroup>
        {/* </Grid> */}
      </Grid>
    </FormControl>
      <div className='select-wrapper'>
        <label className='label-input'>Last Check Amount*</label>
        <input
       
         className="form-input"
        required/>
      </div>
      <label htmlFor="loanAmountSelector" className="label-input">Select Income Type* </label>
      <div className="select-wrapper">
        <select
          id="loanAmountSelector"
          className="selector"
          onChange={handleEmploymentTypeChange}
          value={employmentType}
        >
             <option value="" >Select</option>
             <option value="P" id="employed1">Employed</option>
             <option value="E">Self-employed</option>
             <option value="R">Retirement/Pension</option>
             <option value="S">Social Security</option>
             <option value="S">Social Security</option>
             <option value="O">Other</option>
        </select>
      </div>
      {showOtherIncomeInput && (
        <div className='select-wrapper'>
          <label className='label-input'>Specify Other Income Type*</label>
          <input
            type="text"
            className="form-input"
            required
          />
        </div>
      )}
 
    
      <div className='select-wrapper'>
      <FormControl component="fieldset" style={{marginTop:"5%"}}>
      <Grid container alignItems="center">
        <Grid item>
          <FormLabel component="legend" style={{marginLeft:"10%",fontSize:"14px"}} >How do you Receive your Income?*</FormLabel>
        </Grid>
        {/* <Grid item style={{marginLeft:"10%"}}> */}
          <RadioGroup
            aria-label="home status"
            name="homeStatus"
            value={selectedHome}
            onChange={handleHouseChange}
            row 
            style={{marginLeft:"5%",fontSize:"10px"}}
          >
            <FormControlLabel value="own"  sx={{ '.MuiFormControlLabel-label': { fontSize: '0.9rem' ,ml:-0.8,mt:0.2} }} control={<Radio sx={{ transform: 'scale(0.7)' }} />}  label="Direct Deposite" />
            <FormControlLabel value="rent"  sx={{ '.MuiFormControlLabel-label': { fontSize: '0.9rem' ,ml:-0.8,mt:0.2} }}  control={<Radio sx={{ transform: 'scale(0.7)' }} />}  label="Paper Deposite" />

          </RadioGroup>
        {/* </Grid> */}
      </Grid>
    </FormControl>
      </div>
      <label htmlFor="loanAmountSelector" className="label-input">How often do you Receive  a paycheck ?* </label>
      <div className="select-wrapper">
        <select
          id="loanAmountSelector"
          className="selector"
          onChange={handlePayFrequencyChange}
          value={payFrequency}
        >
             <option value="" selected="selected">Select Pay Frequency</option>
             
             <option value="W">Weekly</option>
             <option value="B">Bi-Weekly</option>
             <option value="M">Monthly</option>
             <option value="S">Twice a month</option>
             
        </select>
      </div>
      {payFrequency ==='S' && (
         <div>
         <label htmlFor="loanAmountSelector" className="label-input">How Paid?*</label>
         <div className="select-wrapper">
           <select
             id="payFrequencySelector"
             className="selector"
             onChange={(e) => setPaymentOption(e.target.value)}
             value={paymentOption}
           >
             <option value="">Select</option>
             <option value="Specific">Two Specific Day</option>
             <option value="Specific_week">Specific Week and Days</option>
           </select>
         </div>
         {paymentOption === 'Specific' && (
          <div>
            <div>
              <label htmlFor="daySelector" className="label-input">1st Paydate of Month?*:</label>
            <select
          id="firstDaySelector"
          className="selector"
          value={firstPayDate}
          onChange={handleFirstPayDateChange}
        >
          <option value="">Select</option>
          {[...Array(18)].map((_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}{getDaySuffix(index + 1)}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="secondDaySelector" className="label-input">2nd Paydate of Month?*:</label>
        <select
  id="secondDaySelector"
  className="selector"
  value={secondPayDate}
  onChange={handleSecondPayDateChange}
>
  <option value="">Select</option>
  {[...Array(20)].map((_, index) => ( 
    <option key={index + 12} value={index + 12}>
      {index + 12}{getDaySuffix(index + 12)}
    </option>
  ))}
</select>

            </div>
            </div>
          )}
           {paymentOption === 'Specific_week' && (
         <div>
           <label htmlFor="loanAmountSelector" className="label-input">1st Pay Week?* </label>
             <div className="select-wrapper">
               <select
                 id="firstPayWeekSelector"
                 className="selector"
                 onChange={handleFirstPayWeekChange}
                 value={firstPayWeek}
               >
                    <option value="" >Select</option>
                    <option value="First">First</option>
                    <option value="Second">Second</option>
                    <option value="Third">Third</option>
                   
                    
                    
               </select>
               <label htmlFor="dayOfWeekSelector" className="label-input">1st Payday?* </label>
              <select
                id="firstPayDaySelector"
                className="selector"
                onChange={handleFirstPayDayChange}
                value={firstPayDay}
              >
                <option value="">Select</option>
                
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                
              </select>

             </div>
             <label htmlFor="loanAmountSelector" className="label-input">2nd Pay Week?* </label>
             <div className="select-wrapper">
               <select
                  id="secondPayWeekSelector"
                  className="selector"
                  onChange={handleSecondPayWeekChange}
                  value={secondPayWeek}
               >
                    <option value="" >Select</option>
                    
                    <option value="Third">Third</option>
                    <option value="Fourth">Fourth</option>
                    <option value="Last">Last</option>
                    
               </select>
               <label htmlFor="dayOfWeekSelector" className="label-input">2nd Payday?* </label>
              <select
               id="secondPayDaySelector"
               className="selector"
               onChange={handleSecondPayDayChange}
               value={secondPayDay}
              >
                <option value="">Select</option>
               
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
             
              </select>

             </div>
          </div>
          )}
         </div>
      )}
      {payFrequency === 'M' && (
        <div>
          <label htmlFor="loanAmountSelector" className="label-input">How Paid?*</label>
          <div className="select-wrapper">
            <select
              id="payFrequencySelector"
              className="selector"
              onChange={(e) => setPaymentOption(e.target.value)}
              value={paymentOption}
            >
              <option value="">Select</option>
              <option value="Specific">Specific Day</option>
              <option value="Specific week">Specific Week and Days</option>
            </select>
          </div>
          {paymentOption === 'Specific' && (
            <div>
              <label htmlFor="daySelector" className="label-input">Select Day:</label>
              <select id="daySelector" className="selector" value={selectedDay} onChange={handleChangeMonthly}>
      <option value="">Select</option>
      {[...Array(31)].map((_, index) => (
        <option key={index + 1} value={index + 1}>{index + 1}{getDaySuffix(index + 1)}</option>
      ))}
    </select>
            </div>
          )}
          {paymentOption === 'Specific week' && (
            <div>
             <label htmlFor="loanAmountSelector" className="label-input">Which Week*</label>
             <div className="select-wrapper">
               <select
                 id="loanAmountSelector"
                 className="selector"
                 onChange={handleWeekChange}
                 value={employmentType}
               >
                    <option value="" >Select</option>
                    <option value="First">First</option>
                    <option value="Second">Second</option>
                    <option value="Third">Third</option>
                    <option value="Fourth">Fourth</option>
                    <option value="Last">Last</option>
                    
               </select>
             </div>
             <label htmlFor="dayOfWeekSelector" className="label-input">Which day of the week? </label>
              <select
                id="dayOfWeekSelector"
                className="selector"
                value={selectedDay}
                onChange={handleMonDayChange}
              >
                <option value="">Select</option>
              
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                
              </select>

             </div>
          )}
        </div>
      )}
      
      {payFrequency === 'W' && (
        <div>
          <label htmlFor="loanAmountSelector" className="label-input">How Paid?* </label>
          <div className="select-wrapper">
            <select
              id="loanAmountSelector"
              className="selector"
              value={paymentOption}
              onChange={(e) => setPaymentOption(e.target.value)}
            >
              <option value="" selected="selected">Select</option>
              <option value="X">Treat Weekly as Bi-Weekly</option>
              <option value="W">Weekly</option>
            </select>
          </div>

          {paymentOption === 'X' && (
            <>
              <label htmlFor="dayOfWeekSelector" className="label-input">Which day of the week?* </label>
              <select
                id="dayOfWeekSelector"
                className="selector"
                value={selectedDay}
                onChange={handleDayChange}
              >
                <option value="">Select</option>
              
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
             
              </select>

              <div className='select-wrapper'>
                <label className='label-input'>Select Next Pay Date*</label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['MobileDatePicker']} sx={{ marginLeft: "5%", width: "100%" }}>
        <DemoItem>
          <MobileDatePicker
            className="form-input"
            value={selectedDate}
            onChange={handleSelectDate}
            renderInput={(params) => <TextField {...params} className="form-date" style={{ fontWeight: 1000 }} />}
            shouldDisableDate={shouldDisableDate}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
              </div>
            </>
          )}
             {paymentOption === 'W' && (
            <>
              <label htmlFor="dayOfWeekSelector" className="label-input">Which day of the week? </label>
              <select
                id="dayOfWeekSelector"
                className="selector"
                value={dayOfWeek}
                onChange={handleDaychangeWeek}
                
              >
                <option value="">Select</option>
               
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                
              </select>

              
            </>
          )}
        </div>
      )}
      {payFrequency!=='B' && payFrequency!=='W' &&  payFrequency!=='M' &&  payFrequency!=='S' &&(
        <div><label htmlFor="loanAmountSelector" className="label-input">How Paid?* </label>
      <div className="select-wrapper">
        <select
          id="loanAmountSelector"
          className="selector"
          
        >
             <option value="" selected="selected">Select</option>
            
        </select>
      </div>
      </div>)}
      
      {payFrequency === 'B' && (
        <div className="select-wrapper">
          <label htmlFor="loanAmountSelector" className="label-input">How Paid?* </label>
          <div className="select-wrapper">
            <select
              id="loanAmountSelector"
              className="selector"
            >
              <option value="" selected="selected">Every other Weeks</option>
            </select>
          </div>
          <label htmlFor="loanAmountSelector" className="label-input">Which day of the week? </label>
          <select
            id="dayOfWeekSelector"
            className="selector"
            value={selectedDay}
            onChange={handleDayChange}
          >
            <option value="">Select</option>
           
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            
          </select>
          <div className='select-wrapper'>
            <label className='label-input'>Select next pay Date*</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['MobileDatePicker']} sx={{ marginLeft: "5%", width: "100%" }}>
        <DemoItem>
          <MobileDatePicker
            className="form-input"
            value={selectedDate}
            onChange={handleSelectDate}
            renderInput={(params) => <TextField {...params} className="form-date"  style={{ fontWeight: 1000 }}/>}
            shouldDisableDate={shouldDisableDate}
            inputStyle={{ fontWeight: 800 }}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
          </div>
        </div>
      )}
      {showAccountNumberInput && (
        <div className='select-wrapper'>
          <label className='label-input'>Employee Name*</label>
          <input
            type="text"
            className="form-input"
            required
          />
          <label className='label-input'>Occupation*</label>
          <input
            type="text"
            className="form-input"
            required
          />
          <label className='label-input'>Hire Date*</label>
          <input
            type="text"
            className="form-input"
            required
          />
         <div className='select-wrapper'>
        <label className='label-input'>Work Phone</label>
        <input
      type="tel"
      value={workNumber}
      onChange={handleChangeWork}
      maxLength={14} 
      placeholder="(123) 456-7890"
      className='form-date' 
    />
      </div>
      <div className='select-wrapper'>
        <label className='label-input'> Employer Address*</label>
        <input
       
         className="form-input"
        required/>
      </div>
      <label htmlFor="loanAmountSelector" className="label-input">Select State</label>
      <div className="select-wrapper">
        <select
          id="loanAmountSelector"
          className="selector"
          
        >
             <option value="" >Select</option>
          <option value="150">Alabama</option>
          <option value="200">Alaska</option>
          <option value="250">Arizona</option>
          <option value="300">Arkansas</option>
          <option value="300">California</option>
          <option value="300">Colorado</option>
          <option value="300">connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OK">Oklahoma</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhodelsland</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="UT">Utah</option>
          <option value="TX">Texas</option>
          <option value="VT">Vermont</option>

        </select>
      </div>
      <div className='select-wrapper'>
        <label className='label-input'>City*</label>
        <input
       
         className="form-input"
        required/>
      </div>
      <div className='select-wrapper'>
        <label className='label-input'>Zip*</label>
        <input
       
         className="form-input"
        required/>
      </div>
    
        </div>
        
      )}
      
      </div>
      
      <div  className="label-end">
      {!showForm && (
        <a href="#" className="label-end" style={{ color: ' #599e8f' }} onClick={handleClick}>
          [ + Add another income ]
        </a>
      )}
      {showForm && (
        <div>
          <label htmlFor="loanAmountSelector" className="label">
            Secondary Income And Employment Information <RiDeleteBin6Line style={{color:"red"}} onClick={handleDeleteClick} />
          </label>
          
          <div className='select-wrapper'>
        <label className='label-input'>Employment Status*</label>
        <label className='form-radio'>
            <div>
        <input
          type="radio"
          value="male"
          checked={selectedEmp=== 'male'}
          onChange={handleEmpChange}
         className='house-radio'
        />  <label className='form-radio1'>
              Full Time
              </label>
        <input
          type="radio"
          value="Part Time"
          checked={selectedEmp === 'Part Time'}
          onChange={handleEmpChange}
           className='house-radio'
        />
        <label className='form-radio1'>
              Part Time
              </label>
        <input
          type="radio"
          value="Others"
          checked={selectedEmp === 'Others'}
          onChange={handleEmpChange}
           className='house-radio'
        />
        <label className='form-radio1'>
              Others
              </label>
              </div>
      </label>
      <div className='select-wrapper'>
        <label className='label-input'>Last Check Amount*</label>
        <input
       
         className="form-input"
        required/>
      </div>
      <label htmlFor="loanAmountSelector" className="label-input">Select Income Type* </label>
      <div className="select-wrapper">
        <select
          id="loanAmountSelector"
          className="selector"
          onChange={handleEmploymentTypeChange}
          value={employmentType}
        >
             <option value="" >Select</option>
             <option value="P" id="employed1">Employed</option>
             <option value="E">Self-employed</option>
             <option value="R">Retirement/Pension</option>
             <option value="S">Social Security</option>
             <option value="S">Social Security</option>
             <option value="O">Other</option>
        </select>
      </div>
      {showOtherIncomeInput && (
        <div className='select-wrapper'>
          <label className='label-input'>Specify Other Income Type*</label>
          <input
            type="text"
            className="form-input"
            required
          />
        </div>
      )}
 
    
      <div className='select-wrapper'>
        <label className='label-input'>How do you receive your Income ?*</label>
        <div>
        <input
          type="radio"
          value="male"
          checked={selectedIncome === 'male'}
          onChange={handleIncomeChange}
        className='house-radio'
        /><label className='house-status'>
             Direct Deposite
      </label>
     
        <input
          type="radio"
          value="female"
          checked={selectedIncome=== 'female'}
          onChange={handleIncomeChange}
          className='house-radio'
        /> <label className='house-status'>
       Paper Deposite
      </label>  
      </div>   
      </div>
      <label htmlFor="loanAmountSelector" className="label-input">How often do you Receive  a paycheck ?* </label>
      <div className="select-wrapper">
        <select
          id="loanAmountSelector"
          className="selector"
          onChange={handlePayFrequencyChange}
          value={payFrequency}
        >
             <option value="" selected="selected">Select Pay Frequency</option>
             
             <option value="W">Weekly</option>
             <option value="B">Bi-Weekly</option>
             <option value="M">Monthly</option>
             <option value="S">Twice a month</option>
             
        </select>
      </div>
      {payFrequency ==='S' && (
         <div>
         <label htmlFor="loanAmountSelector" className="label-input">How Paid?*</label>
         <div className="select-wrapper">
           <select
             id="payFrequencySelector"
             className="selector"
             onChange={(e) => setPaymentOption(e.target.value)}
             value={paymentOption}
           >
             <option value="">Select</option>
             <option value="Specific">Two Specific Day</option>
             <option value="Specific week">Specific Week and Days</option>
           </select>
         </div>
         {paymentOption === 'Specific' && (
          <div>
            <div>
              <label htmlFor="daySelector" className="label-input">1st Paydate of Month?*:</label>
              <select id="daySelector" className="selector">
              <option value="">Select</option>
              {[...Array(31)].map((_, index) => (
  <option key={index + 1} value={index + 1}>{index + 1}{getDaySuffix(index + 1)}</option>
))}

              </select>
            </div>
              <div>
              <label htmlFor="daySelector" className="label-input">2nd Paydate of Month?*:</label>
              <select id="daySelector" className="selector">
              <option value="">Select</option>
              {[...Array(31)].map((_, index) => (
  <option key={index + 1} value={index + 1}>{index + 1}{getDaySuffix(index + 1)}</option>
))}

              </select>
            </div>
            </div>
          )}
           {paymentOption === 'Specific week' && (
         <div>
           <label htmlFor="loanAmountSelector" className="label-input">1st Pay Week?* </label>
             <div className="select-wrapper">
               <select
                 id="loanAmountSelector"
                 className="selector"
                //  onChange={handleEmploymentTypeChange}
                //  value={employmentType}
               >
                    <option value="" >Select</option>
                    <option value="1">First</option>
                    <option value="2">Second</option>
                    <option value="3">Third</option>
                    <option value="4">Fourth</option>
                    <option value="5">Last</option>
                    
               </select>
               <label htmlFor="dayOfWeekSelector" className="label-input">1st Payday?* </label>
              <select
                id="dayOfWeekSelector"
                className="selector"
              >
                <option value="">Select</option>
                <option value="Sunday">Sunday</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
              </select>

             </div>
             <label htmlFor="loanAmountSelector" className="label-input">2nd Pay Week?* </label>
             <div className="select-wrapper">
               <select
                 id="loanAmountSelector"
                 className="selector"
                //  onChange={handleEmploymentTypeChange}
                //  value={employmentType}
               >
                    <option value="" >Select</option>
                    <option value="1">First</option>
                    <option value="2">Second</option>
                    <option value="3">Third</option>
                    <option value="4">Fourth</option>
                    <option value="5">Last</option>
                    
               </select>
               <label htmlFor="dayOfWeekSelector" className="label-input">2nd Payday?* </label>
              <select
                id="dayOfWeekSelector"
                className="selector"
              >
                <option value="">Select</option>
                <option value="Sunday">Sunday</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
              </select>

             </div>
          </div>
          )}
         </div>
      )}
      {payFrequency === 'M' && (
        <div>
          <label htmlFor="loanAmountSelector" className="label-input">How Paid?*</label>
          <div className="select-wrapper">
            <select
              id="payFrequencySelector"
              className="selector"
              onChange={(e) => setPaymentOption(e.target.value)}
              value={paymentOption}
            >
              <option value="">Select</option>
              <option value="Specific">Specific Day</option>
              <option value="Specific week">Specific Week and Days</option>
            </select>
          </div>
          {paymentOption === 'Specific' && (
            <div>
              <label htmlFor="daySelector" className="label-input">Select Day:</label>
              <select id="daySelector" className="selector">
              <option value="">Select</option>
              {[...Array(31)].map((_, index) => (
  <option key={index + 1} value={index + 1}>{index + 1}{getDaySuffix(index + 1)}</option>
))}

              </select>
            </div>
          )}
          {paymentOption === 'Specific week' && (
            <div>
             <label htmlFor="loanAmountSelector" className="label-input">Which Week* </label>
             <div className="select-wrapper">
               <select
                 id="loanAmountSelector"
                 className="selector"
                 onChange={handleEmploymentTypeChange}
                 value={employmentType}
               >
                    <option value="" >Select</option>
                    <option value="1">First</option>
                    <option value="2">Second</option>
                    <option value="3">Third</option>
                    <option value="4">Fourth</option>
                    <option value="5">Last</option>
                    
               </select>
             </div>
             <label htmlFor="dayOfWeekSelector" className="label-input">Which day of the week? </label>
              <select
                id="dayOfWeekSelector"
                className="selector"
              >
                <option value="">Select</option>
                <option value="Sunday">Sunday</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
              </select>

             </div>
          )}
        </div>
      )}
      
      {payFrequency === 'W' && (
        <div>
          <label htmlFor="loanAmountSelector" className="label-input">How Paid?* </label>
          <div className="select-wrapper">
            <select
              id="loanAmountSelector"
              className="selector"
              value={paymentOption}
              onChange={(e) => setPaymentOption(e.target.value)}
            >
              <option value="" selected="selected">Select</option>
              <option value="X">Treat Weekly as Bi-Weekly</option>
              <option value="W">Weekly</option>
            </select>
          </div>

          {paymentOption === 'X' && (
            <>
              <label htmlFor="dayOfWeekSelector" className="label-input">Which day of the week?* </label>
              <select
                id="dayOfWeekSelector"
                className="selector"
                value={selectedDay}
                onChange={handleDayChange}
              >
                <option value="">Select</option>
                <option value="Sunday">Sunday</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
              </select>

              <div className='select-wrapper'>
                <label className='label-input'>Select Next Pay Date*</label>
                <input
                  type="date"
                  className="form-date"
                  required
                />
              </div>
            </>
          )}
             {paymentOption === 'W' && (
            <>
              <label htmlFor="dayOfWeekSelector" className="label-input">Which day of the week? </label>
              <select
                id="dayOfWeekSelector"
                className="selector"
              >
                <option value="">Select</option>
                <option value="Sunday">Sunday</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
              </select>

              
            </>
          )}
        </div>
      )}
      {payFrequency!=='B' && payFrequency!=='W' &&  payFrequency!=='M' &&  payFrequency!=='S' &&(
        <div><label htmlFor="loanAmountSelector" className="label-input">How Paid?* </label>
      <div className="select-wrapper">
        <select
          id="loanAmountSelector"
          className="selector"
          
        >
             <option value="" selected="selected">Select</option>
            
        </select>
      </div>
      </div>)}
      
      {payFrequency === 'B' && (
        <div className="select-wrapper">
          <label htmlFor="loanAmountSelector" className="label-input">How Paid?* </label>
          <div className="select-wrapper">
            <select
              id="loanAmountSelector"
              className="selector"
            >
              <option value="" selected="selected">Every other Weeks</option>
            </select>
          </div>
          <label htmlFor="loanAmountSelector" className="label-input">Which day of the week? </label>
          <select
            id="dayOfWeekSelector"
            className="selector"
          >
            <option value="">Select</option>
            <option value="Sunday">Sunday</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
          </select>
          <div className='select-wrapper'>
            <label className='label-input'>Select next pay Date*</label>
            <input
              type="date"
              className="form-date"
              required
            />
          </div>
        </div>
      )}
      {showAccountNumberInput && (
        <div className='select-wrapper'>
          <label className='label-input'>Employee Name*</label>
          <input
            type="text"
            className="form-input"
            required
          />
          <label className='label-input'>Occupation*</label>
          <input
            type="text"
            className="form-input"
            required
          />
          <label className='label-input'>Hire Date*</label>
          <input
            type="text"
            className="form-input"
            required
          />
         <div className='select-wrapper'>
        <label className='label-input'>Work Phone</label>
        <input
      type="tel"
      value={workNumber}
      onChange={handleChangeWork}
      maxLength={14} 
      placeholder="(123) 456-7890"
      className='form-date' 
    />
      </div>
      <div className='select-wrapper'>
        <label className='label-input'> Employer Address*</label>
        <input
       
         className="form-input"
        required/>
      </div>
      <label htmlFor="loanAmountSelector" className="label-input">Select State</label>
      <div className="select-wrapper">
        <select
          id="loanAmountSelector"
          className="selector"
          
        >
             <option value="" >Select</option>
          <option value="150">Alabama</option>
          <option value="200">Alaska</option>
          <option value="250">Arizona</option>
          <option value="300">Arkansas</option>
          <option value="300">California</option>
          <option value="300">Colorado</option>
          <option value="300">connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OK">Oklahoma</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhodelsland</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="UT">Utah</option>
          <option value="TX">Texas</option>
          <option value="VT">Vermont</option>

        </select>
      </div>
      <div className='select-wrapper'>
        <label className='label-input'>City*</label>
        <input
       
         className="form-input"
        required/>
      </div>
      <div className='select-wrapper'>
        <label className='label-input'>Zip*</label>
        <input
       
         className="form-input"
        required/>
      </div>
    
        </div>
        
      )}
      
      </div>
      
        </div>
      )}
      </div>
      <div className='button-container'>
        <button className='next-button ' onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default Cashback
