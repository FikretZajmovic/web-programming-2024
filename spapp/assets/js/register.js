var users = []; // Removed if not used for anything else
var idCounter = 1; // If you're using this for assigning IDs, keep it

$("#bootstrap-form").validate({
  rules: {
    first_name: {
      required: true,
      minlength: 4, // Adjusted minlength for first name
    },
    last_name: {
      required: true,
      minlength: 4, // Adjusted minlength for last name
    },
    email: {
      required: true,
      email: true, // Added email validation
    },
    password: {
      required: true,
      minlength: 8,
    },
    confirm_password: {
      equalTo: "#password", // Added confirm password validation
    },
    phone_number: {
      required: true,
      minlength: 9, // Adjusted minlength for phone number
    },
  },
  messages: {
    first_name: {
      required: "Please enter your first name",
      minlength: "First name should be at least 4 characters",
    },
    last_name: {
      required: "Please enter your last name",
      minlength: "Last name should be at least 4 characters",
    },
    email: {
      required: "Please enter your email",
      email: "Please enter a valid email address",
    },
    password: {
      required: "Please enter a password",
      minlength: "Password should be at least 8 characters",
    },
    confirm_password: {
      equalTo: "Passwords do not match",
    },
    phone_number: {
      required: "Please enter your phone number",
      minlength: "Phone number should be at least 9 characters",
    },
    terms: {
      required: "You must accept the Terms of Use and Privacy Policy",
    },
  },
  submitHandler: function (form, event) {
    event.preventDefault();
    objectFormHandler(form);
  },
});

function objectFormHandler(form, event) {
  event.preventDefault();
  blockUi("#bootstrap-form");
  let data = serializeForm(form);

  data["id"] = idCounter;
  idCounter++;
  // Custom action for user registration
  registerUser(data);

  // Reset the form
  form.reset();
  unblockUi("#bootstrap-form");
}

function registerUser(userData) {
  // Additional logic for user registration, e.g., sending data to server
  // For demonstration purposes, let's just log the user data
  console.log("New user registered:", userData);
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

unblockUi = (element) => {
  $(element).unblock({});
};

serializeForm = (form) => {
  let jsonResult = {};
  $.each($(form).serializeArray(), function () {
    jsonResult[this.name] = this.value;
  });
  return jsonResult;
};
