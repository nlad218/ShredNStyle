document.addEventListener("DOMContentLoaded", function () {
  const cartButton = document.querySelector(".nav-link[href='#cart']");

  // Add a click event listener to the cart button
  cartButton.addEventListener("click", function (event) {
    event.preventDefault();

    window.location.href = "views/layouts/partials/cart.handlebars";
  });
});
