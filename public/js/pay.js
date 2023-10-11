const payButton = document.getElementById("payButton");

payButton.addEventListener("click", async (e) => {
	e.preventDefault();

	const response = await fetch("/api/users/pay", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
	});
	if (response.ok) {
		console.log("OK");
	} else {
		console.log("Not ok");
	}
});
