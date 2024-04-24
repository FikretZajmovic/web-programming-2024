getProducts = () => {
  $.get("../backend/get_products.php", (data) => {
    let products = JSON.parse(data);
    console.log(products);
    displayProducts(products);
  });
};

function displayProducts(products) {
  let output = "";
  $.each(products, (index, products) => {
    $.each(products, (index, product) => {
      $.each(product, (index, p) => {
        output += `
      <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div class="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
        <div class="d-flex justify-content-center mt-2">
                  <button type="button" class="btn text-primary" data-bs-toggle="modal" data-bs-target="#editProductModal" onclick="editProduct(${p.product_id})"><i class="fas fa-edit" aria-hidden="true"></i></button>
                  <button type="button" class="btn text-danger" onclick="deleteProduct(${p.product_id})"><i class="fa fa-trash" aria-hidden="true"></i></button>
              </div>
          <div class="text-center p-4">
            <div class="d-inline-block border border-primary rounded-pill px-3 mb-3">
              <span class="product-price">€${p.product_price}</span>
            </div>
            <h3 class="mb-3">${p.product_name}</h3>
            <span>${p.product_description}</span>
          </div>
          <div class="position-relative mt-auto">
            <img class="img-fluid" src="${p.product_image}" alt="" />
            <div class="product-overlay">
              <a class="btn btn-lg btn-outline-light rounded-pill px-3 addToCartBtn">Add to cart</a>
            </div>
          </div>
        </div>
      </div>
    `;
      });
    });
  });
  document.getElementById("products").innerHTML = output;

  $(".addToCartBtn").on("click", function () {
    showAlert("Product added to cart!");
  });
}

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

getProducts();
