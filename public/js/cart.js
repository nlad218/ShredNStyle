const cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartEl = document.querySelector(".cart");
for (let i = 0; i < cart.length; i++) {
  console.log(cart[i]);
}

// const cartItemTemplateSource =
//   document.getElementById("cart-item-template").innerHTML;
// const cartItemTemplate = Handlebars.compile(cartItemTemplateSource);

// const cart = JSON.parse(localStorage.getItem("cart")) || [];
// const cartItemsContainer = document.getElementById("cart-items");

// for (let i = 0; i < cart.length; i++) {
//   const item = cart[i];

//   const context = {
//     name: item.name,
//     price: item.price,
//   };
//   const cartItemHTML = cartItemTemplate(context);

//   cartItemsContainer.innerHTML += cartItemHTML;
//}

const handleAddToCart = async (e) => {
  const product_id = document.getElementById("product-id").value;
  const quantity = parseInt(document.querySelector(".num").innerText);
  console.log(quantity);
  const response = await fetch(`/api/orders/cart/${product_id}`, {
    method: "POST",

    body: JSON.stringify({ quantity }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.assign("/cart");
  } else {
    alert("error adding to cart");
  }
};

document
  .getElementById("addcartbtn")
  .addEventListener("click", handleAddToCart);
