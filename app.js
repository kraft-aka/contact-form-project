const firstNameEl = document.getElementById("first-name");
const lastNameEl = document.getElementById("last-name");
const emailEl = document.getElementById("email");
const checkboxEl = document.getElementById("checkbox-form");
const submitBtn = document.getElementById("form-submit");
const formEl = document.getElementById("form");
const containerEl = document.getElementById("container");
const errorElfName = document.getElementById("error-msg-first--name");
const errorElLastName = document.getElementById("error-msg-last--name");
const errorElEmail = document.getElementById("error-msg-email");
const errorElCheckBox = document.getElementById("error-msg-checkbox");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  if (firstNameEl.value == "" || firstNameEl.value == null) {
    errorElfName.innerHTML = "first name must be filled";
  }
  if (lastNameEl.value == "" || lastNameEl.value == null) {
    errorElLastName.innerHTML = "last name msut be filled";
  }
  if (emailEl.value == "" || emailEl.value == null) {
    errorElEmail.innerHTML = "email must be filled";
  }

  if (checkboxEl.checked === false) {
    errorElCheckBox.innerHTML = "you must agree with privat policy";
  } else {
    formEl.submit();
    containerEl.classList.add("hide");
  }
});
