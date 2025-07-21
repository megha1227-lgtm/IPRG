document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const res = await fetch('http://localhost:5000/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.ok) {
      // Save token to localStorage
      localStorage.setItem('token', data.token);
      window.location.href = 'dashboard.html'; // Redirect to dashboard
    } else {
      document.getElementById('msg').innerText = data.msg;
    }
  } catch (err) {
    console.error(err);
    document.getElementById('msg').innerText = 'Server error';
  }
});
