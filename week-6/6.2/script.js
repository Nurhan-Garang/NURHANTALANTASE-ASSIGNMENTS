function checkDay() {
  const dayInput = document.getElementById("dayInput").value.toLowerCase();
  const result = document.getElementById("result");

  if (dayInput === "monday" || dayInput === "tuesday" || dayInput === "wednesday" || dayInput === "thursday" || dayInput === "friday") {
    result.textContent = "Time to work";
  } else if (dayInput === "saturday" || dayInput === "sunday") {
    result.textContent = "Weekend is here!";
  } else {
    result.textContent = "Please enter a valid day of the week.";
  }
}
