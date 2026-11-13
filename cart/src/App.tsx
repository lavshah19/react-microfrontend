import { useEffect, useState } from 'react'
import { CART_ADD_EVENT, readCartItems, writeCartItems, type CartItem } from '@microshop/cart-contract'

const btn = { border: 'none', borderRadius: 4, padding: '4px 10px', cursor: 'pointer', color: '#fff' }

const App = () => {
  const [cart, setCart] = useState<CartItem[]>(readCartItems)
  const total = cart.reduce((sum, p) => sum + p.price * p.quantity, 0)

  // products app adds items while cart is mounted
  useEffect(() => {
    const sync = () => setCart(readCartItems())
    window.addEventListener(CART_ADD_EVENT, sync)
    return () => window.removeEventListener(CART_ADD_EVENT, sync)
  }, [])

  const update = (next: CartItem[]) => {
    writeCartItems(next)
    setCart(next)
  }

  return (
    <div style={{ maxWidth: 400 }}>
      <h2>Cart</h2>
      {cart.length === 0 && <p>Cart is empty</p>}
      {cart.map((p) => (
        <div
          key={p.id}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #ddd' }}
        >
          <span>
            {p.name} x {p.quantity}
          </span>
          <span>
            ${p.price * p.quantity}{' '}
            <button
              onClick={() => update(cart.filter((i) => i.id !== p.id))}
              style={{ ...btn, background: '#c0392b', marginLeft: 8 }}
            >
              Remove
            </button>
          </span>
        </div>
      ))}
      <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 12, fontWeight: 700 }}>
        <span>Total</span>
        <span>${total}</span>
      </div>
      {cart.length > 0 && (
        <button onClick={() => update([])} style={{ ...btn, background: '#222', marginTop: 16, padding: '8px 16px' }}>
          Clear all
        </button>
      )}
    </div>
  )
}

export default App
