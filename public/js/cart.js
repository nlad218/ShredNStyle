const handleAddToCart = async (e) => {

	const product_id = document.getElementById("product-id").value;
	const quantity = parseInt(document.querySelector(".num").innerText);
	const response = await fetch(`/api/orders/cart/${product_id}`, {
		method: "POST",

		body: JSON.stringify({ quantity }),
		headers: { "Content-Type": "application/json" },
	});
	if (response.ok) {
		var addedToCartModal = new bootstrap.Modal(
			document.getElementById("addedToCartModal")
		);
		addedToCartModal.show();
	} else {
		var loginModal = new bootstrap.Modal(document.getElementById("loginModal"));
		loginModal.show();
	}
};

document
  .getElementById("addcartbtn")
  .addEventListener("click", handleAddToCart);
