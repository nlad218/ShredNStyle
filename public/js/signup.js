const signUpFormHandler = async function (event) {
  event.preventDefault();

  const usernameV = document.querySelector("#username-input-signup");
  const emailV = document.querySelector("#email-input-signup");
  const passwordV = document.querySelector("#password-input-signup");

  const response = await fetch("/api/user/signup", {
    method: "POST",
    body: JSON.stringify({
      username: usernameV.value,
      email: emailV.value,
      password: passwordV.value,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("user/login");
  } else {
    alert("Failed to sign up");
  }
};

document
  .querySelector("#signup-form")
  .addEventListener("submit", signUpFormHandler);
