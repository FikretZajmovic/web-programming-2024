editProduct = (id) => {
  $.get("../backend/get_product.php?product_id=" + id, (data) => {
    $("#edit_product_id").val(data.product_id);
    $("#product_name").val(data.product_name);
    $("#product_description").val(data.product_description);
    $("#product_price").val(data.product_price);
    $("#product_image").val(data.product_image);
    console.log(data);
  });
};
