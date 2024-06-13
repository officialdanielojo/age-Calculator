// To get the days, month and year.
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const days = document.querySelector("#days");
const months = document.querySelector("#months");
const years = document.querySelector("#years");

// To get the day, month, year words
const dayWord = document.querySelector("#day_word");
const monthWord = document.querySelector("#month_word");
const yearWord = document.querySelector("#year_word");

// For the error message
const date = document.querySelectorAll(".date");
const error = document.querySelectorAll(".error");
const dateBorder = document.querySelectorAll(".date-border");
// For Day
const dateDay = document.querySelector(".date_day");
const errorDay = document.querySelector(".day_error");
const dayBorder = document.querySelector(".day_border");
// For month
const dateMonth = document.querySelector(".date_month");
const errorMonth = document.querySelector(".month_error");
const monthBorder = document.querySelector(".month_border");
// For year
const dateYear = document.querySelector(".date_year");
const errorYear = document.querySelector(".year_error");
const yearBorder = document.querySelector(".year_border");

// For the button
const calculatorButton = document.querySelector("#calculateButton");

// Function to calculate age
function calculateAge() {
  // Get input values
  const inputDay = parseInt(day.value);
  const inputMonth = parseInt(month.value);
  const inputYear = parseInt(year.value);

  // Validate input for empty input
  if (isNaN(inputDay) || isNaN(inputMonth) || isNaN(inputYear)) {
    for (let i = 0; i < date.length; i++) {
      date[i].style.color = "red";
    }

    for (let i = 0; i < error.length; i++) {
      error[i].style.display = "block";
    }

    for (let i = 0; i < dateBorder.length; i++) {
      dateBorder[i].style.border = "1px solid red";
    }
    return;
  } else {
    for (let i = 0; i < date.length; i++) {
      date[i].style.color = "";
    }
    for (let i = 0; i < error.length; i++) {
      error[i].style.display = "";
    }
    for (let i = 0; i < dateBorder.length; i++) {
      dateBorder[i].style.border = "";
    }
  }

  // Get current date
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1; // Months are 0-indexed
  const currentYear = currentDate.getFullYear();

  // Array to get days
  const daysInNum = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Function to get the leap year
  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  if (inputDay > daysInNum[inputMonth - 1] && isLeapYear(inputYear)) {
    daysInNum[1] = 29;
  }

  if (
    inputDay > currentDay &&
    inputMonth >= currentMonth &&
    inputYear === currentYear
  ) {
    for (let i = 0; i < date.length; i++) {
      date[i].style.color = "red";
    }
    for (let i = 0; i < error.length; i++) {
      error[i].style.display = "block";
      error[i].innerText = "Input a valid date";
    }
    for (let i = 0; i < dateBorder.length; i++) {
      dateBorder[i].style.border = "1px solid red";
    }
    return;
  } else if (inputDay > 31 && inputMonth > 12 && inputYear >= currentYear) {
    for (let i = 0; i < date.length; i++) {
      date[i].style.color = "red";
    }
    for (let i = 0; i < error.length; i++) {
      error[i].style.display = "block";
      error[i].innerText = "Input a valid date";
    }
    for (let i = 0; i < dateBorder.length; i++) {
      dateBorder[i].style.border = "1px solid red";
    }
    return;
  } else if (
    (inputDay > daysInNum[inputMonth - 1] && inputMonth > 12) ||
    (inputDay <= 0 && inputMonth <= 0)
  ) {
    dateDay.style.color = "red";
    dayBorder.style.border = "1px solid red";
    errorDay.style.display = "block";
    errorDay.innerText = "Input a valid day";

    dateMonth.style.color = "red";
    monthBorder.style.border = "1px solid red";
    errorMonth.style.display = "block";
    errorMonth.innerText = "Input a valid month";
    return;
  } else if (
    (inputDay > daysInNum[inputMonth - 1] && inputYear > currentYear) ||
    (inputDay <= 0 && inputYear <= 0)
  ) {
    dateDay.style.color = "red";
    dayBorder.style.border = "1px solid red";
    errorDay.style.display = "block";
    errorDay.innerText = "Input a valid day";

    dateYear.style.color = "red";
    yearBorder.style.border = "1px solid red";
    errorYear.style.display = "block";
    errorYear.innerText = "Input a valid year";
    return;
  } else if (
    (inputMonth > 12 && inputYear > currentYear) ||
    (inputMonth <= 0 && inputYear <= 0)
  ) {
    dateMonth.style.color = "red";
    monthBorder.style.border = "1px solid red";
    errorMonth.style.display = "block";
    errorMonth.innerText = "Input a valid month";

    dateYear.style.color = "red";
    yearBorder.style.border = "1px solid red";
    errorYear.style.display = "block";
    errorYear.innerText = "Input a valid year";
    return;
  } else if (inputDay > daysInNum[inputMonth - 1] || inputDay <= 0) {
    dateDay.style.color = "red";
    dayBorder.style.border = "1px solid red";
    errorDay.style.display = "block";
    errorDay.innerText = "Input a valid day";
    return;
  } else if (inputMonth > 12 || inputMonth <= 0) {
    dateMonth.style.color = "red";
    monthBorder.style.border = "1px solid red";
    errorMonth.style.display = "block";
    errorMonth.innerText = "Input a valid month";
    return;
  } else if (inputYear > currentYear || inputYear <= 0) {
    dateYear.style.color = "red";
    yearBorder.style.border = "1px solid red";
    errorYear.style.display = "block";
    errorYear.innerText = "Input a valid year";
    return;
  }

  // Calculate age
  let ageYear = currentYear - inputYear;
  let ageMonth = currentMonth - inputMonth;
  let ageDay = currentDay - inputDay;

  // Adjust for negative age components
  if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
    ageYear--;
    ageMonth += 12;
  }
  if (ageDay < 0) {
    const daysInPrevMonth = new Date(
      currentYear,
      currentMonth - 1,
      0
    ).getDate();
    ageDay += daysInPrevMonth;
    ageMonth--;
  }
  if (inputYear === currentYear) {
    ageYear = 0;
  } else if (inputYear > currentYear || inputYear <= 0) {
    ageMonth = "--";
    ageDay = "--";
    ageYear = "--";
  }

  if (
    inputMonth > 12 ||
    (inputYear === currentYear && inputMonth > currentMonth) ||
    (inputDay > 31 && inputMonth > 12 && inputYear >= currentYear) ||
    inputMonth <= 0
  ) {
    ageMonth = "--";
    ageDay = "--";
    ageYear = "--";
  } else if (
    inputDay > 31 ||
    inputDay > daysInNum[inputMonth - 1] ||
    inputDay <= 0
  ) {
    ageMonth = "--";
    ageDay = "--";
    ageYear = "--";
  }

  // Display the calculated age
  days.textContent = ageDay;
  months.textContent = ageMonth;
  years.textContent = ageYear;

  if (ageYear > 1) {
    yearWord.innerText = "years";
  } else {
    yearWord.innerText = "year";
  }

  if (ageMonth > 1) {
    monthWord.innerText = "months";
  } else {
    monthWord.innerText = "month";
  }

  if (ageDay > 1) {
    dayWord.innerText = "days";
  } else {
    dayWord.innerText = "day";
  }
}

// When button is clicked
calculatorButton.addEventListener("click", calculateAge);
