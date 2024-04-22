deleteUser = (id) => {
  if (confirm("Do you want to delete the user with the id: " + id + "?")) {
    $.ajax({
      url: "../backend/delete_user.php?id=" + id,
      type: "DELETE",
      success: () => {
        console.log("Succesfully deleted!");
        Fetch.getUsers();
      },
    });
  }
};
