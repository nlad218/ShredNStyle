const logout = async () => {
	console.log("Out");
	try {
		const response = await fetch("/api/users/logout", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
		});

		if (response.ok) {
			// Redirect the user to the login page or any other desired page after logout.
			document.location.replace("/");
		} else {
			// Handle logout failure, e.g., by displaying an error message.
			alert("Failed to logout");
		}
	} catch (error) {
		console.error("An error occurred during logout:", error);
	}
};

// Attach the logout function to a logout button or link.
document.querySelector("#logout-button").addEventListener("click", logout);
