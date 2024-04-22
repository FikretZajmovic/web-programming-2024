getReviews = () => {
  // Through the library called JQuery
  $.get("/web-programming-project/spapp/json/reviews.json", (data) => {
    // Callback function
    let output = "";
    data.forEach((review, index) => {
      if (index === 0) {
        // Set the first review as active
        output += `
            <div class="carousel-item active">
              <div class="testimonial-item bg-white rounded p-4">
                <div class="d-flex align-items-center mb-4">
                  <img
                    class="flex-shrink-0 rounded-circle border p-1"
                    src="${review.image}"
                    alt=""
                  />
                  <div class="ms-4">
                    <h5 class="mb-1">${review.name}</h5>
                    <span>${review.profession}</span>
                  </div>
                </div>
                <p class="mb-0">
                  ${review.content}
                </p>
              </div>
            </div>
          `;
      } else {
        // Other reviews without the active class
        output += `
            <div class="carousel-item">
              <div class="testimonial-item bg-white rounded p-4">
                <div class="d-flex align-items-center mb-4">
                  <img
                    class="flex-shrink-0 rounded-circle border p-1"
                    src="${review.image}"
                    alt=""
                  />
                  <div class="ms-4">
                    <h5 class="mb-1">${review.name}</h5>
                    <span>${review.profession}</span>
                  </div>
                </div>
                <p class="mb-0">
                  ${review.content}
                </p>
              </div>
            </div>
          `;
      }
    });
    document.getElementById("reviewsCarousel").innerHTML = output;
  });
};

getReviews();
