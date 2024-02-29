import Products from "./components/Products.jsx"
import CartProvider from "./context/CartProvider.jsx"

function App() {

  return (
    <>
      <CartProvider>
      <h1>app create</h1>
      <Products />
      </CartProvider>
    </>
  )
}

export default App
