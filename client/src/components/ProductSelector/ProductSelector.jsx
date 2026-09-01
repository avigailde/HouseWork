import './ProductSelector.css'

function ProductSelector({
  categories,
  selectedCategoryId,
  selectedProductId,
  quantity,
  onCategoryChange,
  onProductChange,
  onQuantityChange,
  onAdd,
}) {
  const selectedCategory = categories.find(
    category => category.id === Number(selectedCategoryId)
  )

  return (
    <div className="product-selector">
      <div className="selector-field">
        <select
          value={selectedCategoryId}
          onChange={onCategoryChange}
        >
          <option value="">בחר קטגוריה</option>

          {categories.map(category => (
            <option
              key={category.id}
              value={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="selector-field">
        <select
          value={selectedProductId}
          onChange={onProductChange}
          disabled={!selectedCategory}
        >
          <option value="">שם המוצר</option>

          {selectedCategory?.products.map(product => (
            <option
              key={product.id}
              value={product.id}
            >
              {product.name}
            </option>
          ))}
        </select>
      </div>

      <div className="quantity-field">
        <label>כמות</label>

        <input
          type="number"
          min="1"
          value={quantity}
          onChange={onQuantityChange}
        />
      </div>

      <button
        className="add-button"
        onClick={onAdd}
        disabled={!selectedProductId}
      >
        הוסף מוצר לסל
      </button>
    </div>
  )
}

export default ProductSelector