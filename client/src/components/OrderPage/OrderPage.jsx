import { useState } from 'react'
import { useSelector } from 'react-redux'

import OrderForm from '../OrderForm/OrderForm'
import OrderSummary from '../OrderSummary/OrderSummary'

import './OrderPage.css'

function OrderPage({ onBack }) {
  const cartItems = useSelector(
    state => state.cart.items
  )

  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    email: '',
  })

  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = event => {
    const { name, value } = event.target

    setFormData(previous => ({
      ...previous,
      [name]: value,
    }))
  }

  const handleSubmit = async event => {
    event.preventDefault()

    const order = {
      ...formData,
      products: cartItems,
    }

    try {
      setIsSubmitting(true)
      setMessage('')

      const response = await fetch(
        'http://localhost:3001/api/orders',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(order),
        }
      )

      if (!response.ok) {
        throw new Error('Failed to send order')
      }

      setMessage('ההזמנה התקבלה בהצלחה')
    } catch (error) {
      console.error(error)
      setMessage('אירעה שגיאה בשליחת ההזמנה')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="order-page">
      <h1>סיכום הזמנה</h1>

      <div className="order-content">
        <OrderForm
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />

        <OrderSummary items={cartItems} />
      </div>

      {message && (
        <div className="order-message">
          {message}
        </div>
      )}

      <button
        className="back-button"
        onClick={onBack}
      >
        חזרה לרשימת הקניות
      </button>
    </div>
  )
}

export default OrderPage