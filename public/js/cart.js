const cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartEl = document.querySelector(".cart");
for (let i = 0; i < cart.length; i++) {
  const item = cart[i];
  console.log(item);

  const listItem = document.createElement("li");
  listItem.textContent = `${item.name} - Price: $${item.price}`;
  cartEl.appendChild(listItem);
}
