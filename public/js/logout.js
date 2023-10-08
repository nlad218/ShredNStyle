const logout = async () => {
	console.log("Out");
	try {
		const response = await fetch("/api/users/logout", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
		});

		if (response.ok) {
			// Show the Bootstrap modal when logout is successful
			const modal = document.getElementById("logoutModal");
			const modalInstance = new bootstrap.Modal(modal);
			modalInstance.show();

			// Optionally, add a delay before redirecting
			setTimeout(() => {
				// Redirect the user to the login page or any other desired page after logout.
				document.location.replace("/");
			}, 2000);
		} else {
			alert("Failed to logout");
		}
	} catch (error) {
		console.error("An error occurred during logout:", error);
	}
};

// Attach the logout function to a logout button or link.
document.querySelector("#logout-button").addEventListener("click", logout);
