const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');
const nodemailer = require('nodemailer');


// Signup
router.post('/signup', async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    const newCustomer = new Customer({ name, email, phone, password });
    await newCustomer.save();
    res.status(201).json({ message: 'Signup successful' });
  } catch (err) {
    res.status(500).json({ error: 'Signup failed' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const customer = await Customer.findOne({ email, password });
    if (customer) {
      res.json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Login failed' });
  }
});

module.exports = router;

function toggleForm(form) {
  document.getElementById('signupBox').classList.toggle('hidden', form !== 'signup');
  document.getElementById('loginBox').classList.toggle('hidden', form !== 'login');
}

async function signup() {
  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const phone = document.getElementById('signupPhone').value;
  const password = document.getElementById('signupPassword').value;

  const res = await fetch('http://localhost:5000/api/customers/signup', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ name, email, phone, password })
  });
  const data = await res.json();
  alert(data.message);
  if (res.ok) toggleForm('login');
}

async function login() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  const res = await fetch('http://localhost:5000/api/customers/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ email, password })
  });
  const data = await res.json();
  alert(data.message);
  if (res.ok) {
    document.getElementById('signupBox').classList.add('hidden');
    document.getElementById('loginBox').classList.add('hidden');
    document.getElementById('successBox').classList.remove('hidden');
  }
}
