const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');

// POST: Add new customer data
router.post('/add', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const newCustomer = new Customer({ name, email, phone, message });
    await newCustomer.save();
    res.status(201).json({ message: 'Customer data saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error saving customer data' });
  }
});

// GET: Fetch all customer data (optional, for admin)
router.get('/all', async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching customer data' });
  }
});

module.exports = router;
