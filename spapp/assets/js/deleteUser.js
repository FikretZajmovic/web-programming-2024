deleteUser = (id) => {
  if (confirm("Do you want to delete the user with the id: " + id + "?")) {
    $.ajax({
      url: "../backend/delete_user.php?user_id=" + id,
      type: "DELETE",
      success: () => {
        console.log("Succesfully deleted!");
        getUsers();
      },
    });
  }
};
