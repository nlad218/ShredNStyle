const cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartEl = document.querySelector(".cart");
for (let i = 0; i < cart.length; i++) {
  console.log(cart[i]);
}
