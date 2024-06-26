$("#reviewForm").validate({
  rules: {
    name: {
      required: true,
      minlength: 1,
    },
    message: {
      required: true,
      minlength: 1,
    },
  },
  messages: {
    name: {
      required: "Please enter your name",
      minlength: "Name should be at least 1 character",
    },
    message: {
      required: "Please enter your message",
      minlength: "Message should be at least 1 character",
    },
  },
  submitHandler: (form, event) => {
    event.preventDefault();
    blockUi("body");
    let data = serializeForm(form);

    $.ajax({
      type: "POST",
      url: "https://goldfish-app-l87ee.ondigitalocean.app/backend/reviews/add",
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
        $("#reviewForm")[0].reset();
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
