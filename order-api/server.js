const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const Order = require('./models/Order')

const app = express()

app.use(cors())
app.use(express.json())

app.post('/api/orders', async (req, res) => {
  try {
    const {
      fullName,
      address,
      email,
      products,
    } = req.body

    if (
      !fullName ||
      !address ||
      !email ||
      !products ||
      products.length === 0
    ) {
      return res.status(400).json({
        message: 'Missing required fields',
      })
    }

    const order = new Order({
      fullName,
      address,
      email,
      products,
    })

    const savedOrder = await order.save()

    res.status(201).json({
      message: 'Order saved successfully',
      orderId: savedOrder._id,
    })
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: 'Failed to save order',
    })
  }
})

const PORT = process.env.PORT || 3001

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB')

    app.listen(PORT, () => {
      console.log(`Order API running on port ${PORT}`)
    })
  })
  .catch(error => {
    console.error('MongoDB connection failed:', error)
  })