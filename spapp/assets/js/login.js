$("#bootstrap-form").validate({
  rules: {
    email: {
      required: true,
      email: true,
    },
    password: {
      required: true,
      minlength: 8,
    },
  },
  messages: {
    email: {
      required: "Please enter your email",
      email: "Please enter a valid email address",
    },
    password: {
      required: "Please enter a password",
      minlength: "Password should be at least 8 characters",
    },
  },
  submitHandler: function (form, event) {
    event.preventDefault();
    objectFormHandler(form);
  },
});

function objectFormHandler(form) {
  blockUi("#bootstrap-form");
  let data = serializeForm(form);

  // Custom action for user login
  loginUser(data);

  // Reset the form
  form.reset();
}

function loginUser(userData) {
  // Additional logic for user login, e.g., sending data to server
  // For demonstration purposes, let's just log the user data
  console.log("User logged in:", userData);
  // Redirect to dashboard or home page after successful login
  // window.location.href = "#home";
}

blockUi = (element) => {
  $(element).block({
    message: '<div class="spinner-border text-primary" role="status"></div>',
    css: {
      backgroundColor: "transparent",
      border: "0",
    },
    overlayCSS: {
      backgroundColor: "#000",
      opacity: 0.25,
    },
  });
};

serializeForm = (form) => {
  let jsonResult = {};
  $.each($(form).serializeArray(), function () {
    jsonResult[this.name] = this.value;
  });
  return jsonResult;
};
