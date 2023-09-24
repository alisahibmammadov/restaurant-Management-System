import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import { useEffect, useState } from "react";
import Pos from "./pages/pos/Pos";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contact from "./components/contact/Contact";
import SingleCard from "./pages/singlePage/SingleCard";
import { Card } from "react-bootstrap";
import About from "./components/about/About";

function App() {
  const [cartItems, setCartItems] = useState([]);
 

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const addToCart = (product) => {
    const existingProductIndex = cartItems.findIndex((prod) => prod.id === product.id);
  
    if (existingProductIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex].count++;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, count: 1 }]);
    }
    toast.success(`${product.category} sepete eklendi`, {
      position: "top-right",
      autoClose: 1000, // Bildirimin ne kadar süre gösterileceğini ayarlayabilirsiniz
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };
  
  // console.log(cartItems);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/pos" element={<Pos/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/card/:id" element={<SingleCard />}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
