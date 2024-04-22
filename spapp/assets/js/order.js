// Array to store added products
var cartItems = [];
var deliveryFees = {
  standard: 5.0,
  express: 10.0,
};

// Function to remove product from cart
function removeFromCart(productName) {
  // Retrieve cart items from localStorage
  var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Find the index of the product in the cart
  var index = cartItems.findIndex(function (item) {
    return item.productName === productName;
  });

  if (index !== -1) {
    // Remove the product from the cart
    cartItems.splice(index, 1);

    // Store updated cart items back to localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    updateOrderPage();
  }
}

// Function to update the order page
function updateOrderPage() {
  var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  console.log("Updating order page...");
  // Clear the current order list
  $("#order-list").empty();

  // Calculate total price and number of items
  var totalPrice = 0;
  var totalItems = 0;

  // Iterate through each item in the cart
  cartItems.forEach(function (item) {
    // Calculate total price for each item
    var itemTotal = item.price * item.quantity;
    totalPrice += itemTotal;
    totalItems += item.quantity;

    // Append item to the order list
    $("#order-list").append(
      '<div class="row mb-4 d-flex justify-content-between align-items-center">' +
        '<div class="col-md-2 col-lg-2 col-xl-2">' +
        '<img src="/web-programming-project/spapp/assets/img/' +
        item.productName.toLowerCase() +
        '.jpg" class="img-fluid rounded-3" alt="' +
        item.productName +
        '"/>' +
        "</div>" +
        '<div class="col-md-3 col-lg-3 col-xl-3">' +
        '<h6 class="text-black mb-0">' +
        item.productName +
        "</h6>" +
        "</div>" +
        '<div class="col-md-3 col-lg-3 col-xl-2 d-flex">' +
        '<button class="btn btn-link px-2 decrease-quantity" data-product="' +
        item.productName +
        '"><i class="fas fa-minus"></i></button>' +
        '<input min="0" name="quantity" value="' +
        item.quantity +
        '" type="number" class="form-control form-control-sm"/>' +
        '<button class="btn btn-link px-2 increase-quantity" data-product="' +
        item.productName +
        '"><i class="fas fa-plus"></i></button>' +
        "</div>" +
        '<div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">' +
        '<h6 class="mb-0">€ ' +
        itemTotal.toFixed(2) +
        "</h6>" +
        "</div>" +
        '<div class="col-md-1 col-lg-1 col-xl-1 text-end">' +
        '<a href="javascript:void(0)" class="text-muted remove-item" data-product="' +
        item.productName +
        '"><i class="fas fa-times"></i></a>' +
        "</div>" +
        "</div>"
    );
  });

  var selectedOption = $("#delivery-option").val();

  // Get the delivery fee based on the selected option
  var deliveryFee = deliveryFees[selectedOption] || 0;

  // Calculate total price with delivery
  var totalWithDelivery = totalPrice + deliveryFee;

  // Update total price and number of items
  $("#total-items").text(totalItems);
  $("#total-price").text("€ " + totalPrice.toFixed(2));
  $("#total-price-with-delivery").text("€ " + totalWithDelivery.toFixed(2));
}

// Event listener for removing a product from the cart
$(document).on("click", ".remove-item", function () {
  var productName = $(this).data("product");
  removeFromCart(productName);
});

// Event listener for increasing quantity of a product
$("#order-list").on("click", ".increase-quantity", function () {
  var productName = $(this).data("product");
  var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  var existingProduct = cartItems.find(function (item) {
    return item.productName === productName;
  });

  if (existingProduct) {
    existingProduct.quantity++;
    localStorage.setItem("cartItems", JSON.stringify(cartItems)); // Update local storage
    updateOrderPage();
  }
});

// Event listener for decreasing quantity of a product
$("#order-list").on("click", ".decrease-quantity", function () {
  var productName = $(this).data("product");
  var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  var existingProduct = cartItems.find(function (item) {
    return item.productName === productName;
  });

  if (existingProduct && existingProduct.quantity > 1) {
    existingProduct.quantity--;
    localStorage.setItem("cartItems", JSON.stringify(cartItems)); // Update local storage
    updateOrderPage();
  }
});

$("#delivery-option").on("change", function () {
  updateOrderPage();
});

// Initial call to update the order page
updateOrderPage();
