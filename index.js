window.addEventListener('load', function(){
  const preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
});


const searchInput = document.getElementById('searchInput');
const items = document.querySelectorAll('.industry-item');

searchInput.addEventListener('keyup', function() {
  const filter = searchInput.value.toLowerCase();
  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    if (text.includes(filter)) {
      item.style.display = 'flex'; // show
    } else {
      item.style.display = 'none'; // hide
    }
  });
});

window.addEventListener('load', function(){
  // Show after 2 minutes (120000 ms)
  setTimeout(function(){
    document.getElementById('loginModal').style.display = 'block';
  }, 120000);
});

// Close modal when click on X
document.querySelector('.close').onclick = function() {
  document.getElementById('loginModal').style.display = 'none';
}

// Close modal when click outside the modal box
window.onclick = function(event) {
  const modal = document.getElementById('loginModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}


// Toggle FAQ content visibility
document.querySelectorAll('.plus-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.classList.toggle('active');
  });
});




document.getElementById('customerForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  try {
    const res = await fetch('/api/customers/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const msg = await res.json();
    document.getElementById('responseMsg').innerText = msg.message || 'Success';
  } catch (error) {
    document.getElementById('responseMsg').innerText = 'Error submitting data';
  }
});


// script.js me
if (localStorage.getItem('loggedIn') === 'true') {
  document.querySelector('nav').innerHTML += '<a href="#">Welcome!</a>';
}
