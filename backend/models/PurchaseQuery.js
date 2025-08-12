// backend/models/PurchaseQuery.js
const mongoose = require('mongoose');

const purchaseQuerySchema = new mongoose.Schema({
  department: String,
  question: String,
  name: String,
  email: String,
  phone: String,
  message: String
}, {
  timestamps: true
});

module.exports = mongoose.model('PurchaseQuery', purchaseQuerySchema);
