// Get a reference to the form and error message elements
const signupForm = document.getElementById("signupForm");

// Listen for form submission
signupForm.addEventListener("submit", async (e) => {
	e.preventDefault();

	// Get form input values
	const email = document.querySelector('input[name="signupEmail"]').value;
	const username = document.querySelector('input[name="signupUsername"]').value;
	const password = document.querySelector('input[name="signupPassword"]').value;

	const formData = {
		email: email,
		username: username,
		password: password,
	};

	try {
		// Make a fetch request to your login route with JSON data
		const response = await fetch("/api/users/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json", // Specify JSON content type
			},
			body: JSON.stringify(formData), // Serialize form data as JSON
		});

		if (response.ok) {
			// Handle successful login and redirect if necessary
			window.location.href = "/signup";
		} else if (response.status === 400) {
			// Show the error message
			alert("Failed to signup!");
		}
	} catch (error) {
		console.error("An error occurred:", error);
	}
});
