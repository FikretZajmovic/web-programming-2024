// Event listener for adding a product to the cart
/* $(document).on("click", ".product-overlay .btn-outline-light", function () {
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

function addToCart(productName, price) {
  // Retrieve cart items from localStorage or initialize an empty array
  var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

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

  // Store updated cart items back to localStorage
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  console.log("Cart items:", cartItems);
}
*/
