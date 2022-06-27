function age() {
  const dob = prompt("Enter your date of birth in the form YYYY-MM-DD");
  const dobSplit = dob.split("-");
  const birthYear = dobSplit[0];
  const birthMonth = dobSplit[1];
  const birthDay = dobSplit[2];
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();
  const currentYear = currentDate.getFullYear();
  let age = currentYear - birthYear;

  if (currentMonth < birthMonth) {
    age -= 1;
  } else if (currentMonth > birthMonth) {
    age += 0;
  } else {
    if (currentDay < birthDay) {
      age -= 1;
    } else {
      age += 0;
    }
  }
  console.log("Age is " + age);
}

age();
