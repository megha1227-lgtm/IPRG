// Auto show modal after 3 seconds
setTimeout(() => {
  document.getElementById('overlay').classList.remove('hidden');
}, 3000);

// Toggle tabs
document.getElementById('showSignup').onclick = () => {
  document.getElementById('signupForm').classList.remove('hidden');
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById('showSignup').classList.add('active');
  document.getElementById('showLogin').classList.remove('active');
};

document.getElementById('showLogin').onclick = () => {
  document.getElementById('signupForm').classList.add('hidden');
  document.getElementById('loginForm').classList.remove('hidden');
  document.getElementById('showSignup').classList.remove('active');
  document.getElementById('showLogin').classList.add('active');
};

// Signup
async function signup() {
  const res = await fetch('http://localhost:5000/api/auth/signup', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({
      name: document.getElementById('signupName').value,
      email: document.getElementById('signupEmail').value,
      phone: document.getElementById('signupPhone').value,
      password: document.getElementById('signupPassword').value
    })
  });
  const data = await res.json();
  if (data.message) {
    alert('Signup successful!');
    window.location.href = 'index.html';
  } else {
    alert(data.error || 'Signup failed');
  }
}

// Login
async function login() {
  const res = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({
      email: document.getElementById('loginEmail').value,
      password: document.getElementById('loginPassword').value
    })
  });
  const data = await res.json();
  if (data.token) {
    alert('Login successful!');
    localStorage.setItem('token', data.token);
    window.location.href = 'index.html';
  } else {
    alert(data.error || 'Login failed');
  }
}
