getTeam = () => {
  $.get("/web-programming-project/spapp/json/team.json", (data) => {
    let output = "";
    data.forEach((team) => {
      output += `
      <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
      <div class="team-item text-center rounded overflow-hidden">
        <img class="img-fluid" src="${team.image}" alt="" />
        <div class="team-text">
          <div class="team-title">
            <h5>${team.fullName}</h5>
            <span>${team.designation}</span>
          </div>
          <div class="team-social">
            <a class="btn btn-square btn-light rounded-circle" href=""
              ><i class="fab fa-facebook-f"></i
            ></a>
            <a class="btn btn-square btn-light rounded-circle" href=""
              ><i class="fab fa-twitter"></i
            ></a>
            <a class="btn btn-square btn-light rounded-circle" href=""
              ><i class="fab fa-instagram"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
            `;
    });
    document.getElementById("teamMembers").innerHTML = output;
  });
};

getTeam();
