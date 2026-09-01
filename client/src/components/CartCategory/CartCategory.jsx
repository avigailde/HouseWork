import './CartCategory.css'

function CartCategory({ categoryName, items }) {
  return (
    <div className="cart-category">
      <div className="cart-category-title">
        {categoryName}
      </div>

      <div className="cart-category-items">
        {items.map(item => (
          <div
            className="cart-category-item"
            key={item.productId}
          >
            {item.name} - {item.quantity}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CartCategory