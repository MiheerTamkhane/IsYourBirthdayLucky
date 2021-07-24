const date = document.getElementById("date");
const button = document.getElementById("submit");
const lNumber = document.getElementById("number");
const output = document.getElementById("output");
const cancelBtn = document.getElementById("cancel-btn");
const privacy = document.getElementById("privacy-notice");
const footerPrivacy = document.getElementById("footer-privacy");
const error1 = document.getElementById("error1");
const error2 = document.getElementById("error2");
//Submit btn click handler for checking lucky birthdate
function clickHandler() {
  const userDate = date.value.split("-");

  const year = parseInt(userDate[0]); //year

  const month = parseInt(userDate[1]); //month

  const day = parseInt(userDate[2]); //day

  //finding sum of digits of birthday is divisible by their lucky number
  const luck = year + month + day;
  const number = lNumber.value;

  if (date.value === "") {
    error1.innerText = "Please enter valid date";
  } else if (number === "" || number <= 0) {
    error2.innerText = "Please enter valid number";
    if (date.value !== "" || number !== "" || number > 0 || number === "") {
      error1.innerText = "";
    }
  } else if (luck % number === 0) {
    output.innerHTML = `<p class="img-para">Fantasico! Your Birthdate is Lucky ;)</p>
    <img class="svg" src="images/luckyBirthday.svg" />`;
    error2.innerText = "";
  } else {
    output.innerHTML = `
    <p class="img-para">OOPS! Your Birthdate is not Lucky ;(</p>
    <img class="svg" src="images/unlucky.svg" />`;
    error2.innerText = "";
  }
}
//function for showing privacy notice
function resetHandler(e) {
  e.preventDefault();
  privacy.innerText = `Privacy Notice! This Web does not store any data of user, Its totally
    for fun.`;
}
//function for erasing privacy notice
function cancelHandler() {
  privacy.innerText = "";
}

//Events
button.addEventListener("click", clickHandler);
cancelBtn.addEventListener("click", cancelHandler);
footerPrivacy.addEventListener("click", resetHandler);
