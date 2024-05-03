// Function to calculate age
function calculateAge() {
  // Get input values
  const inputDay = parseInt(document.querySelector("#day").value);
  const inputMonth = parseInt(document.querySelector("#month").value);
  const inputYear = parseInt(document.querySelector("#year").value);

  // Validate input (optional)
  if (
    isNaN(inputDay) ||
    isNaN(inputMonth) ||
    isNaN(inputYear) ||
    inputDay > 31 ||
    inputMonth > 12
  ) {
    alert("Invalid input. Please enter numeric values.");
    return;
  }

  // Get current date
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1; // Months are 0-indexed
  const currentYear = currentDate.getFullYear();

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

  // Display the calculated age
  document.querySelector("#days").textContent = ageDay;
  document.querySelector("#months").textContent = ageMonth;
  document.querySelector("#years").textContent = ageYear;
}

// When button is clicked
document
  .querySelector("#calculateButton")
  .addEventListener("click", calculateAge);
