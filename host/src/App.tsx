import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

const ProductList = lazy(() => import('products/productList'))
const Cart = lazy(() => import('cart/cart'))
// const Button = lazy(() => import('products/Button'))

const links = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/cart', label: 'Cart' },
]

const App = () => {
  return (
    <BrowserRouter>
      <nav style={{ display: 'flex', gap: 16, padding: 16, background: '#222' }}>
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            style={({ isActive }) => ({
              padding: '8px 16px',
              color: '#fff',
              textDecoration: 'none',
              background: isActive ? '#555' : 'transparent',
            })}
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
      <main style={{ padding: 16 }}>
        {/* <Button onClick={() => alert('Button from products remote clicked!')}>
          Remote Button
        </Button> */}
        <hr />
        <Suspense fallback={<p>Loading...</p>}>

          <Routes>
            <Route path="/" element={<h2>Home page</h2>} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  )
}

export default App
