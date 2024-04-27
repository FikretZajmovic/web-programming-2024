$("#editProductForm").validate({
  submitHandler: (form, event) => {
    event.preventDefault();
    let data = serializeForm(form);
    $.post("../backend/add_product.php", data)
      .done(function (response) {
        console.log("Data sent successfully:", data);
        getProducts();
      })
      .fail(function (xhr, status, error) {
        console.error("Error:", error);
      })
      .always(function () {
        unblockUI("body");
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
