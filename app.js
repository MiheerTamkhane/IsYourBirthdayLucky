const date = document.getElementById("date");
const button = document.getElementById("submit");
const lNumber = document.getElementById("number");

function clickHandler() {
  const userDate = date.value.split("-");

  const year = parseInt(userDate[0]); //year

  const month = parseInt(userDate[1]); //month

  const day = parseInt(userDate[2]); //day

  //finding sum of digits of birthday is divisible by their lucky number
  const luck = year + month + day;
  const number = lNumber.value;

  if (luck % number === 0) {
    console.log("Your Birthdate is lucky");
  } else {
    console.log("Your Birthdate is not Lucky");
  }
}
button.addEventListener("click", clickHandler);
