import { addProductToCart } from '@microshop/cart-contract'

const products = [
  { id: '1', name: 'Laptop', price: 900 },
  { id: '2', name: 'Phone', price: 600 },
  { id: '3', name: 'Headphones', price: 100 },
  { id: '4', name: 'Keyboard', price: 50 },
]

const App = () => {
  return (
    <div>
      <h2>Products</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 16 }}>
        {products.map((p) => (
          <div
            key={p.id}
            style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}
          >
            <div style={{ fontWeight: 600 }}>{p.name}</div>
            <div style={{ color: '#555', marginTop: 8 }}>${p.price}</div>
            <button
              onClick={() => addProductToCart(p)}
              style={{ marginTop: 12, padding: '6px 12px', border: 'none', borderRadius: 4, background: '#222', color: '#fff', cursor: 'pointer' }}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
