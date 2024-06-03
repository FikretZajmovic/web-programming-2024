$("#editUserForm").validate({
  submitHandler: (form, event) => {
    event.preventDefault();
    let data = serializeForm(form);
    $.ajax({
      type: "POST",
      url: "https://goldfish-app-l87ee.ondigitalocean.app/backend/users/add",
      data: data,
      beforeSend: function (xhr) {
        if (Utils.get_from_localstorage("user")) {
          xhr.setRequestHeader(
            "Authentication",
            Utils.get_from_localstorage("user").token
          );
        }
      },
      success: function (response) {
        console.log("Data sent successfully:", data);
        getUsers();
      },
      error: function (xhr, status, error) {
        console.error("Error:", error);
      },
      complete: function () {
        unblockUI("body");
      },
    });
  },
});

blockUI = (element) => {
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

unblockUI = (element) => {
  $(element).unblock({});
};

serializeForm = (form) => {
  let jsonResult = {};
  $.each($(form).serializeArray(), function () {
    jsonResult[this.name] = this.value;
  });

  return jsonResult;
};
