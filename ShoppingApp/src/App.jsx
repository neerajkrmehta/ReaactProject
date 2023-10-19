
import './App.css'
import Navbar from './Component/Navbar/Navbar'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Shop } from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" elementle={<Shop />} />
          <Route path="/mens" elementle={<ShopCategory category="mens" />} />
          <Route
            path="/womens"
            elementle={<ShopCategory category="womens" />}
          />
          <Route path="/kids" elementle={<ShopCategory category="kids" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" elementle={<Cart/>} />
          <Route path="/login" elementle={<LoginSignup/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
