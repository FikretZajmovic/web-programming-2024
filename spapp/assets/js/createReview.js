$("#reviewForm").validate({
  rules: {
    '[id="recipient-name"]': {
      required: true,
      minlength: 1,
    },
    '[id="message-text"]': {
      required: true,
      minlength: 1,
    },
  },
  messages: {
    '[id="recipient-name"]': {
      required: "Please enter your name",
      minlength: "Name should be at least 1 character",
    },
    '[id="message-text"]': {
      required: "Please enter your message",
      minlength: "Message should be at least 1 character",
    },
  },
  submitHandler: function (form) {
    console.log("Submit handler triggered");
    modalFormHandler(form);
  },
});

function modalFormHandler(form) {
  blockUi("#reviewForm");
  let data = serializeForm(form);

  // Custom action for handling modal form data
  console.log("Modal form data:", data);

  // Reset the form
  form.reset();
  unblockUi("#reviewForm");
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
