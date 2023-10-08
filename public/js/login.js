// const loginFormHandler = async function (event) {
// 	event.preventDefault();

// 	const usernameV = document.querySelector("#username-input-login");
// 	const emailV = document.querySelector("#email-input-login");
// 	const passwordV = document.querySelector("#password-input-login");

// 	const response = await fetch("/api/users/login", {
// 		method: "POST",
// 		body: JSON.stringify({
// 			username: usernameV.value,
// 			email: emailV.value,
// 			password: passwordV.value,
// 		}),
// 		headers: { "Content-Type": "application/json" },
// 	});

// 	if (response.ok) {
// 		document.location.replace("/main");
// 	} else {
// 		alert("Failed to login");
// 	}
// };

// document
// 	.querySelector("#login-form")
// 	.addEventListener("submit", loginFormHandler);
