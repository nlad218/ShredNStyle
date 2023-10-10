const deleteFromCart =  async (e) => {
    if (!e.target.matches(".deletebtn"))return;
    const product_id = e.target.dataset.id
    const response = await fetch(`/api/orders/cart/${product_id}`, {
        method: "DELETE",
			headers: {
				"Content-Type": "application/json", 
			},
    })
    if (response.ok) {
        document.location.reload()
    } else {
        alert("error in deleting item")
    }
}






document.querySelector(".cart-items").addEventListener("click", deleteFromCart);
