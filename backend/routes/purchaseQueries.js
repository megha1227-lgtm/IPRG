// backend/routes/purchaseQueries.js
const express = require('express');
const router = express.Router();
const PurchaseQuery = require('../models/PurchaseQuery');

// POST: save customer queries
router.post('/', async (req, res) => {
  try {
    const { department, question, name, email, phone, message } = req.body;

    // Create new document
    const newQuery = new PurchaseQuery({
      department,
      question,
      name,
      email,
      phone,
      message
    });

    await newQuery.save();
    res.status(201).json({ message: "Purchase query saved successfully" });
  } catch (err) {
    console.error('❌ Error saving purchase query:', err);
    res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = router;
