// Get a reference to the form and error message elements
const signupForm = document.getElementById("signupForm");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

// Listen for form submission
signupForm.addEventListener("submit", async (e) => {
	e.preventDefault();

	emailError.classList.add("d-none");
	passwordError.classList.add("d-none");

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
		const response = await fetch("/api/users/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		});

		if (response.ok) {
			// Handle successful login and redirect if necessary
			window.location.href = "/";
		} else if (response.status === 409) {
			emailError.classList.remove("d-none");
		} else if (response.status === 406) {
			passwordError.classList.remove("d-none");
		} else {
			alert("Failed to signup!");
		}
	} catch (error) {
		console.error("An error occurred:", error);
	}
});
