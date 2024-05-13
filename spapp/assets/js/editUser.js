editUser = (id) => {
  $.ajax({
    type: "GET",
    url: "../backend/users/" + id,
    beforeSend: function (xhr) {
      if (Utils.get_from_localstorage("user")) {
        xhr.setRequestHeader(
          "Authentication",
          Utils.get_from_localstorage("user").token
        );
      }
    },
    success: function (data) {
      $("#edit_user_id").val(data.user_id);
      $("#first_name").val(data.first_name);
      $("#last_name").val(data.last_name);
      $("#phone_number").val(data.phone_number);
      $("#email").val(data.email);
      $("#password").val(data.password);
      console.log(data);
    },
    error: function (request, status, error) {
      console.error("Error:", error);
    },
  });
};
