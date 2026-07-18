const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const messageBox = document.getElementById('formMessage');
const googleButton = document.getElementById('googleSignInBtn');

if (googleButton && messageBox) {
  googleButton.addEventListener('click', () => {
    messageBox.textContent = 'Google sign-in is ready for secure authentication integration.';
    messageBox.style.color = '#60a5fa';
  });
}

if (form && emailInput && passwordInput && messageBox) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      messageBox.textContent = 'Please enter both your email and password.';
      messageBox.style.color = '#fbbf24';
      return;
    }

    messageBox.textContent = 'Login successful. Redirecting...';
    messageBox.style.color = '#34d399';

    setTimeout(() => {
      window.location.href = 'index.html';
    }, 600);
  });
}
