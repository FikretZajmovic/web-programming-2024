$("#bootstrap-form").validate({
  rules: {
    first_name: {
      required: true,
      minlength: 4,
    },
    last_name: {
      required: true,
      minlength: 4,
    },
    email: {
      required: true,
      email: true,
    },
    password: {
      required: true,
      minlength: 8,
    },
    confirmpassword: {
      equalTo: "#password",
    },
    phone_number: {
      required: true,
      minlength: 9,
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
    confirmpassword: {
      equalTo: "Passwords do not match",
    },
    phone_number: {
      required: "Please enter your phone number",
      minlength: "Phone number should be at least 9 characters",
    },
  },
  submitHandler: (form, event) => {
    event.preventDefault();
    blockUi("body");
    let data = serializeForm(form);

    $.ajax({
      type: "POST",
      url: "../backend/users/add",
      data: data,
      beforeSend: function (xhr) {
        if (Utils.get_from_localstorage("user")) {
          xhr.setRequestHeader(
            "Authentication",
            Utils.get_from_localstorage("user").token
          );
        }
      },
    })
      .done(function (response) {
        console.log("Data sent successfully:", data);
        $("#bootstrap-form")[0].reset();
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
