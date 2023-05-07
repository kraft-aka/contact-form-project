const firstNameEl = document.getElementById("first-name");
const lastNameEl = document.getElementById("last-name")
const emailEl = document.getElementById("email")
const checkboxEl = document.getElementById("checkbox-form");
const submitBtn = document.getElementById("form-submit");
const formEl = document.getElementById("form");
const containerEl = document.getElementById("container");
const errorEl = document.getElementById("error-msg");

console.log(checkboxEl.checked);

// checkboxEl.addEventListener('change', (e)=> {
//   return e.target.checked ? true : false
// })

// function submitForm() {
//   if (checkboxEl.checked == true) return formEl.submit();
// }

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    firstNameEl.value == "" ||
    (firstNameEl.value == null && lastNameEl.value == "") ||
    (lastNameEl.value == null)
  ) {
    errorEl.innerHTML = "You have to fill all fields";
  } else if(checkboxEl.checked == false) {
    errorEl.innerHTML = 'You have to agree with privacy policy'
  }
  
  else {
    errorEl.style.display = 'none'
    formEl.submit();
    setTimeout(() => {
      containerEl.classList.add("hide");
    }, 1500);
  }
});
