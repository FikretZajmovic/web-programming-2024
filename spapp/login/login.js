$("#login-form").validate({
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
    blockUi("body");
    let data = serializeForm(form);

    $.post(
      "https://goldfish-app-l87ee.ondigitalocean.app/backend/auth/login",
      data
    )
      .done(function (response) {
        console.log("Data sent successfully:", data);
        $("#login-form")[0].reset();
        Utils.set_to_localstorage("user", response.user);
        window.location = "../#home";
        console.log("Response is: ", response);
      })
      .fail(function (xhr, status, error) {
        console.error("Error:", error);
      })
      .always(function () {
        unblockUi("body");
      });
  },
});

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
