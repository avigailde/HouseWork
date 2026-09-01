import { useState } from 'react'

import ShoppingPage from './components/ShoppingPage/ShoppingPage'
import OrderPage from './components/OrderPage/OrderPage'

function App() {
  const [currentPage, setCurrentPage] = useState('shopping')

  if (currentPage === 'order') {
    return (
      <OrderPage
        onBack={() => setCurrentPage('shopping')}
      />
    )
  }

  return (
    <ShoppingPage
      onContinue={() => setCurrentPage('order')}
    />
  )
}

export default App