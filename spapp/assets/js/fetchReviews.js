getReviews = () => {
  $.get("../backend/get_reviews.php", (data) => {
    let jsonData = JSON.parse(data);

    let output = "";
    $.each(jsonData, (index, reviews) => {
      $.each(reviews, (index, review) => {
        $.each(review, (index, r) => {
          if (index === 0) {
            output += `
            <div class="carousel-item active">
              <div class="testimonial-item bg-white rounded p-4">
                <div class="d-flex align-items-center mb-4">
                  <img
                    class="flex-shrink-0 rounded-circle border p-1"
                    src="${r.picture}"
                    alt=""
                  />
                  <div class="ms-4">
                    <h5 class="mb-1">${r.user_name}</h5>
                    <span>${r.profession}</span>
                    <button type="button" class="btn text-primary" data-bs-toggle="modal" data-bs-target="#editReviewModal" onclick="editReview(${r.review_id})"><i class="fas fa-edit" aria-hidden="true"></i></button>
                        <button type="button" class="btn text-danger" onclick="deleteReview(${r.review_id})"><i class="fa fa-trash" aria-hidden="true"></i></button>
                  </div>
                </div>
                <p class="mb-0">
                  ${r.comment}
                </p>
              </div>
            </div>
          `;
          } else {
            output += `
            <div class="carousel-item">
              <div class="testimonial-item bg-white rounded p-4">
                <div class="d-flex align-items-center mb-4">
                  <img
                    class="flex-shrink-0 rounded-circle border p-1"
                    src="${r.picture}"
                    alt=""
                  />
                  <div class="ms-4">
                    <h5 class="mb-1">${r.user_name}</h5>
                    <span>${r.profession}</span>
                    <button type="button" class="btn text-primary" data-bs-toggle="modal" data-bs-target="#editReviewForm" onclick="editReview(${r.review_id})"><i class="fas fa-edit" aria-hidden="true"></i></button>
                        <button type="button" class="btn text-danger" onclick="deleteReview(${r.review_id})"><i class="fa fa-trash" aria-hidden="true"></i></button>
                  </div>
                </div>
                <p class="mb-0">
                  ${r.comment}
                </p>
              </div>
            </div>
          `;
          }
        });
      });
    });
    document.getElementById("reviewsCarousel").innerHTML = output;
  });
};

getReviews();
