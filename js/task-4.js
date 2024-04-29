const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => { 
  event.preventDefault();

  const submitEvent = event.currentTarget.elements;
  const login = submitEvent.email.value.trim();
  const password = submitEvent.password.value.trim();
  
  if (login === '' || password === '') {
    return alert('All form fields must be filled in');
  }

  const userAccount = {
    email: login,
    password: password,
  }

  console.log(userAccount);
  loginForm.reset();
})