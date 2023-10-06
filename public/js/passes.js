// Function to add a pass to the cart
function addPassesToCart(itemName, itemPrice) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const newItem = {
    name: itemName,
    price: itemPrice,
  };

  cart.push(newItem);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`${itemName} added to cart!`);
}

const addToCartButtons = document.querySelectorAll(".btn-add-to-cart");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const card = button.closest(".pass-card");
    const itemName = card.querySelector(".card-title").textContent;
    const itemPrice = card.querySelector(".card-text").textContent;
    addPassesToCart(itemName, itemPrice);
  });
});
