function validateInput(inputElement) {
  inputElement.value = inputElement.value.replace(/\D/g, "");
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
  const label = document.getElementById("label");

  if (dayInput && monthInput && yearInput) {
    const day = parseInt(dayInput);
    const month = parseInt(monthInput);
    const year = parseInt(yearInput);

    if (!isNaN(day) && !isNaN(month) && !isNaN(year) &&
        day >= 1 && day <= 31 && month >= 1 && month <= 12 && year >= 1000 && year <= 2100) {
      const birthDate = new Date(`${year}-${month}-${day}`);
      const currentDate = new Date();

      if (!isNaN(birthDate.getTime())) {
        const ageInMilliseconds = currentDate - birthDate;
        const ageInYears = Math.floor(ageInMilliseconds / (365 * 24 * 60 * 60 * 1000));
        const ageInMonths = Math.floor(ageInMilliseconds / (30.44 * 24 * 60 * 60 * 1000));
        const ageInDays = Math.floor(ageInMilliseconds / (24 * 60 * 60 * 1000));

        const years = ageInYears;
        const months = ageInMonths % 12;
        const days = ageInDays % 30;

        ageYearsOutput.textContent = years;
        ageMonthsOutput.textContent = months;
        ageDaysOutput.textContent = days;
        
        errorMessageDay.textContent = "";
        errorMessageMonth.textContent = "";
        errorMessageYear.textContent = "";
      } else {
        ageYearsOutput.textContent = "--";
        ageMonthsOutput.textContent = "--";
        ageDaysOutput.textContent = "--";
        errorMessageDay.textContent = "Invalid date format";
        errorMessageMonth.textContent = "Invalid date format";
        errorMessageYear.textContent = "Invalid date format";
        dayInput.style.borderColor = "red";
        monthInput.style.borderColor = "red";
        yearInput.style.borderColor = "red";
      }
    } else {
      ageYearsOutput.textContent = "--";
      ageMonthsOutput.textContent = "--";
      ageDaysOutput.textContent = "--";
      errorMessageDay.textContent = "Must be a valid date";
      errorMessageMonth.textContent = "Must be a valid month";
      errorMessageYear.textContent = "Must be a valid year";
      dayInput.style.borderColor = "red";
        monthInput.style.borderColor = "red";
        yearInput.style.borderColor = "red";
    }
  } else {
    ageYearsOutput.textContent = "--";
    ageMonthsOutput.textContent = "--";
    ageDaysOutput.textContent = "--";
    errorMessageDay.textContent = "This field is required";
    errorMessageMonth.textContent = "This field is required";
    errorMessageYear.textContent = "This field is required";
    dayInput.style.borderColor = "red";
    monthInput.style.borderColor = "red";
    yearInput.style.borderColor = "red";
  }
}