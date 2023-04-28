const email = document.getElementById("email"),
  form = document.getElementById("email-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailValue = email.value.trim();
  checkEmail(emailValue);
});

function checkEmail(emailValue) {
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else {
    if (!isEmailValid(emailValue)) {
      setErrorFor(email, "Email is not valid");
    } else {
      setSuccessFor(email);
    }
  }
}

function isEmailValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const grandParent = formControl.parentElement;
  const small = grandParent.querySelector("small");
  grandParent.className = "email-form error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  const grandParent = formControl.parentElement;
  grandParent.className = "email-form succes";
}
