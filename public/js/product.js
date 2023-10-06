const addtocart = (e) => {
  if (e.target.matches(".cartbtn")) {
    const product = e.target.parentElement;
    const id = product.children[2].dataset.prodid;
    const name = product.children[0].dataset.title;
    const price = product.children[1].dataset.price;
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = { id, name, price };
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

document
  .querySelector(".product-container")
  .addEventListener("click", addtocart);
