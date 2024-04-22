getUsers: () => {
  $.get("../backend/get_users.php", (data) => {
    let jsonData = JSON.parse(data);

    let html = ``;

    $.each(jsonData, (index, users) => {
      $.each(users, (index, user) => {
        $.each(user, (index, u) => {
          html += `
            <div class="card col-md-3" style="width: 15rem" id="startup-${u.id}">
                <img
                  src="./frontend/assets/startup.jpeg"
                  class="card-img-top"
                  alt="startup-image"
                />
                <div class="card-body">
                  <h6 class="card-title text-center" style="color: #00396c">
                    ${u.first_name} ${u.last_name} <br> <span class="fw-light text-primary">${u.username}</span>
                  </h6>
                  <div class="text-center">
                    <div class="d-flex justify-content-center">
                        <button type="button" class="btn text-primary" data-bs-toggle="modal" data-bs-target="#edit-user" onclick="editUser(${u.id})"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                        <button type="button" class="btn text-danger" onclick="deleteUser(${u.id})"><i class="fa fa-trash" aria-hidden="true"></i></button>
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
