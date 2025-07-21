document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  console.log('Submitting', email, password); // debug ke liye

  try {
    const res = await fetch('http://localhost:5000/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    console.log('Response', data); // debug ke liye

    if (res.ok) {
      localStorage.setItem('token', data.token);
      window.location.href = 'dashboard.html';
    } else {
      document.getElementById('msg').innerText = data.msg;
    }
  } catch (err) {
    console.error(err);
    document.getElementById('msg').innerText = 'Server error';
  }
});
