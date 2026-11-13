declare module 'products/productList' {
  const ProductList: React.ComponentType
  export default ProductList
}

declare module 'cart/cart' {
  const Cart: React.ComponentType
  export default Cart
}

declare module 'products/Button' {
  import type { ButtonHTMLAttributes } from 'react'
  const Button: React.ComponentType<ButtonHTMLAttributes<HTMLButtonElement>>
  export default Button
}
