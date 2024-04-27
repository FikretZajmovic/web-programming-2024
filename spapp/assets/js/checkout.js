// Function to log order details
function logOrderDetails() {
  // Retrieve order details from localStorage
  var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  var totalItems = 0;
  var totalPrice = 0;
  var deliveryFee = parseFloat($("#delivery-option").val()); // Get the delivery fee
  var totalWithDelivery = 0;

  // Log order details to the console
  console.log("Order Details");
  console.log("Items:");

  cartItems.forEach(function (item) {
    var itemTotal = item.price * item.quantity;
    totalPrice += itemTotal;
    totalItems += item.quantity;

    console.log("Product:", item.productName);
    console.log("Quantity:", item.quantity);
    console.log("Price:", item.price.toFixed(2));
  });

  totalWithDelivery = totalPrice + deliveryFee;

  // Log total items, total price, and total price with delivery
  console.log("Total Items:", totalItems);
  console.log("Total Price:", totalPrice.toFixed(2));
  console.log("Total Price with Delivery:", totalWithDelivery.toFixed(2));
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Log order details to the console
    logOrderDetails();

    // Log that the order has been submitted
    console.log("Order submitted!");
  });

  // Call logOrderDetails function after the DOM has loaded
  logOrderDetails();
});
