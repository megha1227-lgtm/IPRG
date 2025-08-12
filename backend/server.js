const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Initialize Express app
const app = express();

// ===== Middleware =====
app.use(express.json());  // Parse JSON request bodies
app.use(cors());         // Enable CORS (so frontend can call API)

// ===== MongoDB Connection =====
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// ===== Test route =====
app.get('/', (req, res) => {
  res.send('Hello Megha! Your backend is working 🎉');
});

// ===== Import & use routes =====
const customerRoutes = require('./routes/customerRoutes');
app.use('/api/customers', customerRoutes);

const purchaseQueriesRoute = require('./routes/purchaseQueries');
app.use('/api/purchase-queries', purchaseQueriesRoute);

// ✅ Aage aur bhi routes add kar sakti ho:
// const marketingRoutes = require('./routes/marketingQueries');
// app.use('/api/marketing-queries', marketingRoutes);

// ===== Start the server =====
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
