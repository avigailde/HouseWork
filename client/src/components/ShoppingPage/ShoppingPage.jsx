import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addToCart } from '../../features/cart/cartSlice'

import ProductSelector from '../ProductSelector/ProductSelector'
import Cart from '../Cart/Cart'

import './ShoppingPage.css'

function ShoppingPage({ onContinue }) {
  const dispatch = useDispatch()

  const cartItems = useSelector(
    state => state.cart.items
  )

  const [categories, setCategories] = useState([])
  const [selectedCategoryId, setSelectedCategoryId] = useState('')
  const [selectedProductId, setSelectedProductId] = useState('')
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    fetch('http://localhost:5017/api/categories')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load categories')
        }

        return response.json()
      })
      .then(data => {
        setCategories(data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  const selectedCategory = categories.find(
    category =>
      category.id === Number(selectedCategoryId)
  )

  const selectedProduct =
    selectedCategory?.products.find(
      product =>
        product.id === Number(selectedProductId)
    )

  const handleCategoryChange = event => {
    setSelectedCategoryId(event.target.value)
    setSelectedProductId('')
  }

  const handleProductChange = event => {
    setSelectedProductId(event.target.value)
  }

  const handleQuantityChange = event => {
    setQuantity(event.target.value)
  }

  const handleAddToCart = () => {
    if (
      !selectedCategory ||
      !selectedProduct ||
      Number(quantity) < 1
    ) {
      return
    }

    dispatch(
      addToCart({
        productId: selectedProduct.id,
        name: selectedProduct.name,
        price: selectedProduct.price,
        quantity: Number(quantity),

        categoryId: selectedCategory.id,
        categoryName: selectedCategory.name,
      })
    )

    // איפוס כל שדות הבחירה אחרי הוספה לעגלה
    setSelectedCategoryId('')
    setSelectedProductId('')
    setQuantity(1)
  }

  return (
    <div className="shopping-page">
      <h1>רשימת קניות</h1>

      <ProductSelector
        categories={categories}
        selectedCategoryId={selectedCategoryId}
        selectedProductId={selectedProductId}
        quantity={quantity}
        onCategoryChange={handleCategoryChange}
        onProductChange={handleProductChange}
        onQuantityChange={handleQuantityChange}
        onAdd={handleAddToCart}
      />

      <Cart items={cartItems} />
      {cartItems.length > 0 && (
        <button
          className="continue-button"
          onClick={onContinue}
        >
          המשך הזמנה
        </button>
      )}
    </div>
  )
}

export default ShoppingPage