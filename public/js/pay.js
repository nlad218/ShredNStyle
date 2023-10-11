const payButton = document.getElementById("payButton");

payButton.addEventListener("click", async (e) => {
	e.preventDefault();

	try {
		const response = await fetch("/api/users/pay", {
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
		});
		if (response.ok) {
			const confirmModal = new bootstrap.Modal(
				document.getElementById("confirmModal")
			);
			confirmModal.show();

			setTimeout(() => {
				// Redirect the user to the login page or any other desired page after logout.
				document.location.replace("/");
			}, 1500);
		}
	} catch (error) {
		console.error("An error occurred:", error);
	}
});
