let allProducts = [];

getProducts = () => {
  $.get("/web-programming-project/spapp/json/products.json", (data) => {
    allProducts = data;
    displayProducts(data);
  });
};

getProducts();

function displayProducts(products) {
  let output = "";
  products.forEach((product) => {
    output += `
      <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div class="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
          <div class="text-center p-4">
            <div class="d-inline-block border border-primary rounded-pill px-3 mb-3">
              <span class="product-price">${product.price}</span>
            </div>
            <h3 class="mb-3">${product.name}</h3>
            <span>${product.description}</span>
          </div>
          <div class="position-relative mt-auto">
            <img class="img-fluid" src="${product.image}" alt="" />
            <div class="product-overlay">
              <a class="btn btn-lg btn-outline-light rounded-pill px-3 addToCartBtn">Add to cart</a>
            </div>
          </div>
        </div>
      </div>
    `;
  });
  document.getElementById("products").innerHTML = output;

  // Add event listener to "Add to cart" buttons
  $(".addToCartBtn").on("click", function () {
    // Show Bootstrap alert when "Add to cart" button is clicked
    showAlert("Product added to cart!");
  });
}

$("#search-input").on("keyup", function () {
  let searchText = $(this).val().toLowerCase();
  let filteredProducts = allProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchText) ||
      product.description.toLowerCase().includes(searchText)
  );
  displayProducts(filteredProducts);
});

// Function to show Bootstrap alert
function showAlert(message) {
  $(".popup-alert").remove(); // Remove any existing alerts

  let alertHtml = `
      <div class="popup-alert alert alert-success alert-dismissible fade show" role="alert">
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `;
  $("body").append(alertHtml); // Append alert to the body

  // Automatically remove the alert after a certain duration
  setTimeout(function () {
    $(".popup-alert").remove();
  }, 3000); // 3000 milliseconds = 3 seconds

  let css = `
    .popup-alert {
      position: fixed;
      top: 100px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 9999;
    }
  `;
  $("head").append($("<style>").html(css));
}
