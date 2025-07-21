// Check if token exists
const token = localStorage.getItem('token');

if (!token) {
  // User not logged in, redirect to login page
  window.location.href = 'login.html';
}

// Logout function
function logout() {
  localStorage.removeItem('token');
  window.location.href = 'login.html';
}
