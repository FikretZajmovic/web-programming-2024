deleteProduct = (id) => {
  if (confirm("Do you want to delete the user with the id: " + id + "?")) {
    $.ajax({
      url: "../backend/products/delete/" + id,
      type: "DELETE",
      beforeSend: function (xhr) {
        if (Utils.get_from_localstorage("user")) {
          xhr.setRequestHeader(
            "Authentication",
            Utils.get_from_localstorage("user").token
          );
        }
      },
      success: () => {
        console.log("Succesfully deleted!");
        getProducts();
      },
    });
  }
};
