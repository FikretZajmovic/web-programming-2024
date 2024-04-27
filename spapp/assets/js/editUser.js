editUser = (id) => {
  $.get("../backend/get_user.php?user_id=" + id, (data) => {
    $("#edit_user_id").val(data.user_id);
    $("#first_name").val(data.first_name);
    $("#last_name").val(data.last_name);
    $("#phone_number").val(data.phone_number);
    $("#email").val(data.email);
    $("#password").val(data.password);
    console.log(data);
  });
};
