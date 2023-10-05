function validateInput(inputElement) {
  inputElement.value = inputElement.value.replace(/\D/g, "");

  inputElement.classList.remove('border-red-500');
}

function calculateAge() {
  const dayInput = document.getElementById("day").value;
  const monthInput = document.getElementById("month").value;
  const yearInput = document.getElementById("year").value;
  const ageYearsOutput = document.getElementById("yearsOutput");
  const ageMonthsOutput = document.getElementById("monthsOutput");
  const ageDaysOutput = document.getElementById("daysOutput");
  const errorMessageDay = document.getElementById("error-message-day");
  const errorMessageMonth = document.getElementById("error-message-month");
  const errorMessageYear = document.getElementById("error-message-year");

  // Check if valid inputs were provided
  if (dayInput && monthInput && yearInput) {
    const day = parseInt(dayInput);
    const month = parseInt(monthInput);
    const year = parseInt(yearInput);

    // Check if the inputs are valid date components
    if (!isNaN(day) && !isNaN(month) && !isNaN(year) &&
        day >= 1 && day <= 31 && month >= 1 && month <= 12 && year >= 1000 && year <= 2100) {
      const birthdate = new Date(`${year}-${month}-${day}`);
      const currentDate = new Date();

      // Check if a valid date was entered
      if (!isNaN(birthdate.getTime())) {
        const ageInMilliseconds = currentDate - birthdate;
        const ageInYears = Math.floor(ageInMilliseconds / (365 * 24 * 60 * 60 * 1000));
        const ageInMonths = Math.floor(ageInMilliseconds / (30.44 * 24 * 60 * 60 * 1000)); // Average number of days in a month
        const ageInDays = Math.floor(ageInMilliseconds / (24 * 60 * 60 * 1000));

        const years = ageInYears;
        const months = ageInMonths % 12;
        const days = ageInDays % 30;

        ageYearsOutput.textContent = years;
        ageMonthsOutput.textContent = months;
        ageDaysOutput.textContent = days;
        
        errorMessageDay.textContent = "";
        errorMessageMonth.textContent = "";
        errorMessageYear.textContent = ""; // Clear any previous error messages
      } else {
        ageYearsOutput.textContent = "--";
        ageMonthsOutput.textContent = "--";
        ageDaysOutput.textContent = "--";
        errorMessageDay.textContent = "Invalid date format";
        errorMessageMonth.textContent = "Invalid date format";
        errorMessageYear.textContent = "Invalid date format";

        dayInput.classList.add('border-red-500');
        monthInput.classList.add('border-red-500');
        yearInput.classList.add('border-red-500');
      }
    } else {
      ageYearsOutput.textContent = "--";
      ageMonthsOutput.textContent = "--";
      ageDaysOutput.textContent = "--";
      errorMessageDay.textContent = "Must be a valid date";
      errorMessageMonth.textContent = "Must be a valid month";
      errorMessageYear.textContent = "Must be a valid year";

      dayInput.classList.add('border-red-500');
      monthInput.classList.add('border-red-500');
      yearInput.classList.add('border-red-500');
    }
  } else {
    ageYearsOutput.textContent = "--";
    ageMonthsOutput.textContent = "--";
    ageDaysOutput.textContent = "--";
    errorMessageDay.textContent = "This field is required";
    errorMessageMonth.textContent = "This field is required";
    errorMessageYear.textContent = "This field is required";

    if (!day) dayInput.classList.add('border-red-500');
    if (!month) monthInput.classList.add('border-red-500');
    if (!year) yearInput.classList.add('border-red-500');
  }
}