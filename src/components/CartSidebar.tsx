'use client'

import { useCart } from './CartProvider'

export default function CartSidebar() {
  const { cart, updateQty, removeItem, toggleCart, isCartOpen } = useCart()

  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  async function checkout() {
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cart }),
      })
      const data = await response.json()
      if (data.url) {
        localStorage.removeItem('auntie-lu-cart')
        window.location.href = data.url
      } else {
        throw new Error(data.error || 'Checkout failed')
      }
    } catch (error) {
      alert('Checkout error: ' + (error instanceof Error ? error.message : 'Unknown error'))
    }
  }

  return (
    <>
      <div className={`fixed top-0 right-0 w-[380px] max-w-[90vw] h-full bg-white shadow-[-5px_0_30px_rgba(0,0,0,0.2)] z-[2000] flex flex-col transition-transform duration-300 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-5 border-b border-gray-100 flex justify-between items-center">
          <h3 className="font-serif text-xl m-0">Your Order</h3>
          <button onClick={toggleCart} className="bg-transparent border-none text-3xl cursor-pointer text-gray-400 hover:text-gray-600">&times;</button>
        </div>
        <div className="flex-1 overflow-y-auto p-5">
          {cart.length === 0 ? (
            <div className="text-center py-10 text-gray-400">
              Your cart is empty<br /><small>Add some delicious items!</small>
            </div>
          ) : (
            cart.map((item, index) => (
              <div key={item.id + index} className="flex gap-4 py-4 border-b border-gray-100">
                <img src={item.image} alt={item.name} className="w-[70px] h-[70px] object-cover rounded-lg" />
                <div className="flex-1">
                  <div className="font-semibold text-sm">{item.name}</div>
                  {item.customization && <div className="text-gray-500 text-xs mt-1">{item.customization}</div>}
                  <div className="text-crust font-medium mt-1">${(item.price * item.quantity).toFixed(2)}</div>
                  <div className="flex items-center gap-2.5 mt-2">
                    <button onClick={() => updateQty(index, -1)} className="w-7 h-7 border border-gray-200 bg-white rounded cursor-pointer text-base hover:bg-gray-50">−</button>
                    <span className="text-sm font-medium">{item.quantity}</span>
                    <button onClick={() => updateQty(index, 1)} className="w-7 h-7 border border-gray-200 bg-white rounded cursor-pointer text-base hover:bg-gray-50">+</button>
                    <button onClick={() => removeItem(index)} className="ml-2 text-red-600 bg-transparent border-none cursor-pointer text-sm">✕</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="p-5 border-t border-gray-100 bg-gray-50 flex-shrink-0">
          <div className="flex justify-between text-lg font-semibold mb-4">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button
            onClick={checkout}
            disabled={cart.length === 0}
            className="w-full py-4 bg-crust text-white border-none rounded-lg text-base font-semibold cursor-pointer hover:bg-dark-crust transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
      {isCartOpen && <div className="fixed inset-0 bg-black/50 z-[1999]" onClick={toggleCart} />}
    </>
  )
}
