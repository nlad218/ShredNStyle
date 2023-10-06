// const cart = JSON.parse(localStorage.getItem("cart")) || [];
// const cartEl = document.querySelector(".cart");
// for (let i = 0; i < cart.length; i++) {
//   console.log(cart[i]);
// }

const cartItemTemplateSource =
  document.getElementById("cart-item-template").innerHTML;
const cartItemTemplate = Handlebars.compile(cartItemTemplateSource);

const cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartItemsContainer = document.getElementById("cart-items");

for (let i = 0; i < cart.length; i++) {
  const item = cart[i];

  const context = {
    name: item.name,
    price: item.price,
  };
  const cartItemHTML = cartItemTemplate(context);

  cartItemsContainer.innerHTML += cartItemHTML;
}
