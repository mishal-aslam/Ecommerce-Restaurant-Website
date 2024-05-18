import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/page";
import MenuPage from './pages/MenuPage/page'
import Blogs from './pages/Blog/page'
import Services from './pages/Services/page'
import Layout from "./Components/Layout/page";
import CartPage from './Components/Cart'; 

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="blog" element={<Blogs />} />
        <Route path="services" element={<Services />} />
        <Route path="Components/Cart" element={<CartPage />} /> 
      </Routes>
    </Layout>
  </BrowserRouter>
  );
}

export default App;
