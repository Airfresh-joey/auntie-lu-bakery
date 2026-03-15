'use client'

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react'

export interface CartItem {
  id: string
  name: string
  price: number
  image: string
  description: string
  quantity: number
  customization?: string
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void
  updateQty: (index: number, change: number) => void
  removeItem: (index: number) => void
  toggleCart: () => void
  isCartOpen: boolean
  clearCart: () => void
}

const CartContext = createContext<CartContextType | null>(null)

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}

export default function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('auntie-lu-cart')
    if (saved) setCart(JSON.parse(saved))
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (loaded) localStorage.setItem('auntie-lu-cart', JSON.stringify(cart))
  }, [cart, loaded])

  const addToCart = useCallback((item: Omit<CartItem, 'quantity'> & { quantity?: number }) => {
    setCart(prev => {
      const qty = item.quantity || 1
      const existing = prev.find(i => i.id === item.id && !i.customization)
      if (existing && !item.customization) {
        return prev.map(i => i.id === item.id && !i.customization ? { ...i, quantity: i.quantity + qty } : i)
      }
      return [...prev, { ...item, quantity: qty }]
    })
  }, [])

  const updateQty = useCallback((index: number, change: number) => {
    setCart(prev => {
      const updated = [...prev]
      updated[index] = { ...updated[index], quantity: updated[index].quantity + change }
      if (updated[index].quantity <= 0) updated.splice(index, 1)
      return updated
    })
  }, [])

  const removeItem = useCallback((index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index))
  }, [])

  const toggleCart = useCallback(() => setIsCartOpen(prev => !prev), [])
  const clearCart = useCallback(() => { setCart([]); localStorage.removeItem('auntie-lu-cart') }, [])

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQty, removeItem, toggleCart, isCartOpen, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}
