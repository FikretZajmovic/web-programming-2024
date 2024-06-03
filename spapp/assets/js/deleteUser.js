deleteUser = (id) => {
  if (confirm("Do you want to delete the user with the id: " + id + "?")) {
    $.ajax({
      url:
        "https://goldfish-app-l87ee.ondigitalocean.app/backend/users/delete/" +
        id,
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
        getUsers();
      },
    });
  }
};
