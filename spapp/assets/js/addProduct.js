$("#addProductForm").validate({
  rules: {
    product_name: {
      required: true,
    },
    product_description: {
      required: false,
    },
    product_price: {
      required: true,
    },
    product_image: {
      required: false,
    },
  },
  messages: {
    product_name: {
      required: "Please enter product name",
    },
    product_price: {
      required: "Please enter product price",
    },
  },
  submitHandler: (form, event) => {
    event.preventDefault();
    blockUi("body");
    let data = serializeForm(form);

    $.ajax({
      type: "POST",
      url: "../backend/products/add",
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
        $("#addProductForm")[0].reset();
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
