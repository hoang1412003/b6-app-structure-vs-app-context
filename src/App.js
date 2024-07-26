import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./components/notFound/NotFound";
import Product from "./pages/product/Product";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetail from "./pages/productDetail/ProductDetail";
import { AppProvider } from "./AppContext";
import Cart from "./components/cart/Cart";


function App() {
  return (
    <div>
      <AppProvider>
      <Router>
                
                <Routes>
                    <Route index element={<Home />}></Route>
                    <Route path="/product" element={<Product />}></Route>
                    <Route path="/detail/:id" element={<ProductDetail />}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                    <Route path="/*" element={<NotFound />}></Route>
                </Routes>
            </Router>
      </AppProvider>
       
    </div>
  );
}

export default App;


