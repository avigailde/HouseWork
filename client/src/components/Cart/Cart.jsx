import CartCategory from '../CartCategory/CartCategory'
import './Cart.css'

function Cart({ items }) {
  if (items.length === 0) {
    return null
  }

  const groupedItems = items.reduce((groups, item) => {
    if (!groups[item.categoryId]) {
      groups[item.categoryId] = {
        categoryName: item.categoryName,
        items: [],
      }
    }

    groups[item.categoryId].items.push(item)

    return groups
  }, {})

  return (
    <div className="cart-container">
      {Object.entries(groupedItems).map(
        ([categoryId, group]) => (
          <CartCategory
            key={categoryId}
            categoryName={group.categoryName}
            items={group.items}
          />
        )
      )}
    </div>
  )
}

export default Cart