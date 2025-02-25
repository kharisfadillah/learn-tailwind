import { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";

function Pos2() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cash, setCash] = useState(0);
  const [change, setChange] = useState(0);
  
  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    // Simulasi fetch data produk
    const sampleProducts = [
      { id: 1, name: "Product A", price: 10000, image: "" },
      { id: 2, name: "Product B", price: 15000, image: "" },
    ];
    setProducts(sampleProducts);
  }

  function addToCart(product) {
    setCart((prevCart) => {
      const index = prevCart.findIndex((p) => p.id === product.id);
      if (index === -1) {
        return [...prevCart, { ...product, qty: 1 }];
      } else {
        const updatedCart = [...prevCart];
        updatedCart[index].qty += 1;
        return updatedCart;
      }
    });
  }

  function getTotalPrice() {
    return cart.reduce((total, item) => total + item.qty * item.price, 0);
  }

  function handleCashInput(event) {
    setCash(parseFloat(event.target.value) || 0);
  }

  useEffect(() => {
    setChange(cash - getTotalPrice());
  }, [cash, cart]);

  return (
    <div className="flex h-screen">
      {/* Sidebar Menu */}
      <div className="w-1/4 bg-cyan-500 p-4 text-white">Menu</div>
      
      {/* Main Content */}
      <div className="w-3/4 p-4">
        <h1 className="text-2xl font-bold">Product List</h1>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded shadow">
              <p>{product.name}</p>
              <p className="font-bold">Rp {product.price.toLocaleString()}</p>
              <button 
                className="bg-blue-500 text-white px-4 py-2 mt-2" 
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        
        {/* Cart Section */}
        <div className="mt-6 border-t pt-4">
          <h2 className="text-xl font-bold">Cart</h2>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between border-b py-2">
              <p>{item.name} x{item.qty}</p>
              <p>Rp {item.price * item.qty}</p>
            </div>
          ))}
          <p className="mt-4 text-lg font-semibold">Total: Rp {getTotalPrice()}</p>
          <input 
            type="number" 
            className="border p-2 mt-2" 
            placeholder="Cash Amount"
            onChange={handleCashInput}
          />
          <p className="mt-2">Change: Rp {change}</p>
        </div>
      </div>
    </div>
  );
}

export default Pos2;
