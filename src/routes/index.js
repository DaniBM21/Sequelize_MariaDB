const express = require('express');
const customers = require('../controller/customer.controller');
const router = express.Router();

// Create new customer
router.post('/api/customers/create', customers.create);

// Retrieve all customer
router.get('/api/customers', customers.findAll);

// Retrieve a single customer by ID
router.get('/api/customers/:customerId', customers.findByPk);

// Update a customer with ID
router.put('/api/customers/:customerId', customers.update);

// Delete a customer with ID
router.delete('/api/customers/:customerId', customers.delete);

module.exports = router;