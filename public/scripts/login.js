document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const errorDiv = document.getElementById('error');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        window.location.href = data.redirectUrl;
      } else {
        const errorData = await response.json();
        errorDiv.textContent =
          errorData.message || "Informations d'identification erronées";
      }
    } catch (error) {
      console.error(error);
      errorDiv.textContent = error.message;
    }
  });
});
