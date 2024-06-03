editProduct = (id) => {
  $.ajax({
    type: "GET",
    url: "https://goldfish-app-l87ee.ondigitalocean.app/backend/products/" + id,
    beforeSend: function (xhr) {
      if (Utils.get_from_localstorage("user")) {
        xhr.setRequestHeader(
          "Authentication",
          Utils.get_from_localstorage("user").token
        );
      }
    },
    success: function (data) {
      $("#edit_product_id").val(data.product_id);
      $("#product_name").val(data.product_name);
      $("#product_description").val(data.product_description);
      $("#product_price").val(data.product_price);
      $("#product_image").val(data.product_image);
      console.log(data);
    },
    error: function (request, status, error) {
      console.error("Error:", error);
    },
  });
};
