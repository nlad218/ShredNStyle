const loginFormHandler = async function(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-input-login');
    const email = document.querySelector('#email-input-login');
    const password = document.querySelector('#password-input-login');
    
    const response = await fetch('/a')

}