const form = document.querySelector(".form");
const name = document.getElementById("name");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const generalEnquiry = document.getElementById("general-enquiry");
const supportRequest = document.getElementById("support-request");
const message = document.getElementById("message");
const btn = document.querySelector(".btn");
const checkbox = document.getElementById("checkbox");
const queryError = document.querySelector(".query-box-error");
const checkboxError = document.querySelector(".checkbox-error");

function showError(input, errorMessage) {
  const errorElement = input.nextElementSibling;
  errorElement.textContent = errorMessage;
  errorElement.style.display = "block";
}

function hideError(input) {
  const errorElement = input.nextElementSibling;
  errorElement.style.display = "none";
}

form.addEventListener("submit", function (e) {
  let hasError = false;

  if (name.value.trim() === "") {
    showError(name, "This field is required");
    hasError = true;
  } else {
    hideError(name);
  }

  if (lastName.value.trim() === "") {
    showError(lastName, "This field is required");
    hasError = true;
  } else {
    hideError(lastName);
  }

  if (email.value.trim() === "") {
    showError(email, "Please enter a valid email address");
    hasError = true;
  } else {
    hideError(email);
  }

  if (message.value.trim() === "") {
    showError(message, "This field is required");
    hasError = true;
  } else {
    hideError(message);
  }

  if (hasError) {
    e.preventDefault();
  }
});

function queryshowError(errorMessage) {
  const errorElement = queryError;
  errorElement.textContent = errorMessage;
  errorElement.style.display = "block";
}

function queryHideError() {
  const errorElement = queryError;
  errorElement.style.display = "none";
}

form.addEventListener("submit", (e) => {
  let hasError = false;

  if (!generalEnquiry.checked && !supportRequest.checked) {
    queryshowError("Please select a query type");
    hasError = true;
  } else {
    queryHideError(generalEnquiry);
  }

  if (hasError) {
    e.preventDefault();
  }
});

function checkBoxShowError(errorMessage) {
  const errorElement = checkboxError;
  errorElement.textContent = errorMessage;
  errorElement.style.display = "block";
}

function checkBoxHideError() {
  const errorElement = checkboxError;
  errorElement.style.display = "none";
}

form.addEventListener("submit", (e) => {
  let hasError = false;

  if (!checkbox.checked) {
    checkBoxShowError("To submit this form,please consent to being contacted");
    hasError = true;
  } else {
    checkBoxHideError(checkbox);
  }

  if (hasError) {
    e.preventDefault();
  }
});

function showSuccessMessage() {
  const successBox = document.createElement("div");
  successBox.id = "success-box";
  successBox.innerHTML = `<p><span class="icon"></span><span class="message-box">Message Sent!</span></p>
  <p>Thanks for completing the form, we'll be in touch soon.</p>`;
  document.body.appendChild(successBox);
  console.log(successBox.innerHTML);
  successBox.style.display = "block";

  setTimeout(() => {
    successBox.style.display = "none";
    document.body.removeChild(successBox);
  }, 3000);
}

form.addEventListener("submit", function (e) {
  if (validate.form) {
    showSuccessMessage();
    this.reset();
  }
});
