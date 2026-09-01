import './OrderSummary.css'

function OrderSummary({ items }) {
  return (
    <div className="order-summary">
      <h2>סיכום הזמנה</h2>

      {items.map(item => (
        <div
          key={item.productId}
          className="order-summary-item"
        >
          <span>{item.name}</span>

          <span>
            כמות: {item.quantity}
          </span>
        </div>
      ))}
    </div>
  )
}

export default OrderSummary