import { useState } from "react";
import Cart from "./Component/Cart/Cart";
import Header from "./Component/Layout/Header";
import Meal from "./Component/Meals/Meal";
import CartProvider from "./Store/CartProvider";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const[cartIsShown , setCartIsShown] = useState(false);
  const showCartHandler =()=>{
    setCartIsShown(true)
  }
  const hideCartHandler =()=>{
    setCartIsShown(false)
  }
  return (
    <CartProvider>
      {cartIsShown ? <Cart onHide={hideCartHandler}/> : null}
      <Header onShow={showCartHandler} />
      <main>
      <Meal/>
      </main>
    </CartProvider>
  );
}

export default App;
