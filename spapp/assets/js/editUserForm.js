$("#editUserForm").validate({
  submitHandler: (form, event) => {
    let data = serializeForm(form);
    $.post("../backend/add_user.php", data)
      .done(function (response) {
        console.log("Data sent successfully:", data);
        Fetch.getUsers();
      })
      .fail(function (xhr, status, error) {
        console.error("Error:", error);
      })
      .always(function () {
        unblockUI("body");
      });
  },
});
