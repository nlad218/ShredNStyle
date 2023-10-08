// Get a reference to the form and error message elements
const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");

// Listen for form submission
loginForm.addEventListener("submit", async (e) => {
	e.preventDefault();

	// Clear any previous error message
	loginError.classList.add("d-none");

	// Get form input values
	const email = document.querySelector('input[name="email"]').value;
	const password = document.querySelector('input[name="password"]').value;

	const formData = {
		email: email,
		password: password,
	};

	try {
		// Make a fetch request to your login route with JSON data
		const response = await fetch("/api/users/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json", // Specify JSON content type
			},
			body: JSON.stringify(formData), // Serialize form data as JSON
		});

		if (response.ok) {
			// Handle successful login and redirect if necessary
			window.location.href = "/";
		} else if (response.status === 400) {
			// Show the error message
			loginError.classList.remove("d-none");
		}
	} catch (error) {
		console.error("An error occurred:", error);
	}
});
