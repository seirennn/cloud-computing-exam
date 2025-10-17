'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProductsGrid from '@/components/ProductsGrid'
import CartModal from '@/components/CartModal'

export interface Product {
  id: number
  name: string
  description: string
  price: number
  emoji: string
}

export interface CartItem extends Product {
  quantity: number
}

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id)
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    )
  }

  const getTotalItems = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }

  const handleCheckout = () => {
    alert('Thank you for your purchase! This is a demo application.')
    setCart([])
    setIsCartOpen(false)
  }

  return (
    <main>
      <Header
        cartCount={getTotalItems()}
        onCartClick={() => setIsCartOpen(true)}
      />
      <Hero />
      <ProductsGrid onAddToCart={addToCart} />
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
        onCheckout={handleCheckout}
        totalPrice={getTotalPrice()}
      />
    </main>
  )
}

