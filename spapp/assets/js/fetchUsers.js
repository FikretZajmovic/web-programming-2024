getUsers = () => {
  $.get("../backend/get_users.php", (data) => {
    let jsonData = JSON.parse(data);

    let html = ``;

    console.log(data);
    $.each(jsonData, (index, users) => {
      $.each(users, (index, user) => {
        $.each(user, (index, u) => {
          html += `
            <div class="card col-md-3" style="width: 15rem" id="bakery-${u.user_id}">
                <div class="card-body">
                  <h6 class="card-title text-center" style="color: #black">
                    ${u.first_name} ${u.last_name} <br> <span class="fw-light text-primary">${u.phone_number}</span>
                  </h6>
                  <div class="text-center">
                    <div class="d-flex justify-content-center">
                        <button type="button" class="btn text-primary" data-bs-toggle="modal" data-bs-target="#edit-user" onclick="editUser(${u.user_id})"><i class="fas fa-edit" aria-hidden="true"></i></button>
                        <button type="button" class="btn text-danger" onclick="deleteUser(${u.user_id})"><i class="fa fa-trash" aria-hidden="true"></i></button>
                    </div>
                  </div>
                </div>
              </div>
              `;
        });
      });
    });
    $("#userSection").html(html);
  });
};

getUsers();
