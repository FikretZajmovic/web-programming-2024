editUser = (id) => {
  $.get("../backend/get_user.php?id=" + id, (data) => {
    $("#edit_user_id").val(data.id);
    $("#user_first_name").val(data.first_name);
    $("#user_last_name").val(data.last_name);
    $("#user_phone_number").val(data.phone_number);
    $("#user_email").val(data.email);
    $("#user_password").val(data.password);
  });
};
