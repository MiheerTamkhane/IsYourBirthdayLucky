const date = document.getElementById("date");
const button = document.getElementById("submit");
const lNumber = document.getElementById("number");
const output = document.getElementById("output");
const cancelBtn = document.getElementById("cancel-btn");
const privacy = document.getElementById("privacy-notice");
const footerPrivacy = document.getElementById("footer-privacy");

//Submit btn click handler for checking lucky birthdate
function clickHandler() {
  const userDate = date.value.split("-");

  const year = parseInt(userDate[0]); //year

  const month = parseInt(userDate[1]); //month

  const day = parseInt(userDate[2]); //day

  //finding sum of digits of birthday is divisible by their lucky number
  const luck = year + month + day;
  const number = lNumber.value;

  if (year !== number) {
    alert("please enter date");
  } else if (number === "") {
    alert("please fill lucky number");
  } else if (luck % number === 0) {
    console.log("Your Birthdate is lucky");
    output.innerHTML = "./lucky.html";
  } else {
    console.log("Your Birthdate is not Lucky");
    output.innerHTML = `<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat deserunt
    sequi tempora sapiente exercitationem non excepturi, assumenda, accusamus
    qui sunt quam quo ullam id impedit rerum nobis esse a reiciendis est
    libero doloribus nulla.
  </p>`;
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
