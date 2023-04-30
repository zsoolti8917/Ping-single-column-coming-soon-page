// select the DOM elements we will need
const email = document.getElementById("email"),
  form = document.getElementById("email-form");

// add a submit event listener to the form
form.addEventListener("submit", (e) => {
  // prevent the default behavior of the form (i.e., submitting data to a server)
  e.preventDefault();
  // get the value of the email input and trim it to remove whitespace
  const emailValue = email.value.trim();
  // check the email value using the checkEmail function
  checkEmail(emailValue);
});

// define a function to check the validity of an email address
function checkEmail(emailValue) {
  // if the email input is empty, show an error message
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else {
    // if the email input is not empty, check if it is a valid email address
    if (!isEmailValid(emailValue)) {
      setErrorFor(email, "Email is not valid");
    } else {
      // if the email input is valid, show a success message
      setSuccessFor(email);
    }
  }
}

// define a function to check if an email address is valid
function isEmailValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// define a function to set an error message for an input
function setErrorFor(input, message) {
  // select the parent elements of the input
  const formControl = input.parentElement;
  const grandParent = formControl.parentElement;
  // select the small element within the parent element and set its text to the error message
  const small = grandParent.querySelector("small");
  // add the "error" class to the parent element to show an error message
  formControl.className = "email-form error";
  small.innerText = message;
}

// define a function to set a success message for an input
function setSuccessFor(input) {
  // select the parent elements of the input
  const formControl = input.parentElement;
  // add the "success" class to the parent element to show a success message
  formControl.className = "email-form succes";
}
