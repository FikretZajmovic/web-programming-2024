/*$(document).ready(function () {
  // Array to store added products
  var cartItems = [];
  var deliveryFees = {
    standard: 5.0,
    express: 10.0,
  };

  // Function to add product to cart
  function addToCart(productName, price) {
    console.log("Adding product to cart:", productName, price);
    // Check if the product is already in the cart
    var existingProduct = cartItems.find(function (item) {
      return item.productName === productName;
    });

    if (existingProduct) {
      // Increment the quantity if the product is already in the cart
      existingProduct.quantity++;
    } else {
      // Add the product to the cart if it's not already there
      cartItems.push({ productName: productName, price: price, quantity: 1 });
    }

    // Update the order page
    updateOrderPage();
    console.log("Cart items:", cartItems);
  }

  // Function to remove product from cart
  function removeFromCart(productName) {
    // Find the index of the product in the cart
    var index = cartItems.findIndex(function (item) {
      return item.productName === productName;
    });

    if (index !== -1) {
      // Remove the product from the cart
      cartItems.splice(index, 1);
    }

    // Update the order page
    updateOrderPage();
  }

  // Function to update the order page
  function updateOrderPage() {
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
          '<img src="/spapp/assets/img/' +
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
          '<a href="#!" class="text-muted remove-item" data-product="' +
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

  // Event listener for adding a product to the cart
  $(document).on("click", ".product-overlay .btn-outline-light", function () {
    console.log("Add to cart button clicked");
    var productName = $(this).closest(".product-item").find("h3").text().trim();
    var priceString = $(this)
      .closest(".product-item")
      .find(".product-price")
      .text()
      .trim();
    var price = parseFloat(priceString.replace(/[^\d.]/g, ""));
    console.log("Product Name:", productName);
    console.log("Price:", price);
    addToCart(productName, price);
  });

  // Event listener for removing a product from the cart
  $("#order-list").on("click", ".remove-item", function () {
    var productName = $(this).data("product");
    removeFromCart(productName);
  });

  // Event listener for increasing quantity of a product
  $("#order-list").on("click", ".increase-quantity", function () {
    var productName = $(this).data("product");
    var existingProduct = cartItems.find(function (item) {
      return item.productName === productName;
    });

    if (existingProduct) {
      existingProduct.quantity++;
      updateOrderPage();
    }
  });

  // Event listener for decreasing quantity of a product
  $("#order-list").on("click", ".decrease-quantity", function () {
    var productName = $(this).data("product");
    var existingProduct = cartItems.find(function (item) {
      return item.productName === productName;
    });

    if (existingProduct && existingProduct.quantity > 1) {
      existingProduct.quantity--;
      updateOrderPage();
    }
  });

  $("#delivery-option").on("change", function () {
    updateOrderPage();
  });

  // Initial call to update the order page
  updateOrderPage();
});
*/
