// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(express.json()); // JSON body parse karega
app.use(cors()); // frontend-backend ke bich CORS allow

// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));


// Test route
app.get('/', (req, res) => {
  res.send('Hello Megha! Your backend is working 🎉');
});

// Routes
const adminRoutes = require('./routes/admin');
app.use('/api/admin', adminRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));


const customerRoutes = require('./routes/customerRoutes');
app.use('/api/customers', customerRoutes);
